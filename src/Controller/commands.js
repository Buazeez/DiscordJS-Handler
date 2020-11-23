const fs = require('fs-extra')
const path = require('path')

module.exports = async function CommandRegister(client , dir) {
    const startDir = path.join(__dirname ,dir);
    const files = await fs.readdir(startDir)
    files.forEach(async file => {
        const type = await fs.lstat(path.join(startDir , file))
        if(type.isDirectory()) CommandRegister(path.join(dir , file))
        if(file.endsWith('.js')) {
            const Command = require(path.join(dir , file))
            const command = new Command()
            console.log(command)
            client.commands.set(command.name , command)
            command.aliases.forEach((alias) => {
                client.commands.set(alias , command)
            })
        }
    })
}
