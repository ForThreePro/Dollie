let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    // BASE
    'gay': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*\n🎀 *Dollie bot*`,
    'lesbiana': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*\n🎀 *Dollie bot*`,
    'pajero': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERITO*\n🎀 *Dollie bot*`,
    'pajera': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERITA*\n🎀 *Dollie bot*`,
    'puto': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PUTITO*\n🔥 *INFO EN SU PRIVADITO* 🔥🥵\n🎀 *Dollie bot*`,
    'puta': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PUTITA*\n🔥 *INFO EN SU PRIVADITO* 🔥🥵\n🎀 *Dollie bot*`,
    'manco': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *MANCUITO* 💩\n🎀 *Dollie bot*`,
    'manca': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *MANCUITA* 💩\n🎀 *Dollie bot*`,
    'rata': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *RATITA* 🐁 *COME QUESITO* 🧀\n🎀 *Dollie bot*`,
    'prostituto': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTITO* 🫦👅\n❓ *¿QUIÉN QUIERE SUS SERVICIOS?*\n🎀 *Dollie bot*`,
    'prostituta': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTITA* 🫦👅\n❓ *¿QUIÉN QUIERE SUS SERVICIOS?*\n🎀 *Dollie bot*`,

    // PERÚ + NUEVOS
    'choro': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CHORITO* 🏃‍♂️💨\n⚠️ *GUARDEN SUS IPHONES* ⚠️\n🎀 *Dollie bot*`,
    'cachero': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CACHERITO* 😈\n🔥 *NI EN DISCOTECA LO PARAN* 🔥\n🎀 *Dollie bot*`,
    'cauchera': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CAUCHERITA* 😈💃\n🔥 *REINA DEL HUARIQUE* 🔥\n🎀 *Dollie bot*`,
    'cabezón': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CABEZONCITO* 🤯\n🧠 *PIENSA CON LA OTRA CABECITA*\n🎀 *Dollie bot*`,
    'jinetero': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *JINETERITO* 🏍️\n💨 *PILOTO DE MOTOTAXI*\n🎀 *Dollie bot*`,
    'sangre': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *SANGRE* 🩸\n💸 *VIVE DE PRESTAMITO*\n🎀 *Dollie bot*`,
    'tragón': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *TRAGONCITO* 🍻\n🍺 *SE TOMA HASTA EL AGUA DEL FLORERITO*\n🎀 *Dollie bot*`,
    'fresa': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *FRESITA* 🍓\n💅 *HABLA COMO GRINGUITO*\n🎀 *Dollie bot*`,
    'pipero': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PIPERITO* 🌿\n😵‍💫 *VIVE EN OTRA DIMENSIONCITA*\n🎀 *Dollie bot*`,
    'muerto': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *MUERTITO* 💀\n😴 *DUERME EN TODA REUNIONCITA*\n🎀 *Dollie bot*`,

    // TUS 5 PEDIDOS
    'burro': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *BURRITO* 🫏\n🤡 *NI EL JEFE LO ENTIENDE*\n🎀 *Dollie bot*`,
    'burra': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *BURRITA* 🫏\n🤡 *REPROBÓ HASTA EN EDUC. FÍSICA*\n🎀 *Dollie bot*`,
    'kbro': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *KBRO* 😈\n🔥 *NO RESPETA NI A SU ABUELITA*\n🎀 *Dollie bot*`,
    'chivo': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CHIVITO* 🐐\n💨 *HUELE A CERVECITA Y DISCOTECA*\n🎀 *Dollie bot*`,
    'kchera': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *KCHERITA* 😈💃\n🔥 *ROMPE CORAZONCITOS*\n🎀 *Dollie bot*`,

    // +30 NUEVOS
    'bamba': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *BAMBITA* 📱\n⚠️ *CELU DURA 2 DIAS*\n🎀 *Dollie bot*`,
    'yapa': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *YAPITA* 🥭\n😏 *SIEMPRE PIDE DE MÁS*\n🎀 *Dollie bot*`,
    'caña': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CAÑITA* 🥃\n🍺 *CON 2 YA ESTÁ TIRADITO*\n🎀 *Dollie bot*`,
    'pata': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PATITA* 🤝\n😎 *EL ALMA DE LA JODA*\n🎀 *Dollie bot*`,
    'floro': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *FLORITO* 💬\n💋 *ENAMORA CON PURA MENTIRITA*\n🎀 *Dollie bot*`,
    'miserable': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *MISERABLE* 💸\n🥺 *PIDE YAPITA Y NO PAGA*\n🎀 *Dollie bot*`,
    'gil': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *GILITO* 🤡\n😵 *SE CAE SOLITO*\n🎀 *Dollie bot*`,
    'gilasa': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *GILASITA* 🤡\n😵 *CREE TODO*\n🎀 *Dollie bot*`,
    'lenteja': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *LENTEJITA* 🐢\n🐌 *DEMORA 1 HORA EN RESPONDER*\n🎀 *Dollie bot*`,
    'chibolo': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CHIBOLITO* 👶\n🎮 *VIVE EN FREE FIRE*\n🎀 *Dollie bot*`,
    'chibola': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *CHIBOLITA* 👧\n💄 *SUBE 20 HISTORIAS AL DÍA*\n🎀 *Dollie bot*`,
    'viejo': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *VIEJITO* 👴\n😮‍💨 *SE QUEJA DE TODO*\n🎀 *Dollie bot*`,
    'vieja': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *VIEJITA* 👵\n🗣️ *CHISME NIVEL DIOS*\n🎀 *Dollie bot*`,
    'grasa': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *GRASITA* 💪\n🏋️ *SOLO VA AL GYM A TOMAR FOTOS*\n🎀 *Dollie bot*`,
    'graso': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *GRASITO* 💪\n😎 *PIENSA QUE ESTÁ BUENAZO*\n🎀 *Dollie bot*`,
    'pituco': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PITUQUITO* 💎\n💳 *PAGA CON YAPE DE SU MAMÁ*\n🎀 *Dollie bot*`,
    'pituca': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PITUQUITA* 💎\n💅 *TOMA CAFÉ DE 30 SOLES*\n🎀 *Dollie bot*`,
    'sapa': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *SAPITA* 🐸\n👀 *VE TODO Y CUENTA TODO*\n🎀 *Dollie bot*`,
    'sapo': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *SAPITO* 🐸\n👀 *EL INFORMATIVO DEL GRUPO*\n🎀 *Dollie bot*`,
    'pavo': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PAVITO* 🦃\n🤦 *SE TROPIEZA SOLITO*\n🎀 *Dollie bot*`,
    'pava': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *PAVITA* 🦃\n🤦 *OLVIDA HASTA SU NOMBRE*\n🎀 *Dollie bot*`,
    'trome': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *TROMECITO* 👑\n🔥 *EL CRACK DEL BARRIO*\n🎀 *Dollie bot*`,
    'reina': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *REINITA* 👑\n💅 *MANDA EN EL GRUPO*\n🎀 *Dollie bot*`,
    'king': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *KING* 👑\n😎 *EL JEFE DE LA JODA*\n🎀 *Dollie bot*`,
    'zombie': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *ZOMBIE* 🧟\n😴 *VIVE CON SUEÑITO*\n🎀 *Dollie bot*`,
    'tóxica': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *TÓXICA* ☠️\n💔 *REVISA CELULAR*\n🎀 *Dollie bot*`,
    'tóxico': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *TÓXICO* ☠️\n💔 *CELOSO NIVEL DIOS*\n🎀 *Dollie bot*`,
    'simp': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *SIMP* 🥺\n💌 *MANDA 50 AUDIOS*\n🎀 *Dollie bot*`,
    'vago': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *VAGUITO* 🛌\n😴 *TRABAJA 2 HORAS AL AÑO*\n🎀 *Dollie bot*`,
    'vaga': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *VAGUITA* 🛌\n📺 *MARATON DE NETFLIX*\n🎀 *Dollie bot*`,
    'loquito': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *LOQUITO* 🤪\n🌀 *HABLA SOLITO*\n🎀 *Dollie bot*`,

    // NUEVOS PEDIDOS ⚡
    'fiel': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *FIEL* 💍\n❤️ *NI CON 10 CERVEZAS ENGANCHA*\n🎀 *Dollie bot*`,
    'infiel': `🎀 *DOLLIE BOT SCANNER* 💫\n\n✨ *${userTarget}* *ES* *${porcentaje}%* *INFIEL* 💔\n😏 *TIENE 3 Y NINGUNA SABE*\n🎀 *Dollie bot*`
  }

  let respuestaFinal = respuestas[command.toLowerCase()];

  if (respuestaFinal) {
    await conn.sendMessage(m.chat, {
      text: respuestaFinal,
      mentions: [who]
    }, { quoted: m });
  }
}

handler.help = ['gay', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'burro', 'burra', 'kbro', 'chivo', 'kchera', 'choro', 'cachero', 'cauchera', 'cabezón', 'jinetero', 'sangre', 'tragón', 'fresa', 'pipero', 'muerto', 'bamba', 'yapa', 'caña', 'pata', 'floro', 'miserable', 'gil', 'gilasa', 'lenteja', 'chibolo', 'chibola', 'viejo', 'vieja', 'grasa', 'graso', 'pituco', 'pituca', 'sapa', 'sapo', 'pavo', 'pava', 'trome', 'reina', 'king', 'zombie', 'tóxica', 'tóxico', 'simp', 'vago', 'vaga', 'loquito', 'manco', 'manca', 'rata', 'prostituta', 'prostituto', 'fiel', 'infiel'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^(gay|lesbiana|pajero|pajera|puto|puta|burro|burra|kbro|chivo|kchera|choro|cachero|cauchera|cabezón|jinetero|sangre|tragón|fresa|pipero|muerto|bamba|yapa|caña|pata|floro|miserable|gil|gilasa|lenteja|chibolo|chibola|viejo|vieja|grasa|graso|pituco|pituca|sapa|sapo|pavo|pava|trome|reina|king|zombie|tóxica|tóxico|simp|vago|vaga|loquito|manco|manca|rata|prostituta|prostituto|fiel|infiel)$/i

export default handler