module.exports = {
    name: 'rol',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '821767444983971860';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Data mining");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Desarrollo web");
 
        const yellowTeamEmoji = '⛏';
        const blueTeamEmoji = '🕸';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Elegir cursos!')
            .setDescription('Al elegir un curso podrás ver su chat de voz y texto!\n\n'
                + `${yellowTeamEmoji} Data mining\n`
                + `${blueTeamEmoji} Desarrollo web`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   