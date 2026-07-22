let handler = async (m, { conn }) => {
    try {
        await conn.groupParticipantsUpdate(m.chat, [conn.user.jid], 'promote')
        m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *AUTOPROMOTE*
│
│ ✅ *Estado:* Admin asignado
│ 💫 *Dollie Bot toma el control* 👑
╰─────────────────────────╯`)
    } catch (e) {
        m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ❌ *ERROR AUTOPROMOTE*
│
│ ⚠️ *No pude asignarme admin*
│ 🎀 *Dame permisos primero bb*
╰─────────────────────────╯`)
    }
}

handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = ['autoadmin']
handler.rowner = true

export default handler