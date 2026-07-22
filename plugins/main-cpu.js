import os from 'os'

let handler = async (m) => {
    let cpu = os.loadavg()[0].toFixed(2)
    let totalmem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
    let freemem = (os.freem() / 1024 / 1024 / 1024).toFixed(2)
    let usedmem = (totalmem - freem).toFixed(2)
    let platform = os.platform()

    m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *MONITOR DEL SISTEMA*
│
│ 💫 *CPU Carga:* ${cpu}%
│ 🧠 *RAM Usada:* ${usedmem} GB / ${totalmem} GB
│ 💾 *RAM Libre:* ${freemem} GB
│ 🖥️ *Sistema:* ${platform}
│
│ 🎀 *Estado:* Todo optimizadito
╰─────────────────────────╯`)
}

handler.help = ['cpu', 'ping']
handler.tags = ['main']
handler.command = ['cpu', 'ping']

export default handler