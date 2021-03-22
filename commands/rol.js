module.exports = {
    name: 'rol',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '821767444983971860';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Data mining");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Desarrollo web");
        const isoTeamRole = message.guild.roles.cache.find(role => role.name === "Ingienería de Software");
        const pimTeamRole = message.guild.roles.cache.find(role => role.name === "Procesamiento de Imágenes");
        const finTeamRole = message.guild.roles.cache.find(role => role.name === "Finanzas");
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Redes");
        const juegosTeamRole = message.guild.roles.cache.find(role => role.name === "Desarrollo de juegos para Móviles");
        const iaTeamRole = message.guild.roles.cache.find(role => role.name === "Inteligencia Artificial");
        const yellowTeamEmoji = '⛏';
        const blueTeamEmoji = '🕸';
        const isoTeamEmoji = '👨🏽‍💻';
        const pimTeamEmoji = '👁';
        const finTeamEmoji = '📈';
        const redTeamEmoji = '🌎';
        const iaTeamEmoji = '🤖';
        const juegosTeamEmoji = '🎮';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Elegir cursos!')
            .setDescription('Al elegir un curso podrás ver su chat de voz y texto!\n\n'
                + `${yellowTeamEmoji} Data mining\n`
                + `${blueTeamEmoji} Desarrollo web\n`
                + `${isoTeamEmoji} Ingienería de Software\n`
                + `${pimTeamEmoji} Procesamiento de Imágenes\n`
                + `${finTeamEmoji} Finanzas\n`
                + `${redTeamEmoji} Redes y protocolos\n`
                + `${juegosTeamEmoji} Desarrollo de juegos para Móviles\n`
                + `${iaTeamEmoji} Inteligencia Artificial\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(isoTeamEmoji);
        messageEmbed.react(pimTeamEmoji);
        messageEmbed.react(finTeamEmoji);
        messageEmbed.react(redTeamEmoji);
        
        messageEmbed.react(juegosTeamEmoji);
        messageEmbed.react(iaTeamEmoji);

 
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
                if (reaction.emoji.name === isoTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(isoTeamRole);
                }
                if (reaction.emoji.name === pimTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pimTeamRole);
                }
                if (reaction.emoji.name === finTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(finTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
                if (reaction.emoji.name === iaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(iaTeamRole);
                }
                if (reaction.emoji.name === juegosTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(juegosTeamRole);
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
                if (reaction.emoji.name === isoTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(isoTeamRole);
                }
                if (reaction.emoji.name === pimTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pimTeamRole);
                }
                if (reaction.emoji.name === finTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(finTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
                if (reaction.emoji.name === iaTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(iaTeamRole);
                }
                if (reaction.emoji.name === juegosTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(juegosTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   