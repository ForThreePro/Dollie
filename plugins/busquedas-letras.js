import axios from 'axios'
let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('⛈️ *RAYO PREM LETRAS* 🌙\n\n⚡ *Ingresa el nombre de la canción*') // Cambiado
    await m.react('🎵')
    try {
        let { data } = await axios.get(`https://api.delirius.store/search/lyrics?query=${encodeURIComponent(text)}`)
        let res = data.data
        if (!res) return m.reply(`⛈️ *RAYO PREM ERROR* ➔ *No se encontró la letra.*`) // Cambiado

        let txt = `⛈️ *RAYO PREM LETRAS* 🌙\n\n` // Cambiado
        txt += `⚡ *Título:* ${res.title}\n`
        txt += `👤 *Autor:* ${res.artists}\n`
        txt += `⏳ *Duración:* ${res.duration || 'N/A'}\n\n`
        txt += `⛈️╞═════ 𝗟𝗲𝘁𝗿𝗮 ═════╡⛈️\n\n` // Cambiado
        txt += `${res.lyrics}\n\n`
        txt += `🌩️ *Team Nightwish*` // Cambiado

        m.reply(txt)
        await m.react('✅')
    } catch { 
        await m.react('❌')
        m.reply(`⛈️ *RAYO PREM ERROR* ➔ *Error al buscar la letra.*`) // Cambiado
    }
}
handler.help = ['letra <cancion>']
handler.tags = ['search']
handler.command = /^(letra|lyrics)$/i
export default handler