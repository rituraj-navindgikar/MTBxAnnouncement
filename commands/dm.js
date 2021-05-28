const { exists } = require("fs");

module.exports = {
    name:'dm',
   execute(message,args,PREFIX,client,Discord){

      if(!message.member.hasPermission('MANAGE_GUILD'))return;

      const context = args.slice(1).join(" ")
      if(!context) return message.channel.send('Type a message to send')

      const contextresult = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(context)
      .setTimestamp()
      .setFooter("From MTB Management Team")

      const role = message.mentions.roles.first() 
      if(!role) return message.channel.send('Mention a role')

   let membersArray = message.guild.roles.cache.get(role.id).members.array();
console.log(membersArray.length + ' have the mentioned role.')

     if(membersArray.length > 410) return message.channel.send("Mentioned role has more than 400 members");
     message.channel.send(`${membersArray.length} have that role,
     i will post a message again when finished with sending dm's`)


const total_with_role = membersArray.length

      let interval = setInterval(() => {
         
          let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();
         let member_id4 = member.replace('<' , '');
         let member_id3 = member_id4.replace('@' , '');
         let member_id2 = member_id3.replace('!' , '');
         let member_id = member_id2.replace('>', '');
        
           client.users.fetch(member_id, false).then((user) =>{
              user.send(contextresult).catch(() => message.channel.send('member <@' +member_id+'> not received'));
          })
          console.log(member_id + ' sending')
          if(membersArray.length == 0){ 
              clearInterval(interval);
              message.channel.send(`Sent your message successfully
                \`Total with that role :\` ${total_with_role}`)
          }
      }, 10000);
    }}
