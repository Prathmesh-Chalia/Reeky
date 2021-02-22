const status = require('../../config/status.json');

module.exports = (Discord, client, message) => {


    console.log(`${client.user.tag} is now online.`)

    let i = 0;
    setInterval(async () => {
      const nameArray = status.name
    const typeArray = status.type
      client.user.setPresence({
        activity: {
          name: `${nameArray[i]}`,
          type: `${typeArray[i]}`,
        },
        status: 'dnd'
      })
  
      if (i < (nameArray.length - 1)) {
        i++
      } else {
        i = 0
      }
    }, 30000)
  
}