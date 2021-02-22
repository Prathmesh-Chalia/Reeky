module.exports = {
    name: "test",
    cooldown: 5,
    aliases: ["t"],
    description: "A test command",
    execute(client, message, args ,Discord){
        message.channel.send('test command works')
    }
}