import pkg from '@adiwajshing/baileys'
import fs  from 'fs'

const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = pkg

let handler = async (m, { conn }) => {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/thumbnail.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5397724476998042",
"title": `𝐒𝐞𝐰𝐚𝐁𝗼𝐭 | 「 𝙭𝙧𝙗𝙤𝙩 𝗺𝗱 」`,
"description": `gaktau`,
"currencyCode": "IDR",
"bodyText": `gaktaukalo🗿`,
"footerText": `hehehe🗿`,
"priceAmount1000": "30000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "99999999",
"retailerId": `「 𝙭𝙧𝙗𝙤𝙩 𝗺𝗱 」`,
"url": "wa.me/6283131475901"
},
"businessOwnerJid": "6283131475901@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['sewa' , 'premium']
handler.tags = ['main']
handler.command = /^(sewabot|sewa|premium)$/i

export default handler