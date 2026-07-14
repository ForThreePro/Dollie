let handler = async (m, { conn }) => {
    try {
        let link = await conn.groupInviteCode(m.chat)
        let text = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🔗 *LINK DEL GRUPO*
│
│ ⚡ https://chat.whatsapp.com/${link}
│
│ > *“Comparte con responsabilidad”*
╰─────────────────❒`
        m.reply(text)
    } catch {
        m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ⛈️ *ERROR*
│
│ ⚡ *No pude obtener el link*
│ 👾 *¿Soy administrador del grupo?*
╰─────────────────❒`)
    }
}

handler.help = ['link']
handler.tags = ['grupos']
handler.command = ['link', 'linkgroup']
handler.group = true
handler.botAdmin = true

export default handler