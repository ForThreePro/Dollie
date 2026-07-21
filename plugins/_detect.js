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
            txt = `╭─❒ *『 Ricki Prem Bot 』* ⚡❒
│ 🥥 *Ricki Prem Dice: registro del sistema*
│
│ 📢 *cambio de nombre*
│ 👤 *usuario:* ${usuario}
│ 📝 *nuevo:* _${m.messageStubParameters[0]}_
│ 💻 *grupo:* ${group}
│
│ > *🪩 Ricki Prem Dice: sistema renombrado correctamente*
╰─────────────────❒`; break

        case 22: // Cambiar foto
            txt = `╭─❒ *『 Ricki Prem Bot 』* ⚡❒
│ 🐆 *Ricki Prem Dice: registro del sistema*
│
│ 📸 *cambio de foto*
│ 👤 *usuario:* ${usuario}
│ 🖼️ *nueva imagen establecida*
│ 💻 *grupo:* ${group}
│
│ > *💿 Ricki Prem Dice: imagen actualizada en el sistema*
╰─────────────────❒`; break

        case 23: // Cambiar link
            txt = `╭─❒ *『 Ricki Prem Bot 』* ⚡❒
│ 🪩 *Ricki Prem Dice: alerta de seguridad*
│
│ 🔗 *link reseteado*
│ 👤 *usuario:* ${usuario}
│ 💻 *grupo:* ${group}
│
│ > *🥥 Ricki Prem Dice: protocolo de enlace modificado*
╰─────────────────❒`; break

        case 25: // Cambiar ajustes
            txt = `╭─❒ *『 Ricki Prem Bot 』* ⚡❒
│ 💿 *Ricki Prem Dice: ajustes modificados*
│
│ 👤 *usuario:* ${usuario}
│ ⚙️ *permisos:* ${m.messageStubParameters[0] == 'on'? '*solo admins* 🔒' : '*todos* 🔓'}
│ 📊 *edicion de info de grupo*
│
│ > *🐆 Ricki Prem Dice: permisos del sistema actualizados*
╰─────────────────❒`; break

        case 26: // Abrir/Cerrar
            txt = `╭─❒ *『 Ricki Prem Bot 』* ⚡❒
│ 🥥 *Ricki Prem Dice: estado del sistema*
│
│ 👤 *usuario:* ${usuario}
│ 🗣️ *modo:* ${m.messageStubParameters[0] == 'on'? '*solo admins* 🔒' : '*todos* 🔓'}
│ 📢 *grupo:* ${m.messageStubParameters[0] == 'on'? 'cerrado' : 'abierto'}
│
│ > *🪩 Ricki Prem Dice: modo de comunicacion actualizado*
╰─────────────────❒`; break

        case 29: // Dar admin
            txt = `╭─❒ *『 Ricki Prem Bot 』* ⚡❒
│ 🐆 *Ricki Prem Dice: ascenso de rango*
│
│ ⚡ *nuevo admin:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *otorgado por:* ${usuario}
│ 💻 *rango:* administrador
│
│ > *💿 Ricki Prem Dice: acceso de administrador concedido*
╰─────────────────❒`; break

        case 30: // Quitar admin
            txt = `╭─❒ *『 Ricki Prem Bot 』* ⚡❒
│ 🪩 *Ricki Prem Dice: rango revocado*
│
│ 💥 *admin removido:* @${m.messageStubParameters[0].split('@')[0]}
│ 👤 *ejecutado por:* ${usuario}
│ 🗑️ *permisos eliminados*
│
│ > *🥥 Ricki Prem Dice: acceso de administrador revocado*
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