let handler = async (m, { conn, participants, groupMetadata, command }) => {

    // SI ES GDC
    if (command === 'gdc' || command === 'guerradeclanes' || command === 'guerra') {
        const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/img/rayo.jpg'
        const groupAdmins = participants.filter(p => p.admin)
        const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

        let text = `🎀✧･ﾟ: *💫 𝙶𝙳𝙲 - 𝙳𝙾𝙻𝙻𝙸𝙴 𝙱𝙾𝚃 💫* :ﾟ･✧🎀

👑 𝗖𝗟𝗔𝗡𝗖𝗜𝗧𝗢: ${groupMetadata.subject}
⏰ 𝗛𝗢𝗥𝗔𝗥𝗜𝗢: __:__ 🇦🇷 / __:__ 🇵🇪

╭──────────────╮
│ㅤ✨ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗜𝗧𝗔 ➹𝟏
│
│👑 ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│
│✨ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗜𝗧𝗔 ➹𝟐
│
│👑 ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│
│✨ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗜𝗧𝗔 ➹𝟑
│
│👑 ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│
│✨ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗜𝗧𝗔 ➹𝟒
│
│👑 ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│
│✨ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗜𝗧𝗔 ➹𝟓
│
│👑 ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│
│✨ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗜𝗧𝗔 ➹𝟔
│
│👑 ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│⭐ ➤ ・
│
│ㅤ🎀 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗜𝗧𝗢𝗦:
│💜 ➤ ・
│💜 ➤ ・
│💜 ➤ ・
│💜 ➤ ・
│💜 ➤ ・
│💜 ➤ ・
╰─────────────╯

🎀✧･ﾟ: *Llenen y copien lindos* :ﾟ･✧🎀`.trim()

        return await conn.sendFile(m.chat, pp, 'gdc.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
    }

    // SI ES VS4 O VS6
    let titulares = command === 'vs6'? 6 : 4
    let suplentes = command === 'vs6'? 3 : 2

    let listaTitulares = ''
    for(let i = 1; i <= titulares; i++) {
        listaTitulares += `⭐ ${i}. ・\n`
    }

    let listaSuplentes = ''
    for(let i = 1; i <= suplentes; i++) {
        listaSuplentes += `💜 ${i}. ・\n`
    }

    let plantilla = `🎀✧･ﾟ: *💫 𝙳𝙾𝙻𝙻𝙸𝙴 𝙱𝙾𝚃 💫* :ﾟ･✧🎀

👑 𝗘𝗡𝗖𝗔𝗥𝗚𝗔𝗗𝗜𝗧𝗔: ・
⏰ 𝗛𝗢𝗥𝗜𝗧𝗔: __:__ 🇦🇷 / __:__ 🇵🇪

───────────────
    ✨ 𝗧𝗜𝗧𝗨𝗟𝗔𝗥𝗘𝗦 ✨
───────────────
${listaTitulares}
───────────────
   💫 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗜𝗧𝗢𝗦 💫
───────────────
${listaSuplentes}
───────────────
   🎁 𝗗𝗢𝗡𝗔𝗗𝗢𝗥𝗜𝗧𝗔 𝗗𝗘 𝗦𝗔𝗟𝗔 🎁
───────────────
💎 ・

🎀✧･ﾟ: *Llenen y copien lindos* :ﾟ･✧🎀`

    await conn.sendMessage(m.chat, { text: plantilla }, { quoted: m })
}

handler.help = ['vs4', 'vs6', 'gdc']
handler.tags = ['ff']
handler.command = /^(vs4|vs6|gdc|guerradeclanes|guerra)$/i
handler.group = true
handler.admin = true // SOLO ADMINS

export default handler