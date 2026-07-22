import { exec } from "child_process"

const handler = async (m, { conn }) => {
    const owner = "👑 *Creadora: Dollie Team*"

    if (m.react) await m.react('✨')

    await conn.reply(m.chat, '🎀 *DOLLIE BOT* ➔ Sincronizando con la magia... Actualizando módulos.', m)

    exec('git pull', async (err, stdout, stderr) => {
        if (err) {
            if (m.react) await m.react('❌')
            return conn.reply(m.chat, `💫 *DOLLIE BOT ERROR* ➔ Falló la actualización.\n\n\`\`${err.message}\`\n\n${owner}`, m)
        }

        if (stdout.includes('Already up to date.')) {
            if (m.react) await m.react('🌸')
            return conn.reply(m.chat, `🎀 *DOLLIE BOT* ➔ El sistema ya está en su versión más reciente.\n\n${owner}\n> "La magia nunca duerme" ✨`, m)
        }

        if (m.react) await m.react('✨')
        return conn.reply(m.chat, `🎀 *DOLLIE BOT* ➔ Actualización aplicada con éxito.\n\n*📜 Cambios:*\n\`\`\`${stdout}\`\`\`\n\n${owner}`, m)
    })
}

handler.help = ['update', 'actualizar', 'fix']
handler.tags = ['owner']
handler.command = /^(update|actualizar|fix)$/i
handler.rowner = true

export default handler