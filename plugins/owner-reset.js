import { spawn } from 'child_process'

var handler = async (m, { conn, isROwner, text }) => {

if (!process.send) throw 'Dont: node mini.js\nDo: node index.js'
if (conn.user.jid == conn.user.jid) {
await conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *REINICIANDO BOT*
│
│ 💫 *Estado:* Reiniciando sistemitas
│ 🎀 *Dollie Bot vuelve en segundos* 👑
╰─────────────────────────╯`, m)
process.send('reset')
} else throw 'eh'

}

handler.help = ['restart', 'reiniciar']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true

export default handler