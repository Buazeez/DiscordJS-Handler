const { Client , Message } = require('discord.js')

module.exports = class MessageEvent {
    name = 'message'
    
    /**
    * @param {Message} message 
    * @param {Client} client 
    */
    run(client, message) {
        if(message.author.bot) return
        if(message.content.startsWith(client.prefix)) {
            const _command = message.content.split(' ')[0].slice(client.prefix.length)
            const content = message.content.slice(_command.length)
            const command = client.commands.get(_command);
            if(command) {
                command.run(client, message);
            }
        }
    }
}

