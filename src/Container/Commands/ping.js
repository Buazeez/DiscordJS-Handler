const { Client , Message } = require('discord.js')

module.exports = class Ping {
    name  = 'ping'
    aliases = ['png']

    /**
    * @param {Message} message 
    * @param {Client} client 
    */

    async run(client , message) {
		await message.channel.send('Pinging ..').then((r) => {
			r.edit(`\`\`\` Time Taken ${r.createdTimestamp - message.createdTimestamp} ms \n Bot Connection ${Math.round(client.ws.ping)} ms \n\`\`\``);
        });
    }
}
