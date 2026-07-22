import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *GOOGLE SEARCH*
│
│ 🎀 *¿Qué buscas lindito?*
│ ⭐ *Uso:*.google Dollie bot
╰─────────────────────────╯`)

    await m.react('🔍')

    try {
        let { data } = await axios.get(`https://api.delirius.store/search/google?query=${encodeURIComponent(text)}`)
        let results = data.data.slice(0, 5)

        if (!results.length) return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ⭐ *No encontré nada sobre:* ${text}
╰─────────────────────────╯`)

        let txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *RESULTADOS DE BÚSQUEDA*
│
│ 🎀 *Consulta:* ${text}
╰─────────────────────────╯\n\n`

        txt += results.map((v, i) => {
            return `╭─── ⭐ *RESULTADO ${i + 1}* ───╮
│ 📌 *${v.title}*
│ 📝 ${v.description}
│ 🔗 ${v.url}
╰───────────────────╯`
        }).join('\n\n')

        txt += `\n\n> *“Búsqueda potenciada con magia IA”* ✨\n> *© Dollie bot* 🎀`

        await conn.reply(m.chat, txt, m)
        await m.react('✅')

    } catch (e) {
        console.error(e)
        await m.react('❌')
        m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *UPS~*
│
│ ⭐ *Falló la búsqueda*
│ 🎀 *Intenta de nuevo en un ratito*
╰─────────────────────────╯`)
    }
}

handler.help = ['google <busqueda>']
handler.tags = ['search']
handler.command = /^google$/i

export default handler