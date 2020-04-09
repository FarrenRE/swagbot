require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content === '-ping') {
    msg.reply('pong');
  }
  if(msg.content === '-commands') {
  	msg.reply(`Available commands:
  		-ping: ping Swagbot (are you there?)
  		-time: Display time in US and AU`);
  }
  if(msg.content === '-time') {
  	let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
		aestTime = new Date(aestTime);

		let usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
		usaTime = new Date(usaTime);

		msg.reply(`
			Australia O'clock: ${aestTime.toLocaleString()}
			America O'clock: ${usaTime.toLocaleString()}`);
  }
});

client.login(process.env.DISCORD_TOKEN);