require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  msg.channel.send( sendAliveMessage() );
});

/* Listeners */

// Message event listener
client.on('message', msg => {
  switch (msg.content) {
    case '-commands':
      msg.channel.send( replyAvailableCommands() );
      break;
    case '-ping':
      msg.reply('Swagbot reporting.');
      break;
    case '-time':
      msg.channel.send( replyTimeZones() );
      break;
    case '-greedisgood':
      msg.channel.send( ':money_mouth:' );
      break;
    case '-rockandstone':
      msg.channel.send(':pick:');
      break;
    case '-woo':
      msg.channel.send('*WWWEEEEEEEEEW!!*');
      break;
    default:
      break;
  }
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

function sendAliveMessage() {
  let msg = `I... LIVE!!!`;
  return msg;
}

client.login(process.env.DISCORD_TOKEN);