import { sticker } from '../lib/sticker.js'

const MARCA = '𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 🎀'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/webp|image|video/g.test(mime)) return m.reply(`╭─🎀─❒ *『 ${MARCA} 』* ❒─🎀─╮
│ ✨ *STICKER*
│
│ ⚠️ *Responde a una imagen, video o gif*
│ 🎀 *Para convertirlo en sticker*
╰─────────────────────────╯`)

    let img = await q.download()
    let stiker = await sticker(img, false, MARCA, '✨ Premium Edition ✨')

    await conn.sendFile(m.chat, stiker, 'DollieSticker.webp', `╭─🎀─❒ *『 ${MARCA} 』* ❒─🎀─╮
│ 💫 *STICKER CREADO*
│
│ > *Dollie en forma de sticker* 🎀
╰─────────────────────────╯`, m)
}

handler.help = ['s', 'sticker', 'stiker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker']

export default handler