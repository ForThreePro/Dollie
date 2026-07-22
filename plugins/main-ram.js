let handler = async (m) => {
    const used = process.memoryUsage()
    const total = os.totalmem() / 1024 / 1024
    const percent = ((used.heapUsed / 1024 / 1024) / total * 100).toFixed(1)

    m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *CONSUMO DE SISTEMA*
│
│ 🧠 *RAM Usada:* ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB
│ 💾 *RAM Total:* ${total.toFixed(2)} MB
│ 💫 *Uso:* ${percent}%
│
│ 🎀 *Estado:* Sistemita estable
╰─────────────────────────╯`)
}
handler.help = ['ram']
handler.tags = ['main']
handler.command = ['ram']
export default handler