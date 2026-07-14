import { sticker } from '../lib/sticker.js'

const MARCA = 'Ricky Bot Prem 👾'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (!/webp|image|video/g.test(mime)) return m.reply(`╭─❒ *『 ${MARCA} 』* ❒
│ 🎭 *STICKER*
│
│ ⚠️ *Responde a una imagen, video o gif*
│ 👾 *Para convertirlo en sticker*
╰─────────────────❒`)

    let img = await q.download()
    let stiker = await sticker(img, false, MARCA, MARCA)

    await conn.sendFile(m.chat, stiker, 'sticker.webp', `╭─❒ *『 ${MARCA} 』* ❒
│ 👾 *STICKER CREADO*
│
│ > *Ricky en forma de sticker*
╰─────────────────❒`, m)
}

handler.help = ['s']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker']

export default handler