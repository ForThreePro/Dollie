import axios from 'axios'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text || !text.includes('+')) {
        return m.reply(`⚡ *Team Nightwish - Rayo Prem Bot* ⚡\n\n✨ Ejemplo: *${usedPrefix + command}* 😎+🤑\n\nNo todos los emojis tienen combinación`)
    }

    let [emoji1, emoji2] = text.split`+`
    emoji1 = emoji1.trim()
    emoji2 = emoji2.trim()

    if (!emoji1 || !emoji2) return m.reply(`Falta 1 emoji. Ejemplo: ${usedPrefix + command} 😈+😏`)

    await conn.sendMessage(m.chat, { react: { text: '⚡', key: m.key } })

    try {
        // Convertir emoji a código hex para Gboard
        const getCode = (e) => [...e].map(c => c.codePointAt(0).toString(16)).join('-')
        let e1 = getCode(emoji1)
        let e2 = getCode(emoji2)
        
        // URL de Gboard Emoji Kitchen
        let url = `https://www.gstatic.com/android/keyboard/emojikitchen/20240222/u/${e1}/u${e1}_u${e2}.png`

        let res = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 })
        let stiker = await sticker(res.data, false, 'Team Nightwish', 'Rayo Prem Bot')

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        await conn.sendFile(m.chat, stiker, 'emojimix.webp', '', m, { asSticker: true })

    } catch (e) {
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
        m.reply(`💀 Esa combinación no existe\nPrueba estas que sí hay:\n😂+😭  😈+😏  🥵+❤️  🥺+👉👈`)
    }
}

handler.help = ['emojimix <emoji+emoji>']
handler.tags = ['sticker', 'nightwish']
handler.command = ['emojimix', 'mix']
handler.register = false

export default handler