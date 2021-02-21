

const config = require('../../config/client.json')

 const cooldowns = new Map();

module.exports = (Discord, client, message) => {
   
    if (message.content.includes(client.user.id)) {
            message.channel.send(`My prefix is ${config.prefix}.`);
     }

     const prefix = config.prefix
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);


    //cooldowns
    if(!command) return ;

     if(!cooldowns.has(command.name)){
         cooldowns.set(command.name, new Discord.Collection())
     }

     const current_time = Date.now();
     const time_stamps = cooldowns.get(command.name);
     const cooldown_amount = (command.cooldown) * 1000

     if(time_stamps.has(message.author.id)){
         const expiration_time= time_stamps.get(message.author.id) + cooldown_amount

         if(current_time < expiration_time){
             const time_left = (expiration_time - current_time) / 1000;

             return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name} again`)
         }
     }

     time_stamps.set(message.author.id, current_time)

     setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try {

  command.execute(client, message, args ,Discord);
    }catch (err) {
        console.log(err)
        message.channel.send('there was an error')
    }
    }