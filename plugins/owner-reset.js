import { spawn } from 'child_process'

var handler = async (m, { conn, isROwner, text }) => {

if (!process.send) throw 'Dont: node mini.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
await conn.reply(m.chat, `╭─❒ *『 𝗧𝗘𝗔𝗠 𝗡𝗜𝗚𝗛𝗧𝗪𝗜𝗦𝗛 』* ❒
│ 🔄 *REINICIANDO BOT*
│
│ ⚡ *Estado:* Reiniciando sistemas
│ 🌙 *El trueno volverá en segundos*
╰─────────────────❒`, m)
process.send('reset')
} else throw 'eh'

}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true

export default handler