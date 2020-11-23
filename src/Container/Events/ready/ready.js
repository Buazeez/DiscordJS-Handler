const { Client } = require('discord.js')

module.exports = class ReadyEvent {
    name = 'ready'

     /**
     * @param {Client} client 
     */

    run(client) {
        console.log(`Signed in with ${client.user.tag}`)
    }
}
