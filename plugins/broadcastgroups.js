import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m, { conn,isOwner, isROwner, text, usedPrefix }) => {
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    let imgr = fla.getRandom()
    let pp = imgr + 'Broadcast Group'
    for (let i of anu) {
  conn.sendButtonDoc(i, `━━━━ ❮❮ 𝙼𝙴𝚂𝚂𝙴𝙶𝙴 ❯❯ ━━━━━

${pesan}`, '© Broadcast Group', '\n\n\n\npengin ewe puan maharani😍😁🥰', 'banh', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝙭𝙧𝙗𝙤𝙩 𝗺𝗱',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝙭𝙧𝙗𝙤𝙩 𝗺𝗱',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃 𝙭𝙧𝙗𝙤𝙩 𝗺𝗱'  
				}
			}
})
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgc <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastgc|bcgc)$/i

handler.owner = true

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

export default handler