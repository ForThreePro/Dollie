import MessageType from '@whiskeysockets/baileys'
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg

  // Detectar si el mensaje citado es del bot
  let botJid = conn.user.jid
  let isFromBot = false

  if (q?.key?.fromMe) {
    isFromBot = true
  } else if (q?.participant && botJid.includes(q.participant)) {
    isFromBot = true
  } else if (q?.sender && botJid.includes(q.sender)) {
    isFromBot = true
  }

  // Obtener nombre del grupo
  let groupMeta = await conn.groupMetadata(m.chat).catch(() => null)
  let groupName = groupMeta?.subject || "Grupo"

  // Watermark RAYO PREM
  let watermark = `\n\n`

  // Construir el texto final según origen
  let baseText = text || q.text || c || ''
  let finalText = isFromBot ? baseText : `${baseText}` // Cambiado

  const msg = conn.cMod(
    m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: finalText
      }
    }, {
      userJid: conn.user.id
    }),
    finalText,
    conn.user.jid,
    { mentions: users }
  )

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

handler.help = ['hidetag <texto>']
handler.tags = ['grupos']
handler.command = /^(hidetag|notify|notificar|notifi|noti|n|hidet|aviso)$/i
handler.group = true
handler.admin = true

export default handler

let handler = async (m, { conn, participants, usedPrefix, command }) => {
    let mentionedJid = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : null

    if (!mentionedJid) return conn.reply(m.chat, `⛈️ *RAYO PREM KICK* 🌙\n\n⚡ Menciona a un usuario o responde a un mensaje para expulsarlo.`, m) // Cambiado

    try {
        let groupMetadata = await conn.groupMetadata(m.chat)
        let ownerGroup = groupMetadata.owner || m.chat.split`-`[0] + '@s.whatsapp.net'
        let ownerBot = global.owner[0][0] + '@s.whatsapp.net'

        if (mentionedJid === conn.user.jid) return conn.reply(m.chat, `⛈️ *RAYO PREM ERROR* ➔ No puedo expulsarme a mi mismo.`, m) // Cambiado
        if (mentionedJid === ownerGroup) return conn.reply(m.chat, `⛈️ *RAYO PREM ERROR* ➔ No puedo expulsar al creador del grupo.`, m) // Cambiado
        if (mentionedJid === ownerBot) return conn.reply(m.chat, `⛈️ *RAYO PREM ERROR* ➔ No puedo expulsar al dueño del bot.`, m) // Cambiado

        await conn.groupParticipantsUpdate(m.chat, [mentionedJid], 'remove')
        conn.reply(m.chat, `🌩️ *RAYO PREM* ➔ USUARIO EXPULSADO\n⚡ @${mentionedJid.split('@')[0]} fue sacado del grupo\n🌙 *Team Nightwish*`, m, { mentions: [mentionedJid] }) // Cambiado
    } catch (e) {
        conn.reply(m.chat, `⛈️ *RAYO PREM ERROR* ➔ Ocurrió un problema.\n> *Error:* ${e.message}`, m) // Cambiado
    }
}

handler.help = ['kick @user']
handler.tags = ['grupos']
handler.command = ['kick', 'echar', 'hechar', 'sacar', 'ban']
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler