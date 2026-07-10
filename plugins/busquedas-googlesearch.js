import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('⛈️ *RAYO PREM GOOGLE* 🌙\n\n⚡ *¿Qué quieres buscar en Google?*') // Cambiado

    await m.react('🔍')

    try {
        let { data } = await axios.get(`https://api.delirius.store/search/google?query=${encodeURIComponent(text)}`)
        let results = data.data.slice(0, 5)

        if (!results.length) return m.reply('⛈️ *RAYO PREM ERROR* ➔ *No encontré resultados.*') // Cambiado

        let txt = `⛈️ *RAYO PREM GOOGLE* 🌙\n` // Cambiado
        txt += `⚡ *Buscando:* ${text}\n\n`

        txt += results.map((v, i) => {
            return `🌩️ *${i + 1}. ${v.title}*\n` +
                   `📝 ${v.description}\n` +
                   `🔗 ${v.url}`
        }).join('\n\n')

        txt += `\n\n🌩️ *Team Nightwish*` // Cambiado

        await conn.reply(m.chat, txt, m)
        await m.react('✅')

    } catch (e) {
        console.error(e)
        await m.react('❌')
        m.reply('⛈️ *RAYO PREM ERROR* ➔ *Error al realizar la búsqueda.*') // Cambiado
    }
}

handler.help = ['google <busqueda>']
handler.tags = ['search']
handler.command = /^google$/i

export default handler