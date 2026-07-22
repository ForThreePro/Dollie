import { addExif } from '../lib/sticker.js'

const MARCA = '𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 🎀'

let handler = async (m, { conn, text }) => {
  if (!m.quoted) return conn.reply(m.chat, `🎀 *${MARCA}* ➔ Responde a un *sticker* para robarlo.`, m)
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return conn.reply(m.chat, `🎀 *${MARCA}* ➔ Eso no es un *sticker*. Responde a un sticker.`, m)
    let img = await m.quoted.download()
    if (!img) return conn.reply(m.chat, `🎀 *${MARCA}* ➔ No pude descargar el *sticker*.`, m)
    stiker = await addExif(img, packname || MARCA, author || '✨ Premium Edition ✨') // Marca por defecto
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'DollieWM.webp', `🎀 *${MARCA}* | Sticker reclamado 💫`, m)
    else return conn.reply(m.chat, `🎀 *${MARCA}* ➔ Error al procesar el *sticker*.`, m)
  }
}
handler.help = ['wm <nombre>|<autor>']
handler.tags = ['sticker']
handler.command = ['take', 'robar', 'wm'] 

export default handler