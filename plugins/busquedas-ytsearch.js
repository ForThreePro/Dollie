import axios from 'axios'
let handler = async (m, { conn, text }) => {
    if (!text) return m.reply('🎀 *DOLLIE BOT YT SEARCH* 💫\n\n✨ *¿Qué buscas en YouTube lindito?*')
    await m.react('📺')
    try {
        let { data } = await axios.get(`https://api.delirius.store/search/ytsearch?q=${encodeURIComponent(text)}`)
        if (!data.data || data.data.length === 0) return m.reply(`🎀 *DOLLIE BOT ERROR* ➔ *Ay no~ No encontré resultados*`)

        let res = data.data.slice(0, 5).map((v, i) => 
            `⭐ *${i+1}.* *${v.title}*\n` +
            `⏳ *Duración:* ${v.duration} | 👁️ *Vistas:* ${v.views}\n` +
            `🎀 *Canal:* ${v.author.name}\n` +
            `🔗 ${v.url}`
        ).join('\n\n')

        let cap = `🎀 *DOLLIE BOT YOUTUBE SEARCH* 💫\n\n`
        cap += res
        cap += `\n\n✨ *Usa:* .play <número> o copia el link para descargar\n🎀 *Dollie bot*`

        m.reply(cap)
        await m.react('✅')
    } catch { 
        await m.react('❌')
        m.reply(`🎀 *DOLLIE BOT ERROR* ➔ *UPS~ Falló la búsqueda*`)
    }
}
handler.help = ['yts <busqueda>']
handler.tags = ['search']
handler.command = /^(yts|ytsearch)$/i
export default handler