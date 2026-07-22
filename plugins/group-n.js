let mutedUsers = new Set();

let handler = async (m, { conn, command, participants }) => {
    let mentionedJid = m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : false;
    if (!mentionedJid) return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ✨ *USO:* Responde a un mensaje
│
│ > *“Necesito saber a quién mutear”* 🎀
╰─────────────────────────╯`);

    let isUserAdmin = participants.find(p => p.id === mentionedJid)?.admin;
    if (isUserAdmin) return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *ACCESO DENEGADO*
│
│ 💫 *No puedo mutear a un administrador*
│
│ > *“Rango superior detectado”* 👑
╰─────────────────────────╯`);

    if (mentionedJid === conn.user.jid) return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ✨ *No puedo mutearme a mi misma*
│
│ > *“Auto-mute no permitido”* 🎀
╰─────────────────────────╯`);

    if (command === "mute") {
        mutedUsers.add(mentionedJid);
        conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 🔇 *USUARIO SILENCIADITO*
│
│ 👤 *Objetivo:* @${mentionedJid.split('@')[0]}
│ 📊 *Estado:* MUTE ACTIVADO ✨
│
│ > *“Sus mensajes serán borrados”* 💫
╰─────────────────────────╯`, m, { mentions: [mentionedJid] });
    } else if (command === "unmute") {
        mutedUsers.delete(mentionedJid);
        conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 🔊 *USUARIO LIBERADITO*
│
│ 👤 *Objetivo:* @${mentionedJid.split('@')[0]}
│ 📊 *Estado:* MUTE DESACTIVADO ✨
│
│ > *“Ya puede volver a escribir”* 🎀
╰─────────────────────────╯`, m, { mentions: [mentionedJid] });
    }
};

handler.before = async (m, { conn, isAdmin }) => {
    // Si el remitente del mensaje está en la lista de muteados, eliminamos el mensaje
    if (mutedUsers.has(m.sender)) {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error(e);
        }
    }
};

handler.help = ['mute', 'unmute'].map(v => v + ' Responde al mensaje')
handler.tags = ['grupos'];
handler.command = /^(mute|unmute)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler