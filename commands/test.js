module.exports = {
    name: "test",
    cooldown: 5,
    description: "A test command",
    execute(client, message, args ,Discord){
        message.channel.send('test command works')
    }
}