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
});


bot.command({
  name: "wasted", 
  code: `
$attachment[https://api.popcatdev.repl.co/caution?text=$message
$onlyIf[$message[1]!=;pls type a text]
`
});

bot.command({
 name: "meme", 
 code: `$djsEval[( async () => {
const Discord = require('discord.js')
const Fetch = require('node-fetch')
const Response = await Fetch('https://api.darkboy.me/getmeme')
    const Json = await Response.json()

    const Embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(Json.title)
    .setImage(Json.image)
    .setFooter(Json.up + ' ???? | ' +Json.comments + '????')
    .setTimestamp()

    message.channel.send(Embed)})()]`
});

bot.command({
  name: "morse", 
  code: `
  $argsCheck[>1;That is not a valid message]
$description[This is the morse translation of $message:

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;??;-.-.-- ;-1];??;..--.. ;-1];?;..--.. ;-1];/;-..-. ;-1];-;-....- ;-1];.;.-.-.- ;-1];,;--..-- ;-1];);-.--.- ;-1];(;-.--. ;-1];@;.--.-. ;-1];!;-.-.-- ;-1];??;--- ;-1];??;--- ;-1];??;--- ;-1];??;--- ;-1];??;--- ;-1];??;--- ;-1];??;--- ;-1];??;--- ;-1];??;.. ;-1];??;.. ;-1];??;.. ;-1];??;.. ;-1];??;.. ;-1];??;.. ;-1];??;..- ;-1];??;..- ;-1];??;..- ;-1];??;..- ;-1];??;..- ;-1];??;. ;-1];??;. ;-1];??;. ;-1];??;. ;-1];??;. ;-1];??;. ;-1];??;. ;-1];??;.- ;-1];??;.- ;-1];??;.- ;-1];??;.- ;-1];??;.- ;-1];??;.- ;-1];??;.- ;-1];0;----- ;-1];1;.---- ;-1];2;..--- ;-1];3;...-- ;-1];4;....- ;-1];5;..... ;-1];6;-.... ;-1];7;--... ;-1];8;---.. ;-1];9;----. ;-1];A;.- ;-1];B;-... ;-1];C;-.-. ;-1];D;-.. ;-1];E;. ;-1];F;..-. ;-1];G;--. ;-1];H;.... ;-1];I;.. ;-1];J;.--- ;-1];K;-.- ;-1];L;.-.. ;-1];M;-- ;-1];N;-. ;-1];O;--- ;-1];P;.--. ;-1];Q;--.- ;-1];R;.-. ;-1];S;... ;-1];T;- ;-1];U;..- ;-1];V;...- ;-1];W;.-- ;-1];X;-..- ;-1];Y;-.-- ;-1];Z;--.. ;-1];a;.- ;-1];b;-... ;-1];c;-.-. ;-1];d;-.. ;-1];e;. ;-1];f;..-. ;-1];g;--. ;-1];h;.... ;-1];i;.. ;-1];j;.--- ;-1];k;-.- ;-1];l;.-.. ;-1];m;-- ;-1];n;-. ;-1];o;--- ;-1];p;.--. ;-1];q;--.- ;-1];r;.-. ;-1];s;... ;-1];t;- ;-1];u;..- ;-1];v;...- ;-1];w;.-- ;-1];x;-..- ;-1];y;-.-- ;-1];z;--.. ;-1]; ; / ;-1]]
$color[RANDOM]`
});

bot.loopCommand({
  channel: "854017967767814188",
  code: `$title[$jsonRequest[https://api.popcatdev.repl.co/meme;title]
  $image[$jsonRequest[https://api.popcatdev.repl.co/meme;image]]
  $footer[???? $jsonRequest[https://api.popcatdev.repl.co/meme;upvotes] | ???? $jsonRequest[https://api.popcatdev.repl.co/meme;comments]]
  $color[RANDOM]`,
  every: 5
});

bot.command({
  name: "sus", 
  code: `
$attachment[https://api.berk404.ga/sus?impostor=$userAvatar[$mentioned[1]]&crewmate=$userAvatar[$mentioned[2]]]
$onlyIf[$mentioned[2]!=;Mention two persons]`
});



bot.command({
    name: "avatar",
    aliases: ['av'],
    code: `
$if[$findMembers[$message;10;{position}]!=1]
$author[$userTag[$authorID];$authorAvatar]
$description[Please choose the following...
 
$findMembers[$message;10;**{position}.)** [{tag}](https://youtu.be/Qskm9MTz2V4=16)]]
$color[BLUE]
$awaitMessages[$authorID;1m;everything;avatar;$getVar[no] Cancelled]
$setUserVar[userav;$findMembers[$message;10;{id}]]
$elseIf[$findMembers[$message;10;{position}]==1]
$author[$userTag[$get[id]];$userAvatar[$get[id]]]
$image[$userAvatar[$get[id]?size=2048]]
$color[BLUE]
$addTimestamp
$let[id;$findMembers[$message;10;{id}]]
$endElseIf
$endIf
$onlyIf[$message!=;{author:$userTag[$authorID]:$authorAvatar}{image:$userAvatar[$authorID?size=2048]}{color:BLUE}{timestamp}]
$onlyIf[$findMembers[$message;10;{id}]!=;{author:$userTag[$findUser[$message]]:$userAvatar[$findUser[$message]]}{image:$userAvatar[$findUser[$message]?size=2048]}{color:BLUE}{timestamp}]
`
})
 
bot.awaitedCommand({
    name: "avatar",
    code: `
$if[$isNumber[$message[1]]==true]
$author[$userTag[$splitText[$message[1]]];$userAvatar[$splitText[$message[1]]]]
$image[$userAvatar[$splitText[$message[1]]?size=2048]]
$color[BLUE]
$addTimestamp
$textSplit[$getUserVar[userav];\n]
$elseIf[$toLowercase[$message[1]]==cancel]
$getVar[no] Cancelled
$endElseIf
$else
$author[$userTag[$authorID];$authorAvatar]
$image[$userAvatar[$authorID?size=2048]]
$color[BLUE]
$addTimestamp
$endIf
$suppressErrors[$getVar[no] Cancelled]
`
});


bot.command({
  name: "<@844445760204701707>",
  code: `$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$message; ;+;-1]&botname=Bonzo&ownername=Darven&user=1;message]`
}) 

bot.variables({
  userav: '', 
  no: '???', 
    yes: '???'
});