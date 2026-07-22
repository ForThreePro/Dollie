import chalk from 'chalk'
import { WAMessageStubType } from '@whiskeysockets/baileys'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
    if (!m.messageStubType ||!m.isGroup) return

    let chat = global.db.data.chats[m.chat]
    if (!chat?.detect) return // solo funciona si detect esta ON

    const userJid = m.sender
    const usuario = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject

    let txt = ''

    switch (m.messageStubType) {
        case 21: // Cambiar nombre
            txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *Dollie registra~*
│
│ ⭐ *Cambio de nombrecito*
│ 🎀 *Usuario:* ${usuario}
│ 💫 *Nuevo:* _${m.messageStubParameters[0]}_
│ 💝 *Grupo:* ${group}
│
│ > *Todo quedó lindito y actualizado* 🎀
╰─────────────────────────╯`; break

        case 22: // Cambiar foto
            txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *Dollie registra~*
│
│ ⭐ *Nueva fotito del grupo*
│ 🎀 *Usuario:* ${usuario}
│ 💫 *Imagen actualizada*
│ 💝 *Grupo:* ${group}
│
│ > *Se ve hermosita ahora* 🎀
╰─────────────────────────╯`; break

        case 23: // Cambiar link
            txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *Dollie alerta~*
│
│ ⭐ *Link reseteado*
│ 🎀 *Usuario:* ${usuario}
│ 💫 *Grupo:* ${group}
│
│ > *El linkito ya es nuevito* 🎀
╰─────────────────────────╯`; break

        case 25: // Cambiar ajustes
            txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *Dollie ajusta~*
│
│ 🎀 *Usuario:* ${usuario}
│ ⭐ *Permisos:* ${m.messageStubParameters[0] == 'on'? '*solo admins* 🔒' : '*todos* 🔓'}
│ 💫 *Edición de info del grupo*
│
│ > *Permisitos actualizados* 🎀
╰─────────────────────────╯`; break

        case 26: // Abrir/Cerrar
            txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *Dollie informa~*
│
│ 🎀 *Usuario:* ${usuario}
│ ⭐ *Modo:* ${m.messageStubParameters[0] == 'on'? '*solo admins* 🔒' : '*todos* 🔓'}
│ 💫 *Grupo:* ${m.messageStubParameters[0] == 'on'? 'cerradito' : 'abiertito'}
│
│ > *Modo de chat actualizado* 🎀
╰─────────────────────────╯`; break

        case 29: // Dar admin
            txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *Dollie asciende~*
│
│ ⭐ *Nuevo admin:* @${m.messageStubParameters[0].split('@')[0]}
│ 🎀 *Otorgado por:* ${usuario}
│ 💫 *Rango:* Administrador
│
│ > *Bienvenido al staff coqueto* 🎀
╰─────────────────────────╯`; break

        case 30: // Quitar admin
            txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *Dollie remueve~*
│
│ ⭐ *Admin removido:* @${m.messageStubParameters[0].split('@')[0]}
│ 🎀 *Ejecutado por:* ${usuario}
│ 💫 *Permisos eliminados*
│
│ > *Rango revocado con amor* 🎀
╰─────────────────────────╯`; break
    }

    if (txt) {
        await this.sendMessage(m.chat, {
            text: txt,
            mentions: [userJid,...(m.messageStubParameters?.[0]? [m.messageStubParameters[0]] : [])]
        })
    }
}

export default handler