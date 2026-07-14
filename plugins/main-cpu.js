import os from 'os'

let handler = async (m) => {
    let cpu = os.loadavg()[0].toFixed(2)
    m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🖥️ *MONITOR CPU*
│
│ ⚡ *Carga Actual:* ${cpu}%
│ 👾 *Estado:* Sistema operativo
╰─────────────────❒`)
}

handler.help = ['cpu']
handler.tags = ['main']
handler.command = ['cpu']

export default handler