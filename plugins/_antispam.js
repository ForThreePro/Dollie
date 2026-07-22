const userSpamData = {}

let handler = async (m, { conn, args, isOwner }) => {
  if (!isOwner) return global.dfail('owner', m, conn)
  let bot = global.db.data.settings[conn.user.jid] || {}

  if (/on/i.test(args[0])) {
    bot.antiSpam = true
    await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *PROTECCIÓN ACTIVADA*
│
│ 🎀 *Estado:* ENCENDIDO
│ ⭐ *Filtro:* Stickers + Emojis
│ 💫 *Dollie vigila el floodcito*
╰─────────────────────────╯`, m)
  } else if (/off/i.test(args[0])) {
    bot.antiSpam = false
    await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *PROTECCIÓN DESACTIVADA*
│
│ 🎀 *Estado:* APAGADITO
│ ⭐ *Se permiten stickers y emojis*
╰─────────────────────────╯`, m)
  } else {
    await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ⭐ *PANEL ANTI-SPAM*
│
│ 📌 *Uso:*.antispam on /.antispam off
│ ✨ *Función:* Anti flood de stickers/emojis
│ 🎀 *Límite:* 4 avisitos | 6 expulsión
│
│ *Mantengamos el grupito bonitito* 💫
╰─────────────────────────╯`, m)
  }
}

handler.help = ['antispam on/off']
handler.tags = ['config']
handler.command = /^(antispam)$/i

handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, isPrems }) {
  const chat = global.db.data.chats[m.chat]
  const bot = global.db.data.settings[conn.user.jid] || {}

  if (!bot.antiSpam || m.fromMe) return

  const sender = m.sender
  const currentTime = Date.now()
  const timeWindow = 6000
  const warnLimit = 4
  const kickLimit = 6

  const isEmojiOnly = m.text? /^(?:\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\p{Emoji_Modifier}|\p{Emoji_Component})+$/u.test(m.text.trim()) : false
  const isSticker = m.mtype === 'stickerMessage'

  if (!isSticker &&!isEmojiOnly) return

  if (!userSpamData[sender] || (currentTime - userSpamData[sender].startTime > timeWindow)) {
    userSpamData[sender] = {
      startTime: currentTime,
      messageCount: 1
    }
  } else {
    userSpamData[sender].messageCount++
  }

  const count = userSpamData[sender].messageCount

  if (isOwner || isROwner) {
    if (count === warnLimit) {
      await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 👑 *AVISITO PARA TI*
│
│ ✨ *Bájale al spam creador*
│ 💫 *Me estás llenando de estrellitas*
╰─────────────────────────╯`, m)
    }
    return
  }

  if (m.isGroup && (isAdmin || isPrems ||!isBotAdmin)) return

  if (count === warnLimit) {
    await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ⭐ *¡AY FLOODCITO!*
│
│ 💫 *Usuario:* @${sender.split('@')[0]}
│ 🎀 *Progreso:* ${count}/${kickLimit}
│ ✨ *Advertencia:* Bájale un poquito
│
│ > *Si sigues Dollie se pone seria* 🎀
╰─────────────────────────╯`, m, { mentions: [sender] })
  }
  else if (count >= kickLimit) {
    await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *CHAU DEL GRUPO*
│
│ 🎀 *Usuario:* @${sender.split('@')[0]}
│ ⭐ *Causa:* Mucho spam de stickers/emojis
│ ✨ *Dollie tuvo que actuar*
│
│ > *Grupito protegido con mucho amor* 🎀
╰─────────────────────────╯`, m, { mentions: [sender] })
    if (m.isGroup) {
      await conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
    }
    delete userSpamData[sender]
  }
}

export default handler