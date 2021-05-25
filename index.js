const Discord = require('discord.js');
const client = new Discord.Client()
require('dotenv').config()
const PREFIX = '!'
client.commands =new Discord.Collection(); 
const fs = require('fs');
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

})

client.on('messageDelete', (message) => {
  if(message.author.bot) return;

  var data =  `**${message.author.username}** \`deleted in\` **${message.channel.name}**\n
  ${message}`
  
  const channel = client.channels.cache.get('846286266936983552')
  const embed = new Discord.MessageEmbed()
  .setDescription(data)
  .setTimestamp()
  channel.send(embed)
})

client.login(process.env.DJS_TOKEN);

