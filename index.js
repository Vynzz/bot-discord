const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = 'your prefix'

client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase()

    if(command === 'help') {
        message.channel.send('in making..').catch(err => console.log(err.message))
    }
})

client.login('your bot token')