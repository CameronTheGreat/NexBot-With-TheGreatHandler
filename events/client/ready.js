const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = async bot => {
    console.log(`${bot.user.username} is online`)
   // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/MONSTERCAT"});

   let statuses = [
       "The Session",
       "For /help"
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "WATCHING"});

   }, 5000)
}
console.log(`NexBot Is Loading`)
 