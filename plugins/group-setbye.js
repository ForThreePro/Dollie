const handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
    if (!m.isGroup || (!isAdmin &&!isOwner)) {
        return m.reply('⛈️ *RAYO PREM* ⚡\n\n❌ *¡ACCESO DENEGADO!*\nSolo los admins o el dueño pueden controlar la tormenta.');
    }

    let chat = global.db.data.chats[m.chat]??= {}

    if (command === 'setbye') {
        if (!text) return m.reply(`🌩️ *RAYO PREM SETBYE* ⚡\n\n❌ *¡FALTA EL MENSAJE!*\n\n📝 *Placeholders:*\n@user = Mención\n@group = Grupo\n@count = Miembros\n@desc = Descripción\n\n💡 *Ejemplo:*\n.setbye 💨 @user fue consumido por la tormenta ⚡\n🌩️ Adiós de @group\n👥 Quedan @count guerreros`);

        chat.customBye = text.trim();

        return m.reply(`⛈️ *RAYO PREM* ⚡\n\n✅ *¡DESPEDIDA GUARDADA!*\n\n📝 *Vista previa:*\n\`\`${text.trim()}\`\n\n🗑️ *Para borrar:* .delbye`);

    } else if (command === 'delbye') {
        if (!chat.customBye) return m.reply('🌩️ *RAYO PREM* ⚡\n\n⚠️ *No tienes una despedida editada.*\nSe está usando el lamento del trueno por defecto.');
        delete chat.customBye;
        return m.reply('⛈️ *RAYO PREM* ⚡\n\n✅ *¡LISTO!*\n\n🗑️ Se eliminó la despedida personalizada.\n⚡ Ahora se usa la de `welcome.js` del trueno.');
    }
};
handler.help = ['setbye <Mensaje>', 'delbye'];
handler.tags = ['group'];
handler.command = /^(setbye|delbye)$/i;
handler.admin = true;
handler.group = true;
export default handler;
