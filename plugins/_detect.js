import chalk from 'chalk'
import { WAMessageStubType } from '@whiskeysockets/baileys'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
    if (!m.messageStubType ||!m.isGroup) return

    let chat = global.db.data.chats[m.chat]
    if (!chat?.detect) return

    const userJid = m.sender
    const usuario = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject

    let txt = ''

    switch (m.messageStubType) {
        case 21: // Cambiar nombre
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 👾 *REGISTRO DEL GRUPO*
│
│ 📢 *CAMBIO DE NOMBRE*
│ 👤 *Usuario:* ${usuario}
│ 📝 *Nuevo:* _${m.messageStubParameters[0]}_
│ 🌩️ *Grupo:* ${group}
│
│ > *“Ricky ha registrado el cambio”* ⚡
╰─────────────────❒`; break

        case 22: // Cambiar foto
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 👾 *REGISTRO DEL GRUPO*
│
│ 📸 *CAMBIO DE FOTO*
│ 👤 *Usuario:* ${usuario}
│ 🖼️ *Nueva imagen establecida*
│ 🌩️ *Grupo:* ${group}
│
│ > *“Imagen actualizada correctamente”* ⚡
╰─────────────────❒`; break

        case 23: // Cambiar link
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ⛈️ *ALERTA DE SEGURIDAD*
│
│ 🔗 *LINK RESETEADO*
│ 👤 *Usuario:* ${usuario}
│ 🌩️ *Grupo:* ${group}
│
│ > *“El enlace del grupo fue modificado”* ⚡
╰─────────────────❒`; break

        case 25: // Cambiar ajustes
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🛡️ *AJUSTES MODIFICADOS*
│
│ 👤 *Usuario:* ${usuario}
│ ⚙️ *Permisos:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
│ 📊 *Edición de info de grupo*
│
│ > *“Configuración actualizada”* ⚡
╰─────────────────❒`; break

        case 26: // Abrir/Cerrar
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 👾 *ESTADO DEL CHAT*
│
│ 👤 *Usuario:* ${usuario}
│ 🗣️ *Modo:* ${m.messageStubParameters[0] == 'on'? '*SOLO ADMINS* 🔒' : '*TODOS* 🔓'}
│ 📢 *Grupo:* ${m.messageStubParameters[0] == 'on'? 'CERRADO' : 'ABIERTO'}
│
│ > *“Permisos de envío actualizados”* ⚡
╰─────────────────❒`; break

        case 29: // Dar admin
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 👑 *NUEVO ADMINISTRADOR*
│
│ ⚡ *Nuevo Admin:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Otorgado por:* ${usuario}
│ 🌙 *Rango:* Administrador
│
│ > *“Ascenso registrado”* ⚡
╰─────────────────❒`; break

        case 30: // Quitar admin
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 📉 *ADMIN REMOVIDO*
│
│ 💥 *Admin removido:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Ejecutado por:* ${usuario}
│ 🗑️ *Rango removido*
│
│ > *“Destitución registrada”* ⚡
╰─────────────────❒`; break

        case WAMessageStubType.GROUP_PARTICIPANT_ADD:
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🌩️ *NUEVO INTEGRANTE*
│
│ 🔥 *Bienvenido:* @${m.messageStubParameters[0].split('@')[0]}
│ 👾 *Grupo:* ${group}
│ ⚡ *Estado:* Ingreso registrado
│
│ > *“Bienvenido al grupo”* 👾
╰─────────────────❒`; break

        case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 💨 *SALIDA REGISTRADA*
│
│ 😔 *Se fue:* @${m.messageStubParameters[0].split('@')[0]}
│ 👾 *Grupo:* ${group}
│ 🌫️ *Estado:* Abandonó el grupo
│
│ > *“Salida registrada”* ⚡
╰─────────────────❒`; break

        case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
            txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🚮 *EXPULSIÓN EJECUTADA*
│
│ 💣 *Eliminado:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *Por orden de:* ${usuario}
│ ⛈️ *Causa:* Violación de reglas
│
│ > *“Expulsión ejecutada”* ⚡
╰─────────────────❒`; break
    }

    if (txt) {
        await this.sendMessage(m.chat, {
            text: txt,
            mentions: [userJid,...(m.messageStubParameters?.[0]? [m.messageStubParameters[0]] : [])]
        })
    }
}

export default handler