const modpingsetup = require('../commands/modpingsetup')

module.exports = {
    name: 'modsping',
    async execute(message,args,PREFIX,client,Discord){
    var modsping = modpingsetup ||'Not set' // here
        if(!args){
            message.channel.send(`Mods ping is ${modsping}`)
        }
        else if(args[0].toLowerCase()=="true"){
            message.channel.send(`Mods ping set to True`)
            modsping=true
        }
        else if(args[0].toLowerCase()=="false"){
            message.channel.send('Mods ping set to False')
            modsping=false
        }
    }
}
//module.exports={modsping: modsping}