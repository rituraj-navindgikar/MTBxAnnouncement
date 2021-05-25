/*

let membersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10]


let interval = setInterval(() => {
    var member = membersArray.splice(Math.floor(Math.random() * membersArray.length), 1)
    console.log(member)

    if(membersArray.length == 0){ 
        clearInterval(interval);
        console.log('Done with sending messages')
    }

}, 500);


var my = "<@012345678901234567>"
var member = my.slice(2,20)

console.log(member)

 10      1
 x       memberArray.length

    user: User {
      id: '789384080343957576',
      system: null,
      locale: null,
      flags: null,
      username: 'ituu',
      bot: false,
      discriminator: '1364',
      avatar: null,
      lastMessageID: null,
      lastMessageChannelID: null
    }
 
*/

function replaceAll(string, replace_all_this, with_this) {  
    return string.split(replace_all_this).join(with_this);
}
