let handler = async (m, { conn }) => {
    try {
        let link = await conn.groupInviteCode(m.chat)
        let text = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *LINK DEL GRUPO*
│
│ 💫 https://chat.whatsapp.com/${link}
│
│ > *“Compártelo con amor”* 🎀
╰─────────────────────────╯`
        m.reply(text)
    } catch {
        m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *UPS~*
│
│ ✨ *No pude obtener el link*
│ 🎀 *¿Soy administradora del grupo?*
╰─────────────────────────╯`)
    }
}

handler.help = ['link']
handler.tags = ['grupos']
handler.command = ['link', 'linkgroup']
handler.group = true
handler.botAdmin = true

export default handler