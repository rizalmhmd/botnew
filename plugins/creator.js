import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `Developer Bot `, `Suka maklor sebaskom😋😋`, `payahhawok@gmail.com`, `Jepang`, `🚀 https://github.com/rizalmhmd`, `Ngising😁😁`],
    [`'3197010517549'`, `${await conn.getName('3197010517549'+'@s.whatsapp.net')}`, `Developer Bot `, `Suka maklor sebaskom😋😋`, `payahhawok@gmail.com`, `Jepang`, `🚀 https://github.com/rizalmhmd`, `Ngising😁😁`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Bot WhatsApp `, `Don't spam/call me`, `Nothing`, `Indonesia`, `https://github.com/tizalmhmd`, `Hanya bot biasa yang kadang suka eror`]
  ], fkontak)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya ka😉`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
