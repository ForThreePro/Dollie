import { exec } from "child_process"

const handler = async (m, { conn }) => {
    const owner = "👑 *Creador: Whois Yallico*"

    if (m.react) await m.react('⚡')

    await conn.reply(m.chat, '⛈️ *RAYO PREM* ➔ Sincronizando con el trueno... Actualizando módulos.', m)

    exec('git pull', async (err, stdout, stderr) => {
        if (err) {
            if (m.react) await m.react('❌')
            return conn.reply(m.chat, `⚡ *RAYO PREM ERROR* ➔ Falló la actualización.\n\n\`\`${err.message}\`\n\n${owner}`, m)
        }

        if (stdout.includes('Already up to date.')) {
            if (m.react) await m.react('🌙')
            return conn.reply(m.chat, `⚡ *RAYO PREM* ➔ El sistema ya está en su versión más reciente.\n\n${owner}\n> "El trueno nunca duerme"`, m)
        }

        if (m.react) await m.react('⚡')
        return conn.reply(m.chat, `⚡ *RAYO PREM* ➔ Actualización aplicada con éxito.\n\n*📜 Cambios:*\n\`\`\`${stdout}\`\`\`\n\n${owner}`, m)
    })
}

handler.help = ['update']
handler.tags = ['owner']
handler.command = /^(update|actualizar|fix)$/i
handler.rowner = true

export default handler