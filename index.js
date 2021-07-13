const Discord = require('discord.js');
const client = new Discord.Client()
require('dotenv').config()
const PREFIX = '!'
client.commands =new Discord.Collection(); 
const fs = require('fs');
const ms = require('ms');
const { config } = require('process');

client.on('ready', () => {

    console.log(client.user.username + ' is online!')

    const viewing = 'Only For Mass Dm!!!!!'
    client.user.setActivity(viewing, {type:"WATCHING" });
    

})
const commandsFiles1 = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandsFiles1)
{
   const commands = require(`./commands/${file}`);
   client.commands.set(commands.name, commands); 
}

client.on('message', async message => {
  if(message.type == 'dm') return;
  if(!message.content.startsWith(PREFIX)) return;
if(message.author.bot)return;
    const args = message.content.slice(PREFIX.length).split(/ +/);                   
    const command = args.shift().toLowerCase()

    if(command === 'dm'){
        client.commands.get('dm').execute(message, args, PREFIX,client,Discord);
      }
   // else if(command === 'a'){
     //   client.commands.get('a').execute(message, args, PREFIX,client,Discord);
      //}
      else if(command === 'invite'){
      message.channel.send('https://discord.com/api/oauth2/authorize?client_id=856589403815673876&permissions=8&scope=bot')
      }

})

client.on('messageDelete', (message) => {
  if(message.author.bot) return;

  var data =  `**${message.author.username}** \`deleted in\` **${message.channel.name}**\n
  ${message}`
  
  const channel = client.channels.cache.get('846286266936983552')
  const embed = new Discord.MessageEmbed()
  .setDescription(data)
  .setTimestamp()
  .setFooter(message.author.id)
  channel.send(embed)
})

client.on('guildMemberAdd', (member) =>{
  const channel = client.channels.cache.get('797363384797888543')
  channel.send(`Welcome To Metal Blood Esports! ${member} Here take your self role by reacting`).then(msg=>msg.delete({timeout: 10000}))
})


client.login(process.env.DJS_TOKEN);


//https://discord.com/api/oauth2/authorize?client_id=847566657107001354&permissions=8&scope=bot