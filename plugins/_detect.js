import { WAMessageStubType } from '@whiskeysockets/baileys'

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
  try {
    if (!m.messageStubType ||!m.isGroup) return true

    const chat = global.db?.data?.chats?.[m.chat]
    if (!chat?.detector) return true // se activa con.detector on

    const userJid = m.messageStubParameters?.[0] || m.sender
    if (!userJid) return true

    const user = `@${userJid.split('@')[0]}`
    const group = groupMetadata.subject

    let txt = ''
    let img = 'https://files.evogb.win/91Vvmc.jpg' // tu imagen fallback

    switch (m.messageStubType) {
      // MIEMBROS
      case WAMessageStubType.GROUP_PARTICIPANT_ADD:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n🌩️ ${user} se unió a *${group}*`
        break
      case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n💨 ${user} salió de *${group}*`
        break
      case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n🚮 ${user} fue expulsado de *${group}*`
        break

      // ADMINS
      case WAMessageStubType.GROUP_PARTICIPANT_ADD_ADMIN:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n👑 ${user} ahora es *ADMIN* en *${group}*`
        break
      case WAMessageStubType.GROUP_PARTICIPANT_REMOVE_ADMIN:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n📉 ${user} ya no es *ADMIN* en *${group}*`
        break

      // CAMBIOS DE GRUPO
      case WAMessageStubType.GROUP_CHANGE_SUBJECT:
        const newName = m.messageStubParameters?.[0] || group
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n📝 *Nombre cambiado*\n\n*Antes:* ${group}\n*Ahora:* ${newName}`
        break
      case WAMessageStubType.GROUP_CHANGE_DESCRIPTION:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n📜 *Descripción cambiada* en *${group}*`
        break
      case WAMessageStubType.GROUP_CHANGE_ICON:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n🖼️ *Foto de grupo cambiada* en *${group}*`
        break
      case WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
        txt = `⛈️ *RAYO PREM DETECTOR* ⚡\n\n🔗 *Link del grupo cambiado* en *${group}*`
        break
    }

    if (txt) {
      await conn.sendMessage(m.chat, {
        image: { url: img },
        caption: txt,
        mentions: [userJid]
      })
    }

  } catch (e) {
    console.error("Error Detector:", e)
  }
  return true
}

// Comando para activar/desactivar
handler.command = /^(detector)$/i
handler.group = true
handler.admin = true

handler.help = ['detector on', 'detector off']
handler.tags = ['config']

export default handler