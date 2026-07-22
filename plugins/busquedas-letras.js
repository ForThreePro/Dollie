import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 🎵 *BUSCADOR DE LETRAS*
│
│ ✨ *¿Qué cancioncita buscas?*
│ ⭐ *Uso:*.letra Believer
╰─────────────────────────╯`)

    await m.react('🎵')
    try {
        let { data } = await axios.get(`https://api.delirius.store/search/lyrics?query=${encodeURIComponent(text)}`)
        let res = data.data
        if (!res) return m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *AY NO~*
│
│ ⭐ *No encontré la letra de:* ${text}
╰─────────────────────────╯`)

        let txt = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 🎵 *LETRA ENCONTRADA*
│
│ ✨ *Título:* ${res.title}
│ 🎀 *Artista:* ${res.artists}
│ ⏳ *Duración:* ${res.duration || 'N/A'}
╰─────────────────────────╯\n\n`
        txt += `╭─── 💫 𝗟𝗘𝗧𝗥𝗜𝗧𝗔 ───╮\n`
        txt += `${res.lyrics}\n`
        txt += `╰─────────────────╯\n\n`
        txt += `> *“La música con magia”* ✨\n> *© Dollie bot* 🎀`

        m.reply(txt)
        await m.react('✅')
    } catch { 
        await m.react('❌') 
        m.reply(`╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ 💫 *UPS~*
│
│ ⭐ *Falló al buscar la letra*
│ 🎀 *Intenta de nuevo en un ratito*
╰─────────────────────────╯`)
    }
}
handler.help = ['letra <cancion>']
handler.tags = ['search']
handler.command = /^(letra|lyrics)$/i
export default handler