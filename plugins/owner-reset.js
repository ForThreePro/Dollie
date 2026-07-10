let handler = async (m, { conn }) => {
    await m.react('⚡') // Cambiado
    await m.reply('⛈️ *[ RAYO PREM BOT ]* 🌙\n\n> *Reiniciando sistema con el trueno... Por favor espere*') // Cambiado
    process.send('reset')
}

handler.help = ['reset']
handler.tags = ['owner']
handler.command = ['reset']
handler.rowner = true

export default handler