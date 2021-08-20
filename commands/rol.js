module.exports = {
    name: 'rol',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '821767444983971860';
        const dataTeamRole = message.guild.roles.cache.find(role => role.name === "Data mining");
        // const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Desarrollo web");
        const isoTeamRole = message.guild.roles.cache.find(role => role.name === "Ingienería de Software");
        // const pimTeamRole = message.guild.roles.cache.find(role => role.name === "Procesamiento de Imágenes");
        const finTeamRole = message.guild.roles.cache.find(role => role.name === "Finanzas");
        // const redTeamRole = message.guild.roles.cache.find(role => role.name === "Redes");
        // const juegosTeamRole = message.guild.roles.cache.find(role => role.name === "Desarrollo de juegos para Móviles");
        const iaTeamRole = message.guild.roles.cache.find(role => role.name === "Inteligencia Artificial");
        const disoTeamRole = message.guild.roles.cache.find(role => role.name === "Diseño de Experimentos de Ingeniería de Software");
        const mlTeamRole = message.guild.roles.cache.find(role => role.name === "Machine Learning");
        const emprenTeamRole = message.guild.roles.cache.find(role => role.name === "Emprendimiento de negocios sostenibles");
        const topicosTeamRole = message.guild.roles.cache.find(role => role.name === "Tópicos");
        const gerenciaTeamRole = message.guild.roles.cache.find(role => role.name === "Gerencia de Proyectos de Software");
        const seguridadTeamRole = message.guild.roles.cache.find(role => role.name === "Seguridad Informática");
        const concurrenteTeamRole = message.guild.roles.cache.find(role => role.name === "Programación Concurrente y Distribuida");
        const dataEmoji = '⛏';
        // const blueTeamEmoji = '🕸';
        const isoTeamEmoji = '👨🏽‍💻';
        // const pimTeamEmoji = '👁';
        const finTeamEmoji = '📈';
        // const redTeamEmoji = '🌎';
        const iaTeamEmoji = '🤖';
        // const juegosTeamEmoji = '🎮';
        const disoTeamEmoji = '📝';
        const mlTeamEmoji = '⚙️';
        const emprenEmoji = '💸';
        const topicosEmoji = '📖'
        const gerenciaEmoji = '👨🏽‍💼'
        const seguridadEmoji = '🔒'
        const concurrenteEmoji = '🚀'
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Elegir cursos!')
            .setDescription('Al elegir un curso podrás ver su chat de voz y texto!\n\n'
                + "== Ciclo 06 👶 ==\n"
                + `${isoTeamEmoji} Ingienería de Software\n\n`
                + "== Ciclo 07 👦 ==\n"
                + `${disoTeamEmoji} Diseño de Experimentos de Ingeniería de Software\n`
                + `${finTeamEmoji} Finanzas\n`
                + `${mlTeamEmoji} Machine Learning\n`
                + `${topicosEmoji} Tópicos\n\n`
                + "== Ciclo 08 👨‍🦳 ==\n"
                + `${dataEmoji} Data mining\n`
                + `${gerenciaEmoji} Gerencia de Proyectos de Software\n`
                + `${emprenEmoji} Emprendimiento de Negocios Sostenibles\n\n`
                + "== Ciclo 09 👴 ==\n"
                + `${concurrenteEmoji} Programación Concurrente\n`
                + `${seguridadEmoji} Seguridad informática\n\n`
                +)


                // + `${blueTeamEmoji} Desarrollo web\n`
                // + `${pimTeamEmoji} Procesamiento de Imágenes\n`
                // + `${redTeamEmoji} Redes y protocolos\n`
                // + `${juegosTeamEmoji} Desarrollo de juegos para Móviles\n`
                // + `${iaTeamEmoji} Inteligencia Artificial\n`
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(isoTeamEmoji);
        messageEmbed.react(disoTeamEmoji);
        messageEmbed.react(finTeamEmoji);
        messageEmbed.react(mlTeamEmoji);
        messageEmbed.react(topicosEmoji);
        messageEmbed.react(dataEmoji);
        messageEmbed.react(gerenciaEmoji);
        messageEmbed.react(emprenEmoji);
        messageEmbed.react(concurrenteEmoji);
        messageEmbed.react(seguridadEmoji);
        // messageEmbed.react(blueTeamEmoji);
        // messageEmbed.react(pimTeamEmoji);
        // messageEmbed.react(redTeamEmoji);
        // messageEmbed.react(juegosTeamEmoji);
        // messageEmbed.react(iaTeamEmoji);

 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === isoTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(isoTeamRole);
                }
                if (reaction.emoji.name === disoTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(disoTeamRole);
                }
                if (reaction.emoji.name === finTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(finTeamRole);
                }
                if (reaction.emoji.name === mlTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mlTeamRole);
                }
                if (reaction.emoji.name === topicosEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(topicosTeamRole);
                }
                if (reaction.emoji.name === dataEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dataTeamRole);
                }
                if (reaction.emoji.name === gerenciaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gerenciaTeamRole);
                }
                if (reaction.emoji.name === emprenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(emprenTeamRole);
                }
                 if (reaction.emoji.name === concurrenteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(concurrenteTeamRole);
                }
                 if (reaction.emoji.name === seguridadEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(seguridadTeamRole);
                }


                // if (reaction.emoji.name === blueTeamEmoji) {
                //     await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                // }
                // if (reaction.emoji.name === pimTeamEmoji) {
                //     await reaction.message.guild.members.cache.get(user.id).roles.add(pimTeamRole);
                // }
                // if (reaction.emoji.name === redTeamEmoji) {
                //     await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                // }
                // if (reaction.emoji.name === iaTeamEmoji) {
                //     await reaction.message.guild.members.cache.get(user.id).roles.add(iaTeamRole);
                // }
                // if (reaction.emoji.name === juegosTeamEmoji) {
                //     await reaction.message.guild.members.cache.get(user.id).roles.add(juegosTeamRole);
                // }
                
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
                if (reaction.emoji.name === isoTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(isoTeamRole);
                }
                if (reaction.emoji.name === disoTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(disoTeamRole);
                }
                if (reaction.emoji.name === finTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(finTeamRole);
                }
                if (reaction.emoji.name === mlTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mlTeamRole);
                }
                if (reaction.emoji.name === topicosEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(topicosTeamRole);
                }
                if (reaction.emoji.name === dataEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dataTeamRole);
                }
                if (reaction.emoji.name === gerenciaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gerenciaTeamRole);
                }
                if (reaction.emoji.name === emprenEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(emprenTeamRole);
                }
                 if (reaction.emoji.name === concurrenteEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(concurrenteTeamRole);
                }
                 if (reaction.emoji.name === seguridadEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(seguridadTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   