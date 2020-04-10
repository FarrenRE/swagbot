require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/* Listeners */

// Message event listener
client.on('message', msg => {
  switch (msg.content) {
    case '-commands':
      msg.reply( replyAvailableCommands() );
      break;
    case '-ping':
      msg.reply('Swagbot reporting.');
      break;
    case '-time':
      msg.reply( replyTimeZones() );
      break;
    case '-greedisgood':
      msg.reply( ':money_mouth:' );
    default:
      break;
  }
});

client.on('presenceUpdate', msg => {
  msg.reply('hello presenceUpdate');
});


/* Functions */

function replyAvailableCommands() {
  return `Available commands:
    **-commands** : Display available commands (you knew this one already didn't you?)
    **-ping** : Check Swagbot availability
    **-time** : Display time in US and AU
    
    there are more, secret, commands....`;
}

function replyTimeZones() {
  let str = '';

  let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
  aestTime = new Date(aestTime);

  let usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  usaTime = new Date(usaTime);

  str += `Australia O'clock:    ${aestTime.toLocaleString()}\n`
  str += `America O'clock:      ${usaTime.toLocaleString()}`;

  return str;
}

client.login(process.env.DISCORD_TOKEN);