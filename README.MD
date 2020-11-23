# Command & Event Handler for Discord.js Library

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Configuration
Go to the `.env` file and add the **Bot Token** & **Prefix** and you ready to go
 

## Installation

```sh
$ cd DiscordJS-Handler
$ npm install
```
## Usage

### Commands 
in the Commands Folder you can add direct file or file inside file

#### Files
```
├── Commands
│   └── ping.js // example file
```

also you can do
```
├── Commands
│   └── Settings
│       └── ping.js
```

#### Codes
```js
const { Client , Message } = require('discord.js')

module.exports = class Ping {
    name  = 'ping' // the main CommandName to run the Command , type : string
    aliases = [] // here is the aliases which is another CommandName to run the Command , type : string
    /**
    * @param {Message} message // parameters
    * @param {Client} client  // parameters
    */
    async run(client , message) {
     // codes are here
    }
}
```

### Events 
Events are the same as the commands 

#### Files

```
├── Events
│   └── message.js // example file
```

also you can do

```
├── Commands
│   └── Message
│       └── message.js
```

#### Codes
we will take the ready event for examble

```js
const { Client } = require('discord.js')

module.exports = class ReadyEvent {
    name = 'ready' // event name , it need to be exact in the documentation
     /**
     * @param {Client} client 
     */
 
    run(client) { // if in the event that you want to use more parameters , just next to the client

    }
}
```
