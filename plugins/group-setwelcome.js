const handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
    if (!m.isGroup) return m.reply('⛈️ *RAYO PREM* ⚡\n\n❌ Este comando solo funciona en grupos')
    if (!isAdmin && !isOwner) return m.reply('⛈️ *RAYO PREM* ⚡\n\n❌ *¡ACCESO DENEGADO!*\nSolo los admins o el dueño pueden invocar este trueno.')

    let chat = global.db.data.chats[m.chat] ??= {}

    if (command === 'setwelcome') {
        if (!text) return m.reply(`🌩️ *RAYO PREM SETWELCOME* ⚡\n\n❌ *¡FALTA EL MENSAJE!*\n\n📝 *Placeholders:*\n@user = Mención\n@group = Grupo\n@count = Miembros\n@desc = Descripción\n\n💡 *Ejemplo:*\n.setwelcome ⛈️ @user invocó el trueno ⚡\n🌩️ Bienvenido a @group\n👥 Eres el guerrero #@count`);
        
        chat.customWelcome = text.trim();
        return m.reply(`⛈️ *RAYO PREM* ⚡\n\n✅ *¡BIENVENIDA GUARDADA!*\n\n📝 *Vista previa:*\n\`\`${text.trim()}\`\n\n🗑️ *Para borrar:* .delwelcome`);
    }

    if (command === 'delwelcome') {
        if (!chat.customWelcome) return m.reply('🌩️ *RAYO PREM* ⚡\n\n⚠️ *No tienes una bienvenida editada.*\nSe está usando la del trueno por defecto.');
        delete chat.customWelcome;
        return m.reply('⛈️ *RAYO PREM* ⚡\n\n✅ *¡LISTO!*\n\n🗑️ Se eliminó la bienvenida personalizada.\n⚡ Ahora se usa la de `welcome.js` del trueno.');
    }
};

handler.help = ['setwelcome <mensaje>', 'delwelcome'];
handler.tags = ['group'];
handler.command = /^(setwelcome|delwelcome)$/i;
handler.admin = true;
handler.group = true;
export default handler;