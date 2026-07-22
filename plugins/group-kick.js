let handler = async (m, { conn, participants, usedPrefix, command }) => {
    let mentionedJid = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : null

    if (!mentionedJid) return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *EXPULSAR USUARIO*
│
│ ✨ *Menciona a un usuario o responde a un mensaje*
╰─────────────────────────╯`, m)

    try {
        let groupMetadata = await conn.groupMetadata(m.chat)
        let ownerGroup = groupMetadata.owner || m.chat.split`-`[0] + '@s.whatsapp.net'
        let ownerBot = global.owner[0][0] + '@s.whatsapp.net'

        if (mentionedJid === conn.user.jid) return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ✨ *No puedo expulsarme a mi misma*
╰─────────────────────────╯`, m)
        if (mentionedJid === ownerGroup) return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ✨ *No puedo expulsar al creador del grupo*
╰─────────────────────────╯`, m)
        if (mentionedJid === ownerBot) return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ✨ *No puedo expulsar al dueño del bot*
╰─────────────────────────╯`, m)

        await conn.groupParticipantsUpdate(m.chat, [mentionedJid], 'remove')
        conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *USUARIO EXPULSADO*
│
│ ✨ *@${mentionedJid.split('@')[0]} fue sacadito del grupo*
│ 🎀 *Acción ejecutada por un admin*
╰─────────────────────────╯`, m, { mentions: [mentionedJid] })
    } catch (e) {
        conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *UPS~*
│
│ ✨ *Ocurrió un problemita*
│ 🎀 *${e.message}*
╰─────────────────────────╯`, m)
    }
}

handler.help = ['kick @user']
handler.tags = ['grupos']
handler.command = ['kick', 'echar', 'hechar', 'sacar', 'ban']
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler