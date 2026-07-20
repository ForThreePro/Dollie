import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'

// COMANDOS
let handler = async (m, { conn, command, args }) => {
    if (!m.isGroup) return m.reply('😎 Solo funciona en grupos rey 🫂')
    if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
    let chat = global.db.data.chats[m.chat]

    if (!args[0]) {
        let w = chat.welcome? '😎 ON' : '🫂 OFF'
        let b = chat.bye? '😎 ON' : '🫂 OFF'
        let k = chat.kick? '😎 ON' : '🫂 OFF'
        return conn.reply(m.chat, `╭─ 😎 𝗥𝗜𝗖𝗞𝗬 𝗣𝗥𝗘𝗠 𝗕𝗢𝗧 🫂 ─╮
│
│ 🔥 *Panel de Control*
│
│ 1. Bienvenidas : ${w}
│ 2. Despedidas : ${b}
│ 3. Expulsiones : ${k}
│
│ *Comandos*
│.on welcome /.off welcome
│.on bye /.off bye
│.on kick /.off kick
│
╰──────── 😎 ────────╯`, m)
    }

    let accion = args[0].toLowerCase()
    if (accion!== 'on' && accion!== 'off') return m.reply('😎 Usa:.on welcome o.off welcome rey')

    chat[command] = accion === 'on'
    let icon = chat[command]? '😎' : '🫂'
    let nombre = command === 'welcome'? 'Bienvenidas' : command === 'bye'? 'Despedidas' : 'Expulsiones'
    m.reply(`${icon} *${nombre}* ${chat[command]? 'activadas rey' : 'desactivadas mano'}`)
}
handler.command = /^(welcome|bye|kick)$/i
handler.admin = true
handler.group = true
export default handler

// DETECTOR
handler.before = async function (m, { conn }) {
    if (!m.messageStubType ||!m.isGroup) return
    if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
    let chat = global.db.data.chats[m.chat]

    let who = m.messageStubParameters?.[0]
    if (!who) return

    let metadata = await conn.groupMetadata(m.chat).catch(() => null)
    if (!metadata) return
    let user = '@' + who.split('@')[0]

    // FIX @lid
    let realJid = who
    if (who.endsWith('@lid')) {
        try {
            let info = await conn.onWhatsApp(who)
            realJid = info[0]?.jid || who
        } catch(e){}
    }

    // FOTO
    let img
    try {
        let pp = await conn.profilePictureUrl(realJid, 'image')
        img = await fetch(pp).then(v => v.buffer())
    } catch {
        img = await fetch('https://files.evogb.win/Bgdzpj.jpg').then(v => v.buffer()).catch(() => null)
    }

    let txt = ''
    let audio = ''

    // WELCOME
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
        if (chat.welcome == false) return
        audio = 'bienvenida.mp3'
        txt = `╭─ 😎 *Llegó Gente Fina* 🫂 ─╮
│
│ 🔥 *Bro:* ${user}
│ 😎 *Grupo:* ${metadata.subject}
│ 🫂 *Somos:* ${metadata.participants.length} en la sala
│
│ "Bienvenido rey~
│ Pásala bien aquí 😎"
│
╰─────────────────────╯`
    }

    // BYE
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
        if (chat.bye == false) return
        audio = 'despedida.mp3'
        txt = `╭─ 🫂 *Se Fue Un Bro* 😎 ─╮
│
│ 🔥 *Bro:* ${user}
│ 😎 *Grupo:* ${metadata.subject}
│ 🫂 *Quedamos:* ${metadata.participants.length} en la sala
│
│ "Cuídate rey, vuelve pronto 😎"
│
╰───────────────────╯`
    }

    // KICK
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
        if (chat.kick == false) return
        audio = 'kick.mp3'
        txt = `╭─ 😎 *Baneado* 🫂 ─╮
│
│ 🔥 *Bro:* ${user}
│ ⚠️ *Motivo:* Rompió reglas
│ 😎 *Grupo:* ${metadata.subject}
│
│ "Aquí se respeta o se va 🫂"
│
╰───────────────────╯`
    }

    if (!txt) return

    await conn.sendMessage(m.chat, {
        image: img,
        caption: txt,
        mentions: [who]
    })

    // AUDIO
    let audioPath = path.join(process.cwd(), audio)
    if (fs.existsSync(audioPath)) {
        setTimeout(async () => {
            await conn.sendMessage(m.chat, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mpeg',
                ptt: false
            })
        }, 1500)
    }
}