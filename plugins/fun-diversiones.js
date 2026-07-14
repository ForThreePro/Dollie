let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0]? m.mentionedJid[0]
          : m.quoted? m.quoted.sender
          : m.sender;

  let name = await conn.getName(who);
  let userTarget = m.mentionedJid && m.mentionedJid[0]? `@${who.split('@')[0]}` : name;
  let porcentaje = Math.floor(Math.random() * 500) + 1;

  let respuestas = {
    // BASE
    'gay': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *GAY*\n👾 *Ricky Bot Prem*`,
    'lesbiana': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES 🏳️‍🌈* *${porcentaje}%* *LESBIANA*\n👾 *Ricky Bot Prem*`,
    'pajero': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERO*\n👾 *Ricky Bot Prem*`,
    'pajera': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES 😏💦* *${porcentaje}%* *PAJERA*\n👾 *Ricky Bot Prem*`,
    'puto': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PUTO*\n🔥 *MÁS INFORMACIÓN A SU PRIVADO* 🔥🥵\n👾 *Ricky Bot Prem*`,
    'puta': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PUTA*\n🔥 *MÁS INFORMACIÓN A SU PRIVADO* 🔥🥵\n👾 *Ricky Bot Prem*`,
    'manco': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *MANCO* 💩\n👾 *Ricky Bot Prem*`,
    'manca': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *MANCA* 💩\n👾 *Ricky Bot Prem*`,
    'rata': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *RATA* 🐁 *COME QUESO* 🧀\n👾 *Ricky Bot Prem*`,
    'prostituto': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTO* 🫦👅\n❓ *¿QUIÉN QUIERE DE SUS SERVICIOS?*\n👾 *Ricky Bot Prem*`,
    'prostituta': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PROSTITUTA* 🫦👅\n❓ *¿QUIÉN QUIERE DE SUS SERVICIOS?*\n👾 *Ricky Bot Prem*`,

    // PERÚ + NUEVOS
    'choro': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CHORO* 🏃‍♂️💨\n⚠️ *GUARDEN SUS IPHONES* ⚠️\n👾 *Ricky Bot Prem*`,
    'cachero': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CACHERO* 😈\n🔥 *NI EN DISCOTECA LO PARAN* 🔥\n👾 *Ricky Bot Prem*`,
    'cauchera': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CAUCHERA* 😈💃\n🔥 *REINA DEL HUARIQUE* 🔥\n👾 *Ricky Bot Prem*`,
    'cabezón': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CABEZÓN* 🤯\n🧠 *PIENSA CON LA OTRA CABEZA*\n👾 *Ricky Bot Prem*`,
    'jinetero': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *JINETERO* 🏍️\n💨 *PILOTO DE MOTOTAXI*\n👾 *Ricky Bot Prem*`,
    'sangre': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *SANGRE* 🩸\n💸 *VIVE DE PRESTAMO*\n👾 *Ricky Bot Prem*`,
    'tragón': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *TRAGÓN* 🍻\n🍺 *SE TOMA HASTA EL AGUA DEL FLORERO*\n👾 *Ricky Bot Prem*`,
    'fresa': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *FRESA* 🍓\n💅 *HABLA COMO GRINGO*\n👾 *Ricky Bot Prem*`,
    'pipero': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PIPERO* 🌿\n😵‍💫 *VIVE EN OTRA DIMENSIÓN*\n👾 *Ricky Bot Prem*`,
    'muerto': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *MUERTO* 💀\n😴 *DUERME EN TODA REUNIÓN*\n👾 *Ricky Bot Prem*`,

    // TUS 5 PEDIDOS
    'burro': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *BURRO* 🫏\n🤡 *NI EL JEFE LO ENTIENDE*\n👾 *Ricky Bot Prem*`,
    'burra': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *BURRA* 🫏\n🤡 *REPROBÓ HASTA EN EDUC. FÍSICA*\n👾 *Ricky Bot Prem*`,
    'kbro': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *KBRO* 😈\n🔥 *NO RESPETA NI A SU ABUELA*\n👾 *Ricky Bot Prem*`,
    'chivo': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CHIVO* 🐐\n💨 *HUELE A CERVEZA Y DISCOTECA*\n👾 *Ricky Bot Prem*`,
    'kchera': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *KCHERA* 😈💃\n🔥 *ROMPE CORAZONES*\n👾 *Ricky Bot Prem*`,

    // +30 NUEVOS
    'bamba': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *BAMBA* 📱\n⚠️ *CELULAR DURA 2 DIAS*\n👾 *Ricky Bot Prem*`,
    'yapa': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *YAPA* 🥭\n😏 *SIEMPRE PIDE DE MÁS*\n👾 *Ricky Bot Prem*`,
    'caña': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CAÑA* 🥃\n🍺 *CON 2 YA ESTÁ TIRADO*\n👾 *Ricky Bot Prem*`,
    'pata': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PATA* 🤝\n😎 *EL ALMA DE LA JODA*\n👾 *Ricky Bot Prem*`,
    'floro': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *FLORO* 💬\n💋 *ENAMORA CON PURA MENTIRA*\n👾 *Ricky Bot Prem*`,
    'miserable': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *MISERABLE* 💸\n🥺 *PIDE YAPA Y NO PAGA*\n👾 *Ricky Bot Prem*`,
    'gil': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *GIL* 🤡\n😵 *SE CAE SOLO*\n👾 *Ricky Bot Prem*`,
    'gilasa': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *GILASA* 🤡\n😵 *CREE TODO*\n👾 *Ricky Bot Prem*`,
    'lenteja': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *LENTEJA* 🐢\n🐌 *DEMORA 1 HORA EN RESPONDER*\n👾 *Ricky Bot Prem*`,
    'chibolo': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CHIBOLO* 👶\n🎮 *VIVE EN FREE FIRE*\n👾 *Ricky Bot Prem*`,
    'chibola': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *CHIBOLA* 👧\n💄 *SUBE 20 HISTORIAS AL DÍA*\n👾 *Ricky Bot Prem*`,
    'viejo': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *VIEJO* 👴\n😮‍💨 *SE QUEJA DE TODO*\n👾 *Ricky Bot Prem*`,
    'vieja': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *VIEJA* 👵\n🗣️ *CHISME NIVEL DIOS*\n👾 *Ricky Bot Prem*`,
    'grasa': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *GRASA* 💪\n🏋️ *SOLO VA AL GYM A TOMAR FOTOS*\n👾 *Ricky Bot Prem*`,
    'graso': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *GRASO* 💪\n😎 *PIENSA QUE ESTÁ BUENAZO*\n👾 *Ricky Bot Prem*`,
    'pituco': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PITUCO* 💎\n💳 *PAGA CON YAPE DE SU MAMÁ*\n👾 *Ricky Bot Prem*`,
    'pituca': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PITUCA* 💎\n💅 *TOMA CAFÉ DE 30 SOLES*\n👾 *Ricky Bot Prem*`,
    'sapa': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *SAPA* 🐸\n👀 *VE TODO Y CUENTA TODO*\n👾 *Ricky Bot Prem*`,
    'sapo': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *SAPO* 🐸\n👀 *EL INFORMATIVO DEL GRUPO*\n👾 *Ricky Bot Prem*`,
    'pavo': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PAVO* 🦃\n🤦 *SE TROPIEZA SOLO*\n👾 *Ricky Bot Prem*`,
    'pava': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *PAVA* 🦃\n🤦 *OLVIDA HASTA SU NOMBRE*\n👾 *Ricky Bot Prem*`,
    'trome': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *TROME* 👑\n🔥 *EL CRACK DEL BARRIO*\n👾 *Ricky Bot Prem*`,
    'reina': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *REINA* 👑\n💅 *MANDA EN EL GRUPO*\n👾 *Ricky Bot Prem*`,
    'king': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *KING* 👑\n😎 *EL JEFE DE LA JODA*\n👾 *Ricky Bot Prem*`,
    'zombie': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *ZOMBIE* 🧟\n😴 *VIVE CON SUEÑO*\n👾 *Ricky Bot Prem*`,
    'tóxica': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *TÓXICA* ☠️\n💔 *REVISA CELULAR*\n👾 *Ricky Bot Prem*`,
    'tóxico': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *TÓXICO* ☠️\n💔 *CELOSO NIVEL DIOS*\n👾 *Ricky Bot Prem*`,
    'simp': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *SIMP* 🥺\n💌 *MANDA 50 AUDIOS*\n👾 *Ricky Bot Prem*`,
    'vago': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *VAGO* 🛌\n😴 *TRABAJA 2 HORAS AL AÑO*\n👾 *Ricky Bot Prem*`,
    'vaga': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *VAGA* 🛌\n📺 *MARATON DE NETFLIX*\n👾 *Ricky Bot Prem*`,
    'loquito': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *LOQUITO* 🤪\n🌀 *HABLA SOLO*\n👾 *Ricky Bot Prem*`,

    // NUEVOS PEDIDOS ⚡
    'fiel': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *FIEL* 💍\n❤️ *NI CON 10 CERVEZAS ENGANCHA*\n👾 *Ricky Bot Prem*`,
    'infiel': `👾 *RICKY BOT PREM SCANNER*\n\n⚡ *${userTarget}* *ES* *${porcentaje}%* *INFIEL* 💔\n😏 *TIENE 3 Y NINGUNA SABE*\n👾 *Ricky Bot Prem*`
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