const handler = async (m, { conn, args, isAdmin, isOwner }) => {
    // Validación de permisos para el comando
    if (!isAdmin &&!isOwner) throw `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│ Solo las *ADMINS* pueden usar esto ⭐
╰─────────────────────────╯`

    let chat = global.db.data.chats[m.chat]
    if (!chat) global.db.data.chats[m.chat] = {}

    if (/on/i.test(args[0])) {
        chat.modoadmin = true
        await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *MODO ADMIN ACTIVADO*
│
│ 🎀 *Estado:* ENCENDIDO
│ ⭐ *Restricción:* Solo Admins
│ 💫 *Los comandos están protejiditos*
│
│ > *“Dollie cuida tu grupito”* 🎀
╰─────────────────────────╯`, m)
    } else if (/off/i.test(args[0])) {
        chat.modoadmin = false
        await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *MODO ADMIN DESACTIVADO*
│
│ 🎀 *Estado:* APAGADITO
│ ⭐ *Todos pueden usar el bot*
│ ✨ *Chat libre nuevamente*
╰─────────────────────────╯`, m)
    } else {
        await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ⭐ *PANEL MODO ADMIN*
│
│ 📌 *Uso:*.modoadmin on /.modoadmin off
│ ✨ *Función:* Restringe comandos a admins
│ 🎀 *Protege:* Uso indebido del bot
│
│ *Control coqueto del grupo* 💫
╰─────────────────────────╯`, m)
    }
}

handler.help = ['modoadmin <on/off>']
handler.tags = ['config']
handler.command = /^(modoadmin|adminmode)$/i

handler.before = async function (m, { conn, isAdmin, isOwner, isROwner, isPrems }) {
    if (m.isBaileys || m.fromMe) return!0

    let chat = global.db.data.chats[m.chat]
    if (!chat) return!0

    // Si estamos en un grupo
    if (m.isGroup) {
        // Si el modo admin está activo y el que escribe NO es admin/owner/premium
        if (chat.modoadmin &&!isAdmin &&!isOwner &&!isROwner &&!isPrems) {
            // Si el usuario intenta usar un comando (empieza con prefijo), bloqueamos
            if (m.text.startsWith('.') || m.text.startsWith('/') || m.text.startsWith('#')) {
                await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *ACCESO BLOQUEADITO*
│
│ ⭐ *Modo Admin:* ACTIVADO
│ 🎀 *No tienes permisi~*
│ ✨ *Solo admins pueden usar comandos*
╰─────────────────────────╯`, m)
                return false // Detiene la ejecución de otros plugins
            }
        }
    } else {
        // Chats privados - todos pueden usar
        return!0
    }

    return!0
}

export default handler