module.exports ={
    name: 'a',
    async execute(message,args,PREFIX,client,Discord){


   const role_id = '780161787206828073' //'797362104750833706'
        var membersArray = message.guild.roles.cache.get(role_id).members.array()
        LENGTH_OF_MEMBERS = membersArray.length
        roleArray = ['851068760081039390','851068761809092618','851068763490877440','851068765231644682',
        '851068767043321946','851068768801390632','851068770642034738','851068772256579655']

        /*['851056936433483806','851056938204135424','851056940180308018','851056941685932063',
                     '851056944092282910','851056946366906409','851056948253818900','851056950128803840',
                     '851056951600087051','851056953861341204','851056955739865169','851056957506453525',
                     '851056959318523914','851056961121681428','851056962807267328','851056964460347402',
                     '851056966444384286','851056968356986880','851056970357669888','851056972279316500']*/
           
                     const num_ofPeop = 4  // total people in one role
                     var i;


                    for(var j=0; j<roleArray.length; j++){

                        let interval_i = setInterval(() => {

                    var role = message.guild.roles.cache.find(role => role.id == roleArray[j])
                    console.log("This role " + role.name)

                        let member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1).toString();           
                        console.log(member)
                        //member.roles.add(role)

                       console.log(`${member} Got ${j+1}`)

                       if(membersArray.length == 0){
                           clearInterval(interval_i)
                        }
                    }, 1000);
                    
                       message.channel.send(`Added **${num_ofPeop}** people to **${role.name}**`)
                    
                    }


                    message.channel.send(`Done divided ${LENGTH_OF_MEMBERS} users to ${roleArray.length} roles, with each role having ${num_ofPeop} people`)


    }
}

