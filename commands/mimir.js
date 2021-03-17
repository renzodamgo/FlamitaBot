const { ReactionCollector } = require("discord.js");
const { execute } = require("./exigete");

module.exports ={
    name: 'mimir',
    description: 'Mandas el bot a mimir',
    async execute(message,args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Tienes que estar en un canal de voz para mandar el bot a mimir.");
        await voiceChannel.leave();
        await message.channel.send('A mimir... 😴')


    }
}