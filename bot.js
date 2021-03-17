require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()


const prefix = '!';

client.on('ready',()=>{
    console.log('El bot esta activado!!')
})

client.on('message',msg =>{
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;  

    const args = msg.content.slice(prefix.length).split(/ + /); 
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        msg.channel.send('Pong!  🏓');
    } else if (command === 'Exigete'){
        msg.channel.send('Innova ,UPC 👁👄👁');
    }

    if (msg.content === "!mod-me"){
        msg.member.roles.add("821716451823714346")
        //msg.channel.send("Not tagged")
        //msg.reply('Pong!')
    }
})

client.login(process.env.BOT_TOKEN)