const fs = require('fs');

module.exports = (client, Discord) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (const files of command_files) {
        const command = require(`../commands/${files}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else {
            continue;
        }
    }
}