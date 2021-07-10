const aoijs = require('aoi.js');
const express = require('express');
require('dotenv').config();

const bot = new aoijs.Bot({
	token: process.env.TOKEN,
	prefix: '!', //Change prefix ! if you like
	fetchInvites: true
});

const buttons = require('discord-buttons');
buttons(bot.client);

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html');
});
// This will return a simple website

const listener = app.listen(process.env.PORT, () => {
	console.log('Your app is listening on port ' + listener.address().port);
});
// This will listen on port.

bot.onMessage();
bot.onInteractionCreate();
bot.loadCommands(`./commands/`);
bot.command({
	name: 'ping',
	code: `:ping_pong: Pong! \`$ping ms\``
});
// This will be the first command for your bot
// It will return the websocket ping

bot.status({
	text: 'free fire | !help', // This sets the message status
	type: 'PLAYING',
	time: 12
});
// This will be the bot status

bot.status({
	text: 'my own systems | !help',
	type: 'WATCHING',
	time: 12
});

bot.status({
	text: '$allMembersCount in $servercount servers | !help',
	type: 'WATCHING',
	time: 12
});

bot.status({
	text: 'movies with pronhub | !help',
	type: 'WATCHING',
	time: 12
});

bot.status({
	text: 'in $servercount/100 guilds | !help',
	type: 'PLAYING',
	time: 12
});

bot.command({
  name: "angry", 
code: `
$attachment[$replaceText[https://api.berk404.ga/angrymob?text1=$splitText[1]&text2=$splitText[2]; ;+;-1]]
$onlyIf[$checkContains[$message;/]==true;Separate the texts using /, example: Elon is better then /dankmemer]
$textSplit[$message;/]`
});

bot.command({
  name: "trump", 
  code: `

$onlyIf[$message!=;Type something!]
 
$attachment[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]]
`
})


bot.loopCommand({
  channel: "854017967767814188",
  code: `$title[$jsonRequest[https://api.popcatdev.repl.co/meme;title]
  $image[$jsonRequest[https://api.popcatdev.repl.co/meme;image]]
  $footer[👍 $jsonRequest[https://api.popcatdev.repl.co/meme;upvotes] | 💬 $jsonRequest[https://api.popcatdev.repl.co/meme;comments]]
  $color[RANDOM]`,
  every: 5
});
