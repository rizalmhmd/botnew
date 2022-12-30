import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://restapi.frteam.xyz/toanime?img=${url}&apikey=Fikrii`)).buffer()
m.reply('Wait sabar dek, kalau berbentuk file berarti foto lu yg gk support🗿')
await conn.sendButton(m.chat, 'WIBU BANGET INI MAH', 'Lari ada wibu', hasil, [['BANTU DONASI💵', '.donasi']], m)
}
handler.help = ['jadianime']
handler.tags = ['tools']
handler.command = /^(toanime|jadianime)$/i
handler.limit = 1

export default handler