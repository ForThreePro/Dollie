import { Blob } from 'node:buffer';
import { FormData } from 'formdata-node';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';

    if (!mime) throw `⚡ *Rayo Prem Bot* 🍓\n\nResponde a una imagen con *${usedPrefix + command}*`;
    if (!/image\/(jpe?g|png)/.test(mime)) {
        throw `⚠️ *Formato ${mime} no soportado.* Solo JPG/PNG`;
    }

    const API_KEY = "FEx4CYmYN1QRQWD1mbZp87jV";

    await m.react('⏳');
    await m.reply('⚡ *Activando modo rayo... quitando fondo*');

    try {
        let img = await q.download();
        if (img.length > 12 * 1024 * 1024) {
            throw '❌ *Imagen muy pesada.* Máximo 12MB';
        }

        let form = new FormData();
        form.append('image_file', new Blob([img]), {
            filename: 'image.png',
            contentType: mime
        });
        form.append('size', 'auto'); // auto, preview, full, 4k
        form.append('bg_color', 'transparent');

        let res = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': API_KEY
            },
            body: form
        });

        if (!res.ok) {
            let errorText = await res.text();
            let errorMsg = '❌ Error desconocido';

            switch (res.status) {
                case 400: errorMsg = '❌ Imagen no válida o formato no soportado'; break;
                case 401: errorMsg = '❌ API Key inválida'; break;
                case 402: errorMsg = '❌ Créditos de API agotados. Recarga en remove.bg'; break;
                case 403: errorMsg = '❌ Acceso denegado a la API'; break;
                case 429: errorMsg = '❌ Demasiadas peticiones. Espera 1 minuto'; break;
                default: errorMsg = `❌ Error del servidor: ${res.status}\n${errorText}`;
            }
            throw errorMsg;
        }

        let processedImg = await res.arrayBuffer();
        if (processedImg.length === 0) {
            throw '❌ La API devolvió una imagen vacía';
        }

        await conn.sendFile(
            m.chat,
            Buffer.from(processedImg),
            'rayo_prem.png',
            '✨ *Fondo eliminado con éxito* ✨\n\n⚡ *Rayo Prem Bot | Team Nightwish*',
            m
        );

        await m.react('✅');

    } catch (error) {
        console.error('Remove.bg Error:', error);
        let errorMsg = typeof error === 'string'? error : '❌ Error al quitar el fondo. Intenta de nuevo.';
        await m.reply(errorMsg);
        await m.react('❌');
    }
};

handler.help = ['removebg', 'quitafondo'];
handler.tags = ['tools'];
handler.command = ['removebg', 'quitafondo', 'nobg', 'rmbg'];
handler.register = false;

export default handler;