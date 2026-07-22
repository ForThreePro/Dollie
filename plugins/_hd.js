import fetch from "node-fetch"
import FormData from "form-data"
import crypto from "crypto"

const MARCA = 'Dollie bot 🎀' // <- TU MARCA

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const key = Buffer.from('c2FzdWtl', 'base64').toString('utf-8')
    let q = m.quoted? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    let urlTarget = text? text.trim() : ''

    if (!urlTarget &&!/image\/(jpe?g|png)/.test(mime)) {
        return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *HD UPSCALER AI*
│
│ 🎀 *Usito correcto:* ⭐
│ Respóndele a una imagen o manda
│ un link con: *${usedPrefix + command}*
│
│ 💫 *Formatos:* JPG / PNG
│ ⭐ *Potenciado con magia IA*
╰─────────────────────────╯`, m)
    }

    await m.react('⏳')
    try {
        let finalUrl = urlTarget

        if (!finalUrl && /image\/(jpe?g|png)/.test(mime)) {
            let imgBuffer = await q.download()
            let ext = mime.split('/')[1] || 'jpg'
            let filename = 'media-' + crypto.randomBytes(8).toString('hex') + '.' + ext

            let formulario = new FormData()
            formulario.append('file', imgBuffer, { filename, contentType: mime })

            let resUpload = await fetch(`https://api.evogb.org/tools/upload?key=${key}`, {
                method: 'POST',
                body: formulario,
                headers: {
                   ...formulario.getHeaders(),
                    'User-Agent': 'Mozilla/5.0'
                }
            })
            let jsonUpload = await resUpload.json()
            if (jsonUpload.status && jsonUpload.url) {
                finalUrl = jsonUpload.url
            } else {
                await m.react('❌')
                return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ⭐ *No pude subir la fotito*
│ 🎀 *Motivo:* ${jsonUpload?.message || 'Sin respuesta'}
╰─────────────────────────╯`)
            }
        }

        let resDl = await fetch(`https://api.evogb.org/tools/upscale?method=url&url=${encodeURIComponent(finalUrl)}&key=${key}`)
        let contentType = resDl.headers.get("content-type")

        if (contentType && contentType.includes("application/json")) {
            let jsonDl = await resDl.json()
            await m.react('❌')
            return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *ERRORCITO*
│
│ ⭐ *${jsonDl.message || 'No pude mejorar la imagen.'}*
╰─────────────────────────╯`)
        }

        let buffer = await resDl.buffer()
        let info = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *FOTITO MEJORADA*
│
│ 🎀 *Estado:* Procesado con IA
│ ⭐ *Comando:* ${command.toUpperCase()}
│ 💫 *Bot:* Dollie bot
│ ✨ *API:* evogb.org
│
│ > *“Calidad brillosa con IA”* 🎀
╰─────────────────────────╯`

        await conn.sendMessage(m.chat, { image: buffer, caption: info }, { quoted: m })
        await m.react('✅')

    } catch (e) {
        console.error(e)
        await m.react('❌')
        m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *UPS~*
│
│ ⭐ *Servidores ocupaditos*
│ 🎀 *Intenta de nuevo en un ratito*
╰─────────────────────────╯`)
    }
}

handler.help = ['upscale', 'remini']
handler.tags = ['tools']
handler.command = /^(upscale|remini|hd|mejorar)$/i

export default handler