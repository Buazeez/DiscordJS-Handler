require('dotenv').config()
const { Client } = require('discord.js')
const client = new Client()
const fs = require('fs-extra')
const CommandRegister = require('./Controller/commands')
const EventRegister = require('./Controller/events')

client.login(process.env.TOKEN)
client.commands = new Map();
client.events = new Map();
client.prefix = process.env.BOT_PREFIX

CommandRegister(client ,'../Container/Commands')
EventRegister(client ,'../Container/Events')



