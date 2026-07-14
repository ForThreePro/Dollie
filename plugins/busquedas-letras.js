import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🎵 *BUSCADOR DE LETRAS*
│
│ 👾 *¿Qué canción buscas?*
│ ⚡ *Uso:*.letra Believer
╰─────────────────❒`)

    await m.react('🎵')
    try {
        let { data } = await axios.get(`https://api.delirius.store/search/lyrics?query=${encodeURIComponent(text)}`)
        let res = data.data
        if (!res) return m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ❌ *SIN RESULTADOS*
│
│ ⚡ *No encontré la letra de:* ${text}
╰─────────────────❒`)

        let txt = `╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ 🎵 *LETRA ENCONTRADA*
│
│ ⚡ *Título:* ${res.title}
│ 👤 *Artista:* ${res.artists}
│ ⏳ *Duración:* ${res.duration || 'N/A'}
╰─────────────────❒\n\n`
        txt += `╭─── 👾 𝗟𝗘𝗧𝗥𝗔 ───╮\n`
        txt += `${res.lyrics}\n`
        txt += `╰─────────────────╯\n\n`
        txt += `> *“La música en tu idioma”* ⚡\n> *© Ricky Bot Prem*`

        m.reply(txt)
        await m.react('✅')
    } catch { 
        await m.react('❌')
        m.reply(`╭─❒ *『 𝗥𝗜𝗖𝗞𝗬 𝗕𝗢𝗧 𝗣𝗥𝗘𝗠 』* ❒
│ ⛈️ *ERROR*
│
│ ⚡ *Falló al buscar la letra*
│ 👾 *Intenta de nuevo*
╰─────────────────❒`)
    }
}
handler.help = ['letra <cancion>']
handler.tags = ['search']
handler.command = /^(letra|lyrics)$/i
export default handler