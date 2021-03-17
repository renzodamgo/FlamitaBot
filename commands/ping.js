module.exports ={
    name: 'ping',
    description: "ping command para checkear si el bot esta online",
    execute(message,args){
        message.channel.send('Pong!  🏓')
    }
}