import fs from 'fs'
import path from 'path'

const dbPath = path.join('./database', 'sorteos.json')
if (!fs.existsSync('./database')) fs.mkdirSync('./database')
if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, '{}')

const DIAS = ['lunes','martes','miercoles','jueves','viernes','sabado']
const TZ = 'America/Lima'

const cargarDB = () => JSON.parse(fs.readFileSync(dbPath))
const guardarDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
const getHoy = () => {
    let dia = new Date().toLocaleString('es-PE', {timeZone: TZ, weekday: 'long'}).toLowerCase()
    dia = dia.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return dia === 'domingo'? 'extra' : dia
}

const EMOJIS_DIA = {
    lunes: '🎀', martes: '🎀', miercoles: '🎀', jueves: '🎀',
    viernes: '🎀', sabado: '🎀', extra: '⭐'
}

let handler = async (m, { conn, args, command, isAdmin }) => {
    let gid = m.chat
    let data = cargarDB()
    if(!data[gid]) data[gid] = {lunes:[], martes:[], miercoles:[], jueves:[], viernes:[], sabado:[], extra:[]}

    let hoy = getHoy()
    let texto = args.join(' ')

    // =====.v ===== DISEÑO DOLLIE BOT
    if(command === 'v'){
        let msg = `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮
│ ✨ *SORTEOS COQUETOS* ✨
│ 🎀 *Bot:* Dollie bot ~ tu fav
╰─────────────────────────╯\n\n`

        for(let d of [...DIAS, 'extra']){
            msg += `╭─── ${EMOJIS_DIA[d]} ${d.toUpperCase()} ───╮\n`
            if(data[gid][d].length === 0) {
                msg += `│ 💫 _Aún no hay nadie apuntadito_\n`
            } else {
                data[gid][d].forEach((u,i) => {
                    msg += `│ ⭐ ${i+1}️⃣ *${u.nombre}*\n`
                    msg += `│ 🎀 📱 \`${u.numero}\`\n`
                    msg += `│ 💝 Premiecito: *${u.premio}*\n`
                    msg += `│ ─────────────────\n`
                })
            }
            msg += `╰───────────────────╯\n\n`
        }

        msg += `╭─🎀─❒ *『 COMANDITOS 』* ❒─🎀─╮\n`
        msg += `│ ⭐ *.list* Nombre / Numero / Premio\n`
        msg += `│ ✨ *.extra* Nombre / Numero / Premio\n`
        msg += `│ 🎀 *.delall* Borrar todo [Admin]\n`
        msg += `│ 💫 *.v* Ver esta listita\n`
        msg += `╰─────────────────────────╯\n\n`
        msg += `> *“Apúntate con amor y brilla con suerte”* ⭐\n`
        msg += `> *© Dollie bot 🎀`*

        return conn.reply(m.chat, msg, m)
    }

    // =====.list =====
    if(command === 'list'){
        if(hoy === 'extra') return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮\n│ ⭐ *AY NO~*\n│ Los domingos solo se apunta en *EXTRA* 💫\n╰─────────────────────────╯`, m)

        let [nombre, numero, premio] = texto.split('/').map(x => x.trim())
        numero = numero?.replace(/[^0-9]/g, '')

        if(!nombre ||!numero ||!premio) return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮\n│ 💫 *FORMATO COQUETO*\n│\n│ *Ejemplo:* ⭐\n│.list Muñeca / 936994155 / Mes gratis\n╰─────────────────────────╯`, m)

        for(let d of Object.keys(data[gid])){
            data[gid][d] = data[gid][d].filter(u => u.numero!== numero)
        }

        data[gid][hoy].push({nombre, numero, premio})
        guardarDB(data)
        return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮\n│ ✨ *¡LISTITA!*\n│\n│ 🎀 *Nombre:* ${nombre}\n│ ⭐ *Número:* ${numero}\n│ 💝 *Premiecito:* ${premio}\n│ 💫 *Día:* ${hoy.toUpperCase()}\n│\n│ *Que la suerte te abrace fuerte* 🎀\n╰─────────────────────────╯`, m)
    }

    // =====.extra =====
    if(command === 'extra'){
        let [nombre, numero, premio] = texto.split('/').map(x => x.trim())
        numero = numero?.replace(/[^0-9]/g, '')

        if(!nombre ||!numero ||!premio) return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮\n│ ⭐ *FORMATO COQUETO*\n│\n│ *Ejemplo:* ✨\n│.extra Cielo / 999888777 / 20 soles\n╰─────────────────────────╯`, m)

        for(let d of Object.keys(data[gid])){
            data[gid][d] = data[gid][d].filter(u => u.numero!== numero)
        }

        data[gid].extra.push({nombre, numero, premio})
        guardarDB(data)
        return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮\n│ ⭐ *ANOTADITA EN EXTRA*\n│\n│ 🎀 *Nombre:* ${nombre}\n│ ⭐ *Número:* ${numero}\n│ 💝 *Premiecito:* ${premio}\n│\n│ *Suerte brillosa para ti* ✨\n╰─────────────────────────╯`, m)
    }

    // =====.delall =====
    if(command === 'delall'){
        if(!isAdmin) return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮\n│ 💫 *UPS*\n│ Solo las *ADMINS* pueden borrar todo 🎀\n╰─────────────────────────╯`, m)
        data[gid] = {lunes:[], martes:[], miercoles:[], jueves:[], viernes:[], sabado:[], extra:[]}
        guardarDB(data)
        return conn.reply(m.chat, `╭─🎀─❒ *『 𝗗𝗢𝗟𝗟𝗜𝗘 𝗕𝗢𝗧 』* ❒─🎀─╮\n│ ✨ *LIMPIECITA*\n│\n│ 🎀 Lista reiniciada: Lunes a Sábado + Extra\n│ *Empezamos de 0 con mucho brillo* ⭐\n╰─────────────────────────╯`, m)
    }
}

handler.help = ['v Ver lista','list Nombre / Numero / Premio','extra Nombre / Numero / Premio','delall Borrar todo [Admin]']
handler.tags = ['sorteos']
handler.command = ['v','list','extra','delall']
handler.group = true
export default handler