import axios from 'axios'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text ||!text.includes('+')) {
        return conn.reply(m.chat, `⚡ *Rayo Prem Bot - Emojimix* ⚡\n\n📌 *Usa:* ${usedPrefix}${command} emoji1+emoji2\n\n*Ejemplo:* ${usedPrefix}${command} 😈+😏\n*Ejemplo 2:* ${usedPrefix}${command} 🥵+❤️`, m)
    }

    let [emoji1, emoji2] = text.split`+`
    if (!emoji1 ||!emoji2) return conn.reply(m.chat, 'Faltan emojis. Usa:.emojimix 😈+😏', m)

    await conn.sendMessage(m.chat, { react: { text: '⚡', key: m.key } });

    try {
        // API de Google emojimix
        let url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQqIYqNfDdapY&contentfilter=high&media_filter=png_transparent&emojis=${encodeURIComponent(emoji1)},${encodeURIComponent(emoji2)}`

        let res = await axios.get(url)
        let data = res.data.results[0]?.url

        if (!data) throw 'No hay combinación para esos emojis'

        let stiker = await sticker(await (await axios.get(data, { responseType: 'arraybuffer' })).data, false, 'Team Nightwish', 'Rayo Prem Bot')

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        await conn.sendFile(m.chat, stiker, 'emojimix.webp', '', m)

    } catch (e) {
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        conn.reply(m.chat, `💀 Error: ${e}\n\nPrueba con otros emojis. No todos se pueden combinar`, m)
    }
}

handler.help = ['emojimix <emoji1>+<emoji2>']
handler.tags = ['sticker', 'nightwish']
handler.command = ['emojimix', 'mix']
handler.group = false

export default handler