import fetch from 'node-fetch'
import fs from 'fs'
let handler  = async (m, { conn, participants, usedPrefix: _p }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
	
                    
let anu2 =`Esceh?\nNih:https://karyawan.co.id/T5KSKQjv`
  conn.sendButtonImg(m.chat, await(await fetch(thumb)).buffer(), anu2, botdate, '\nPengin ewe megawati🥰😍', 'bilek',)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script|esceh)$/i
handler.group = false
handler.limit = false

handler.fail = null

export default handler