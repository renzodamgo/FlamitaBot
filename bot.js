require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready',()=>{
    console.log('Our Bot is loged on')
})

client.on('message',msg =>{
    if (msg.content === "!mod-me"){
        msg.member.roles.add("821716451823714346")
        //msg.channel.send("Not tagged")
        //msg.reply('Pong!')
    }
})

client.login(process.env.BOT_TOKEN)