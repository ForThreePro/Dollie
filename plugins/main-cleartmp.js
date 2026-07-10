import fs from 'fs'
let handler = async (m) => {
    const tmpPath = './tmp'
    if (fs.existsSync(tmpPath)) {
        fs.readdirSync(tmpPath).forEach(file => fs.unlinkSync(`${tmpPath}/${file}`))
    }
    m.reply('⛈️ *RAYO PREM* ➔ Caché purgada\n⚡ *Estado:* Archivos temporales eliminados\n🌙 *El trueno está limpio*') // Cambiado
}
handler.help = ['cleartmp']
handler.tags = ['main']
handler.command = ['cleartmp']
handler.rowner = true
export default handler