let handler = async (m, { conn }) => {
    try {
        await conn.groupParticipantsUpdate(m.chat, [conn.user.jid], 'promote')
        m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 👑 *AUTOPROMOTE*
│
│ ✅ *Estado:* Admin asignado
│ 👾 *Ricky Bot Prem toma el control*
╰─────────────────❒`)
    } catch (e) {
        m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ❌ *ERROR AUTOPROMOTE*
│
│ ⚠️ *No pude asignarme admin*
│ 👾 *Dame permisos primero*
╰─────────────────❒`)
    }
}

handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = ['autoadmin']
handler.rowner = true

export default handler