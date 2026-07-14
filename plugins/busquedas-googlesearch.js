import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🔍 *GOOGLE SEARCH*
│
│ 👾 *¿Qué deseas buscar?*
│ ⚡ *Uso:*.google Ricky Bot Prem
╰─────────────────❒`)

    await m.react('🔍')

    try {
        let { data } = await axios.get(`https://api.delirius.store/search/google?query=${encodeURIComponent(text)}`)
        let results = data.data.slice(0, 5)

        if (!results.length) return m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ❌ *SIN RESULTADOS*
│
│ ⚡ *No se encontró nada sobre:* ${text}
╰─────────────────❒`)

        let txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🔍 *RESULTADOS DE BÚSQUEDA*
│
│ 👾 *Consulta:* ${text}
╰─────────────────❒\n\n`

        txt += results.map((v, i) => {
            return `╭─── ⚡ *RESULTADO ${i + 1}* ───╮
│ 📌 *${v.title}*
│ 📝 ${v.description}
│ 🔗 ${v.url}
╰───────────────────╯`
        }).join('\n\n')

        txt += `\n\n> *“Busqueda potenciada por IA”* ⚡\n> *© Ricky Bot Prem*`

        await conn.reply(m.chat, txt, m)
        await m.react('✅')

    } catch (e) {
        console.error(e)
        await m.react('❌')
        m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ⛈️ *ERROR*
│
│ ⚡ *Falló la búsqueda*
│ 👾 *Intenta de nuevo*
╰─────────────────❒`)
    }
}

handler.help = ['google <busqueda>']
handler.tags = ['search']
handler.command = /^google$/i

export default handler