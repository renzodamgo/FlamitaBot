const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


module.exports = {
    name: 'play',
    description: 'Join channel and play yt videos',
    async execute(message,args){
        
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send('Tienes que estar conectado en un canal de voz para reproducir tu bullita.  🎶');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('No tienes los permisos correctos')
        if(!permissions.has('SPEAK')) return message.channel.send('No tienes los permisos correctos')
        if(!args.length) return message.channel.send('Tienes que poner el nombre de una cancion!');
        
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
        if (validURL(args[0])){
            const connection = await voiceChannel.join();
            const stream = ytdl(args[0],{filter: 'audioonly'});
            connection.play(stream,{seek:0,volume:1})
            .on('finish',()=>{
                voiceChannel.leave();
            });
            await message.reply(`🎧 Reproduciendo ahora ***tu bullita.***`)
            return
            
        }

        const connection = await voiceChannel.join();

        const videoFinder = async(query) => {
            const videoResult = await ytSearch(query);
            
            return (videoResult.videos.length>1)? videoResult.videos[0]:null;
            
        }
        
        const video = await videoFinder(args.join(' '));

        if (video){
            
            const stream = ytdl(video.url,{filter: 'audioonly'});
            connection.play(stream,{seek:0,volume:1})
            .on('finish',()=>{
                voiceChannel.leave();
            });
            await message.reply(`🎧 Reproduciendo ahora ***${video.title}***`)

        } else{
            message.channel.send('No se encontró ningun resultado.')
        }

        
    }
}
