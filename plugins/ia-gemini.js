import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('⛈️ *RAYO PREM IA* ➔ Escribe tu consulta para Gemini\n⚡ *Ejemplo:* .gemini explica los rayos') // Cambiado
  await m.react('🌩️') // Cambiado
  let key = Buffer.from('c2FzdWtl', 'base64').toString('utf-8')
  let res = await fetch(`https://api.evogb.org/ai/gemini?text=${encodeURIComponent(text)}&prompt=V&key=${key}`)
  let json = await res.json()
  if (json.status) {
    await m.react('⚡') // Cambiado
    m.reply(`⛈️ *RAYO PREM GEMINI* 🌙\n\n${json.result}\n\n⚡ *Team Nightwish*`) // Cambiado
  } else {
    await m.react('❌')
    m.reply('⛈️ *RAYO PREM ERROR* ➔ Gemini no respondió') // Cambiado
  }
}
handler.help = ['gemini <texto>']
handler.tags = ['inteligencia artificial']
handler.command = ['gemini']
export default handler