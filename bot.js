require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready',()=>{
    console.log('Our Bot is loged on')
})

client.login(process.env.BOT_TOKEN)