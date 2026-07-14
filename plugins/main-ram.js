let handler = async (m) => {
    const used = process.memoryUsage()
    m.reply(`👾 *RICKY BOT PREM* ➔ Consumo de Sistema
⚡ *RAM Usada:* ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB
🔋 *Estado:* Sistema estable`)
}
handler.help = ['ram']
handler.tags = ['main']
handler.command = ['ram']
export default handler