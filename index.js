const Discord = require('discord.js');

const client = new Discord.Client();

client.config = require('./config/client.json');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handler/${handler}`)(client, Discord)
})


client .login(client.config.token);

