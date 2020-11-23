const fs = require('fs-extra')
const path = require('path')

module.exports = async function EventRegister(client , dir) {
    const startDir = path.join(__dirname ,dir);
    const files = await fs.readdir(startDir)
    files.forEach(async file => {
        const type = await fs.lstat(path.join(startDir , file))
        if(type.isDirectory()) EventRegister(client , path.join(dir , file))
        if(file.endsWith('.js')) {
            const Event = require(path.join(dir , file))
            const event = new Event();
            client.events.set(event.name , event)
            client.on(event.name, event.run.bind(Event, client));
        }
    })
}
