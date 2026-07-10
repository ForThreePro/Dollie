import { join } from 'path'
import { readFileSync } from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
  let taguser = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0] : m.quoted? m.quoted.sender : m.sender

  const img = readFileSync(join(process.cwd(), 'storage', 'img', 'rayo.jpg'))

  let menuText = `⛈️ *[ RAYO PREM BOT ]* 🌙\n\n` // Cambiado
  menuText += `👤 *Usuario:* @${taguser.split('@')[0]}\n`
  menuText += `⚡ *Prefijo:* [ ${usedPrefix} ]\n\n` // Cambiado emoji

  let help = Object.values(global.plugins).filter(p => p.help &&!p.disabled)
  let groups = {}

  for (let plugin of help) {
    let category = plugin.tags? plugin.tags[0] : 'otros'
    if (!groups[category]) groups[category] = []

    if (Array.isArray(plugin.help)) {
      groups[category].push(...plugin.help)
    } else {
      groups[category].push(plugin.help)
    }
  }

  for (let category in groups) {
    menuText += `*⚡ [ ${category.toUpperCase()} ] ⚡*\n` // Cambiado
    for (let cmd of groups[category]) {
      menuText += `│ 🌙 ${usedPrefix}${cmd}\n` // Cambiado emoji
    }
    menuText += `*───────────────────*\n\n`
  }

  menuText += `⚡ *Team Nightwish • Whois Yallico* 🌙` // Cambiado

  await conn.sendMessage(m.chat, {
    image: img,
    caption: menuText,
    mentions: [taguser]
  }, { quoted: m })
}
handler.command = /^(menu|help|menú)$/i

export default handler