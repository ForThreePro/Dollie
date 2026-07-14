let handler = async (m) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ⏰ *TIEMPO ACTIVO*
│
│ ⚡ *Online:* ${uptime}
│ 👾 *Estado:* Bot siempre activo
╰─────────────────❒`)
}

function clockString(ms) {
    let d = Math.floor(ms / 86400000)
    let h = Math.floor(ms / 3600000) % 24
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return `${d}d ${h}h ${m}m ${s}s`
}

handler.help = ['uptime']
handler.tags = ['main']
handler.command = ['uptime']

export default handler