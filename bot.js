const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
const ytdl = require("ytdl-core");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const urban = require("urban");
const snekfetch = require("snekfetch");
const bot = new Discord.Client({disableEveryone: true})
const cleverbot = require("cleverbot", "cleverbot.io");
let cooldown = new Set();
let cdseconds = 2;



bot.commands = new Discord.Collection();


bot.on("ready", async () => {
  console.log(`${bot.user.id} ${bot.user.username} online! Ready when you are Boss xd`);

  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
} catch(e) {
    console.log(e.stack);
}
  //bot.user.setGame("<Activity>!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm"){
    return message.reply("Ew, not in my DMs. Go to a server that **I'm in**.");
  }
  
const ayy = bot.emojis.get("426999753830825995");
  if(message.content === "ayy" || (message.content === "ayyy")){
  const ayy = bot.emojis.find("name", "ayy");
  message.channel.send(`${ayy} Lmao`);
}

const intensefear = bot.emojis.get("406790609035329538");
  if(message.content === "D:"){
  const instensefear = bot.emojis.find("name", "intensefear");
  message.channel.send(`${instensefear}`);
}

const greencheck = bot.emojis.get("444736840940126208");
  if(message.content === "aeztiaconfirm"){
  const greencheck = bot.emojis.find("name", "greencheck");
  message.channel.send(`${greencheck}`);
}

const redx = bot.emojis.get("444736917217476608");
  if(message.content === "aeztiadeny"){
  const greencheck = bot.emojis.find("name", "redx");
  message.channel.send(`${redx}`);
}

const reload = bot.emojis.get("444751183505260575");
  if(message.content === "aeztiareload"){
  const reload = bot.emojis.find("name", "reload");
  message.channel.send(`${reload}`);
}

const bweary = bot.emojis.get("444751259308916756");
  if(message.content === ";T" || (message.content === ";;T") || (message.content === ";;;T") || (message.content === ";;;;T") || (message.content === "kinky") || (message.content === "spicy")){
  const reload = bot.emojis.find("name", "reload")
  message.reply(` ;;T`);
}
  
  let prefix = botsettings.prefix;
//   if(!message.content.startsWith(`${prefix}`)) return;
//   if(cooldown.has(message.author.id)){
//     message.delete();
//     return message.reply("Aye! Chill. Take it easy, yeah?")
//   }
// if(!message.member.hasPermission("ADMINISTRATOR")){
//     cooldown.add(message.author.id);
//   }
  // let messageArray = message.content.split(" ");
  // let command = messageArray[0];
  // let args = messageArray.slice(1);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // setTimeout(() => {
  //   cooldown.delete(message.author.id)
  // }, cdseconds * 1000)

if(command === `shutoff`){
  if(message.author.id !== "297931837400023041")
  return message.channel.send(`${redx} You ain't the creator!`);
  
  else

  if(message.author.id == "297931837400023041")
  await message.channel.send("***Killing all processes.***");
  await bot.destroy();
  process.exit();
  console.log("Bot killed");
  }

if(command === `reload`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("You ain't the creator!");
    else
  
    // Reload ALL commands listed.
    
  if(message.author.id == "297931837400023041")
  message.channel.send(`***Reloading.*** ${reload}`).then(message => {
    setTimeout(() => {
    message.edit(`*Reloaded.* ${greencheck}`)
  }, cdseconds * 3000)
});
  }

  if(command === `invite`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("I'm not allowed to give out my invite code to strangers");
    let invlink = `https://discordapp.com/oauth2/authorize?client_id=417517654174334976&permissions=8&scope=bot`
    message.channel.send(`Here you go, boss x3
    ${invlink}`)
  }

  if(command === `watchp`){
    let status = args.join(' ');
    if(message.author.id !== "297931837400023041") return message.channel.send("***Only my creator can change what I am watching!***");
    if(!status) return message.channel.send("Do I watch the void? What *or who* am I supposed to watch?")
    await bot.user.setActivity(`${status}`, {type: "WATCHING"})
    .catch(error => message.reply(`${redx} I'm not watching that because of __***${error}***__`));
    message.channel.send(`${greencheck} Now watching: **${status}**`);
  }

  if(command === `gamep`){
    let status = args.join(' ');
    if(message.author.id !== "297931837400023041") return message.channel.send("***Only my creator can change what I am playing!***");
    if(!status) return message.channel.send("Do I play with someones feelings or something? What *or who* am I supposed to play?")
    await bot.user.setActivity(`${status}`, {type: "PLAYING"})
    .catch(error => message.reply(`${redx} I'm not playing that because of __***${error}***__`));
    message.channel.send(`${greencheck} Now playing: **${status}**`);
  }

  if(command === `listenp`){
    let status = args.join(' ');
    if(message.author.id !== "297931837400023041") return message.channel.send("***Only my creator can change what I am listening to!***");
    if(!status) return message.channel.send("Do I listen to someones bullshit or something? What *or who* am I supposed to listen to?")
    await bot.user.setActivity(`${status}`, {type: "LISTENING"})
    .catch(error => message.reply(`${redx} I'm not listening to that because of __***${error}***__`));
    message.channel.send(`${greencheck} Now listening to: **${status}**`);
  }
  
  if(command === `}kick`){
    let User = message.mentions.users.first()
    if(!User) return message.reply("You think this is soccer? ***Who do I kick***");
    let Reason = args.slice(1).join(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**NO.** You don't have the ability to delete messages");
    //if(User.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Not allowed to kick the ones who have the ability to delete messages");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("Yeet! Out you go...")
    .setDescription("Kick")
    .setColor("#e56b00")
    .addField("Kicked User", `${User} with ID ${User.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", `${Reason}`);

    //let kickChannel = message.guild.channels.find(`name`, "incidents");
    //if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    User.kick(Reason);
    message.channel.send(kickEmbed);
  }

if(command === `ping`){
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`:ping_pong: ***Pong!***  x3 
Response :satellite_orbital: **${m.createdTimestamp - message.createdTimestamp}ms.** 
API Response :satellite_orbital: **${Math.round(bot.ping)}ms.**`);
  }

  if(command === `leave`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("**NO.** Only my creator can do that");
    
    else
    
    await message.channel.send("Aight', later Boss!");
    message.guild.leave();
  }

  if(command === `ramcheck`){
    if(message.author.id !== "297931837400023041") return message.channel.send("***You ain't my creator!***");
    message.channel.send(`*I am running with...* ***${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB***`);
  }

  if(command === `flipcoin`){
    
    let replies = ["Heads.", "Tails."];
    
    let result = Math.floor((Math.random() * replies.length));

    let msTimeout = 1000;
    message.channel.send('***Flipping...***').then(message => {
    setTimeout(() => {
    message.edit(`*${replies[result]}*`)
  }, cdseconds * 1200)
});
    
    //message.channel.send(replies[result]);
}

if(command === `rolldice`){
  let dice = Math.floor(Math.random() * 5 + 1);
  message.channel.send("You rolled a :game_die:" + ` ${dice}`);
}

if(command === `gaymeter`){
  let metre = Math.floor(Math.random() * 99 + 1);
  let thing = args.join(" ");
  if(!thing) return message.channel.send(`Since you didn't choose anything or anyone, I'd say you're about **${metre}%** gay.`)
  message.channel.send(`${thing}? I'd say about **${metre}%** gay.`)
}

if(command === `urban`){
  let str = args.join(" ");
  if(!str) return message.channel.send("Urban what? Enter something to look up.");
  
  urban(str).first(json => {
    if(!json) return message.channel.send(`Nothing was found for __${str}__.`);
    
    let urembed = new Discord.RichEmbed()
    .setTitle(json.word)
    .setColor("RANDOM")
    .setDescription(json.definition)
    .addField("Upvotes", json.thumbs_up + ` ${greencheck}`, true)
    .addField("Downvotes", json.thumbs_down + ` ${redx}`, true);
    message.channel.send(urembed);
});
};
// Weed Key qLZXyPT

if(command === `say`) {

    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Say what? x3")
    message.channel.send(sayMessage);
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
//message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  }

if(command === `avatar`){
  let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;

  let embed = new Discord.RichEmbed() 
  .setTitle(member + '\' avatar')
  .setColor("RANDOM")
	.setImage(member.avatarURL);
  message.channel.send({embed})
}



if(command === `listemotes`){
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send('***Fetching...***').then(message => {
    setTimeout(() => {
    message.edit(`${emojiList}`)
  }, cdseconds * 1500)
})}

if(command === `cat`){
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);
  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Kitty :0")
  .setImage(body.file);
  message.channel.send(catembed)
  .catch(e => message.channel.send(`Failed. Something went wrong.**${error}**`));
}

if(command === `fox`){
  let {body} = await superagent
  .get(`https://randomfox.ca/floof/`);
  let foxembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Foxy :0")
  .setImage(body.image);
  message.channel.send(foxembed)
  .catch(e => message.channel.send(`Failed. Something went wrong.**${error}**`));
}

if(command === `dog`){
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let dogembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("A dog :0")
  .setImage(body.url);
  message.channel.send(dogembed)
  .catch(e => message.channel.send(`Failed. Something went wrong.**${error}**`));
}

if(command === `catfact`){
 let {body} = await superagent
 .get(`https://catfact.ninja/fact`);
 let factembed = new Discord.RichEmbed()
 .setColor("RANDOM")
 //.setTitle("It's true that...")
 .addField("It's true that...", body.fact);
 //.addField("Response Time:", `${Math.round(bot.ping)}ms.`);
 message.channel.send(factembed);
}

if(command === `dadjoke`){
  let {body} = await superagent
  .get(`https://icanhazdadjoke.com/slack`);

  let o = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("**" + body.attachments.map(a => a.text) + "**");

  message.channel.send(o);
}

if(command === `clapify`){
  let randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
  if (args.length < 1) return message.channel.send("***Give:clap:me:clap:something:clap:to:clap:clap:clap:on:clap:***");
  message.channel.send(args.map(randomizeCase).join(':clap:'));
}

if(command === `succ`){
  if (!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");

  const sayMessage = args.join(" ");
  let Ureplies = ["loved it", "enjoyed it", "hate it", "want more", "want it from someone else instead", "liked it", "secretly like it", "want a break from it"];
  let Treplies = ["an hour later", "a couple of minutes later", "after a really long time", "for about half an hour", "after a while", "a moment after"];
  let Preplies = ["the best", "the sloppiest", "the mad", "a decent", "an aight'", "the shittiest", "the vacuum seal", "one helluva", "the most painful", "the 'gawk-gawk' combo", "the no-hand", "the double-hand twist"];
  let Posreplies = ["gets on their knees", "moves a strand of hair aside", "licks their own lips", "huffs", "gives a sly smile", "pouts", "makes a low groan"];
  let Uresult = Math.floor((Math.random() * Ureplies.length)); //for the reply options
  let Tresult = Math.floor((Math.random() * Treplies.length)); //for the time options
  let Presult = Math.floor((Math.random() * Preplies.length)); //for the power options
  let Posresult = Math.floor((Math.random() * Posreplies.length)); //for the position options
  if(!sayMessage) return message.channel.send("You sucking the air? Go give something *or someone*  the succ")
  message.channel.send(`***${message.member.displayName}***` + ` *${Posreplies[Posresult]} and puts that mouth of theirs to better use by giving* `+ `*${sayMessage}*` + ` ***${Preplies[Presult]} succ***` + ` *${Treplies[Tresult]}.*` + " *They seem to have*" + ` ***${Ureplies[Uresult]}***`);

}

if(command === `fucc`){
  if (!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  const sayMessage = args.join(" ");
  let Ureplies = ["loved it", "enjoyed it", "hate it", "didn't like it" ,"wanted more", "needed more" ,"liked it", "secretly liked it", "want a break from it for now", "are exhausted and relieved"];
  let Treplies = ["an exhausting hour later", "a really long time", "half an hour later", "a while", "a moment later", "quite a while"];
  let Preplies = [`stifled moans could be heard from ${sayMessage}`, 
                  `lusty panting escaped from ${sayMessage}'s mouth`, 
                  `${sayMessage} grits their teeth and their hands knotted into fists as they got ruthlessly pounded`, 
                  `${sayMessage} teared of pleasuring pain`, `shameless moans were forced out of ${sayMessage}`, 
                  `${sayMessage} couldn't even pretend that they didn't like it`, ];
  let Posreplies = [`***${sayMessage}*** *bends over for* ***${message.member.displayName}***`, 
                    `***${sayMessage}*** *goes on all fours for* ***${message.member.displayName}***`,
                    `***${sayMessage}*** *angles those hips of theirs up and spreads their legs far and wide for* ***${message.member.displayName}***`,
                    ` *Face down, ass up!* ***${sayMessage}'s behind*** *is claimed by* ***${message.member.displayName}***`,
                    `***${message.member.displayName}*** *gets aggressive and pins down* ***${sayMessage},*** *taking complete control over them*`,
                    `***${message.member.displayName}*** *is quite kinky and teases* ***${sayMessage}*** *with foreplay*`,
                    `***${sayMessage}*** *agrees to join in on some Monopoly with* ***${message.member.displayName}***—`,
                    `*Seemingly eager to do it,* ***${sayMessage}*** *offers themselves to ***${message.member.displayName}***`];
 let Uresult = Math.floor((Math.random() * Ureplies.length)); //for the reply options
 let Tresult = Math.floor((Math.random() * Treplies.length)); //for the time options
 let Presult = Math.floor((Math.random() * Preplies.length)); //for the power options
 let Posresult = Math.floor((Math.random() * Posreplies.length)); //for the position options                
 if(!sayMessage) return message.channel.send(`${message.member.displayName} must've went to go fuck themselves or something since they didn't say who otherwise`);
  message.channel.send(`${Posreplies[Posresult]}` + " *and then the two have some 'fun' for* " + `***${Treplies[Tresult]}.*** *'-' ${Preplies[Presult]}.*`);
}

if(command === `smut`){
  if (!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  let smutembed = new Discord.RichEmbed()
  .setTitle("Lemon-Scented Smut")
  .setColor("#d68998")
  .setThumbnail("https://i.imgur.com/dCJlKkG.jpg")
  .setFooter("!?smut<specifc selection>", "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png")
  .addField("The Holy List of Story Sins", "*placeholder story, placeholder story (yes await until added)*", true);
  message.channel.send(smutembed);
}

if(command === `neko`){
  let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    
    if (!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Nya~")
    .setImage(body.neko);

    message.channel.send(hentaiEmbed)
    .catch(error => message.channel.send(`Failed. Something went wrong.**${error}**`));
}

if(command === `dirtyquote`){
  if (!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  
  let replies = ["\"I'm straight, but hey, $20 is $20.\"", 
  "\"It's either ass or gas. Nobody rides for free\"",
  "\"Mm, no princess, can't stop won't stop\"",
  "\"You must be my favorite car because I wanna put you into overdrive~\"",
  "\"My tongue could tease you more than my words can~\"",
  "\"Make me -3-\"",
  "\"I love calling you a good girl because we both know you aren't~\"",
  "\"You can cover your mouth all you want, I'm still gonna make you scream~\"",
  "\"PUSSY, Push.. Until.. She.. Screams.. Yess~\"",
  "\"Roses are red, Foxes are clever, I like your butt, let me touch it forever.\"",
  "\"My mind is a dirty place and I love having you in it~\"",
  "\"You know what would look good on me? You.\"",
  "\"Every beauty needs a beast~\"",
  "\"Sex is not the answer. Sex is the question, yes is the answer.\"",
  "\"All these drugs, but I still wanna do you.\"",
  "\"It's not that I'm horny all the time. It's just that you're always so sexy~\"",
  "\"Your pants. They bother me, take them off.\"",
  "\"The best sex is when you don't have to worry about how loud you are\"",
  "\"You may have a bad mouth but you can sure do great things with it~\"",
  "\"Moanday, Tongueday, Wetday, Thirstday, Freakday, Sexday, Suckday.\"",
  "\"Roses are red, nuts are round, skirts are up, panties are down, belly to belly, skin to skin, when it's stiff, stick it in!\"",
  "\"Your face would look better between my legs~\"",
  "\"I wanna do bad things to you~\"",
  "\"I just want you to be happy... and naked as well.\"",
  "\"Spank me. It's the only way I'll learn~\"",
  "\"It may be between your legs, but it belongs to me. Understand?\"",
  "\"I'd look so good on you right about now.\"",
  "\"Naughty or nice? I can do both.\"",
  "\"I get turned on when you tell me how much you want me~\"",
  "\"Let's misbehave~\"",
  "\"I know I'm a handful, but that's what you got two hands for.\"",
  "\"I licked it, it's mine now.\"",
  "\"Sex is like math, add the bed, subtract the clothes, divide the legs and pray you don't multiply\""
 ];

  let result = Math.floor((Math.random() * replies.length))
  message.channel.send(`*${replies[result]}*`);
}
  
if(command === `8ball`){
    if(!args[2]) return message.channel.send("Actually ask a question?");
    let replies = ["Yes.", "No.", "Maybe.", "Ask some other time.", "Cannot say now.", "Absolutely.", "Without a doubt.", "For real? No."];

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " asked—")
    .setColor("RANDOM")
    .addField("Question :8ball:", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
  }

if(command === `pick`){
    let opt = message.content.slice(7).trim(1).split(',');
    let result = Math.floor((Math.random() * opt.length));
    if(opt.length < 2) return message.channel.send("I need two options to decide.");
    message.channel.send(`I pick...**${opt[result]}**`);
  }

{
    // yes
}

let dwsembed = new Discord.RichEmbed()
  .setTitle("Dog with Sins")
  .setColor("#000001")
  .setFooter("!?dws <selection>", "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png")
  .setThumbnail("https://i.imgur.com/yztZj9k.png")
  .addField("Intro", "Just some random shit to view any of my characters, lore n' shit", true)
  .addField("Characters", "Travis Rilynar, Marlowe Rilynar, Aeztia, Pamaer, Ruben Ferrant, Jejus, Lyian Sato, Yannis Seifer, Roxuhn", true)
  .addField("Vehicles", "GT-GalaxyTruck, Gargoyle, Wildcat, CK, Nauti Buoy", true)
  .addField("Items", "Zanneker0, Left Hand of Jejus, Graveyard Grumble", true)
  .addField("Journal n' Documentation", "\"Tyrexia?\" (#1), \"That kid, Vortex?\", \"The Axe Murderer\", Note #4, 'Termination Order'", true)
  .addField("Misc n' Shit", "Entity#, Dark Areas, SpaceBar, Decommissioned Bunker", true);

{

}
let spaceembed = new Discord.RichEmbed()
  .setTitle("SpaceBar")
  .setColor("#0ec8e4")
  .setFooter("Safe House", "http://www.yourcts.org/wp-content/uploads/2018/02/icon-residential.png")
  .setThumbnail("https://i.imgur.com/6XlvXmY.jpg")
  .addField("Overview", "*A medium-sized bar in literal space, on the Moon. Somehow built mysteriously and is currently owned by Jesse Green and Travis Rilynar (Co-Owner). It is only accessible by these two as they carry the proper key and GT-GalaxyTruck for entry. There are multiple rooms throughout the entire perimeter, some of them being concealed such as Jesse's 'Doggo' cabinet and Travis's secured locker.*", true)
  .addField("Appearance", "*The SpaceBar is no ordinary bar; the building itself is less than 45 x 15ft. Because it is on the Moon and in outer space, all windows and doors are air-locked. A 35+ Soundtrack playlist of EDM available for playing, the bar contains a surrounding counter in the centre. Behind the counter lies wine racks, signature displays, shelves of ingredients and the control panel to the lighting system. The decor of the SpaceBar is meant to be set to give off a nightclub atmosphere; a strip dance pole which is located near the centre to provide a 'good show'. The maximum occupancy of the bar is estimated to be about 150 people. A large game room is also included within the bar and is located northeast of the entryway. Includes, but not limited to: Air hockey tables, pool game tables, classic darts, and the arcade game machines from the 90s.*", true);
let galeembed = new Discord.RichEmbed()
  .setTitle("GT-GalaxyTruck")
  .setColor("#40a2e4")
  .setFooter("Vehicle", "http://aukavinna.is/wp-content/uploads/2017/02/iconcar_2398746577.png")
  .setThumbnail("https://i.imgur.com/qp9f9tn.jpg?1")
  .addField("Top Speed", "*Mach 1/767 mph/1234 kph*", true)
  .addField("0-60", "*1.7 seconds*", true)
  .addField("MPG", "*3*", true)
  .addField("Engine", "*9.7L V8 Duramax*", true)
  .addField("Curb Weight", "*3300 lbs/1497 kg*", true)
  .addField("Layout", "*AWD, Front Engine*", true)
  .addField("Overview", "*A signature vehicle that has a custom galaxy wrap (hence the name) It is the only vehicle that is used to gain access to the SpaceBar, which is located on the moon." + 
  " Though it is registered under the names of Travis Rilynar and Jesse Green, it is unknown when exactly the Galaxy Truck was manufactured. The five-seater truck has been modified to sustain the extreme atmospheric pressure, speed, and temperature*", true)
  .addField("Appearance", "*Equipped with military-grade, high-end materials: Bullet-resistant glass, reinforced carbon fiber plating, and a hardened drivetrain." + 
  " This off-road, five-seater also has an elegant wrap that glows. The interior is custom built: Motorsport racetrack seats with harnesses and steering wheel, UV-resistant tinted windows, 8ball gear shifter, and a fuzzy dashboard with a Hawaiian girl bobble-head.*", true)
  .addField("Performance", "*Offers extremely poor power steering due to its extremely cumbersome curb weight: 3300lbs. [1497kg]. This can be a potential hazard, especially when achieving speeds of Mach 1." + 
  " With only 3 MPG, this makes it one of the WORST in fuel efficiency as it burns with a V8 Duramax 9.7L, outputting a 0–60 in 1.7 seconds. Most of its acceleration power is placed on the wheels themselves, where the drivetrain is an all-wheel drive (AWD) Despite its horrible weight, the speed significantly makes that factor up when its top speed is almost equivalent to a Boeing jet: 767mph [1234kph]*", true);

let zanembed = new Discord.RichEmbed()
  .setTitle("Zanneker0")
  .setColor("#ac5846")
  .setFooter("Highly addictive", "http://drawi.ru/pic/fd17e6c702f7b2bb.jpeg")
  .setThumbnail("https://i.imgur.com/p99ZnBd.jpg")
  .addField("Overview", "*placeholder; need to revise*", true)
  .addField("Physical Appearance", "*The appearance of Zanneker0 can vary as it’s usually found from being processed into 1kg bars to even being disguised as a sweet good. (Most popular: Candy) It can be applied in beverages or in food products, however, it is often found in gummy candies. The weight of Zanneker0 can vary but never no more than 3lbs [1.4kg]. Due to its relatively small mass, it is easily concealable, but even the smallest amount of heat can make Zanneker0 emit an appealing, strong sweet odor which can prove difficult to hide.*", true);

let nbembed = new Discord.RichEmbed()
  .setTitle("Nauti Buoy")
  .setColor("#4270dd")
  .setFooter("Vehicle", "http://aukavinna.is/wp-content/uploads/2017/02/iconcar_2398746577.png")
  .setThumbnail("https://i.imgur.com/pl5u2IG.png")
  .addField("Top Speed", "*28 knots/32 mph/52 kph*", true)
  .addField("0-60", "*N/A*", true)
  .addField("Engine", "*Twin Diesel 757,000L RK280*", true)
  .addField("Curb Weight", "*25,557 lbs/12,500 kg/13 tons*", true)
  .addField("Overall Length","*414 ft/126 m*", true)
  .addField("Accomodations","*41 Cabins*", true)
  .addField("Overview", "*An enormous $24,000,000 luxury super yacht owned by the 2nd most notorious gang: Reyes de La Calle.*", true)
  .addField("Appearance","*placeholder test; huge ass boat with bright accent purple*", true)

let ggembed = new Discord.RichEmbed()
  .setTitle("Graveyard Grumble")
  .setColor("#7d2e3e")
  .setFooter("Signature Beverage")
  //.setThumbnail()
  .addField("Overview", 
  "*This coffin-shaped bottle is made of translucent bloodshot red glass. The taste is almost described as strong and sour with a foul aftertaste." + 
  " It has a long neck, stands about nine inches tall, and it has no label other than it displaying a warning: 'So strong it's something to DIE FOR'.*", true);

let dbembed = new Discord.RichEmbed()
  .setTitle("Decommisssioned Bunker")
  .setColor("#d3b385")
  .setFooter("Safe House", "http://www.yourcts.org/wp-content/uploads/2018/02/icon-residential.png")
  .setThumbnail("https://i.imgur.com/7EG1emR.jpg")
  .addField("Manufacture Date", "1944", true)
  .addField("Bunker Size", "155,000sq ft²", true)
  .addField("Overview", "*A condemned bunker now used as the headquarters/hideout of the organization: Yo Ouila*", true)
  .addField("Description", "*Includes a corridor that leads to the armory roomn, garage, control room, and conference room.*", true);
let tembed = new Discord.RichEmbed()
  .setTitle("Travis \"Vortex\" Rilynar")
  .setColor("#07a56c")
  .setFooter("Story Character", "https://i.imgur.com/uOFLi1A.png")
  .setThumbnail("https://i.imgur.com/jVM8fdc.jpg")
  .addField("Status", "*Alive*", true)
  .addField("Height", "*5'9/175 cm/1.7 m*", true)
  .addField("Weight", "*130 lbs./59 kg*", true)
  .addField("Gender", "*Male*", true)
  .addField("Age", "*22*", true)
  .addField("Zodiac Sign", "*Scorpio*", true)
  .addField("Physical Appearance", "*Travis is a Hispanic male who is at the age of 22 with very dark brown hair and brown eyes. He has a medium build, standing 5’9 [175cm] and weighs at 130lbs. [59kg]. His skin tone is a III medium white (Fitzpatrick Scale). Travis's physique is slightly thinner compared to most of the others such as Riley, Connor, Carlos, and even his own brother, Marlowe." +  
  "This most certainly comes from his time as a catcher and his stint in prison. Taking from his father's side, Travis and Relonimar both take their father's personality but is not as severe. The two brothers also inherit their father's dominant hand, which is the left hand—often frowned upon when doing tasks that were made for the right dominant hand." + 
  "Travis is the person who wears casual clothing that usually consists of dark jeans, black two-tone converses, unique shirts with psychedelic logos covered by his galaxy hoodie.*", true);
let aembed = new Discord.RichEmbed()
  .setTitle("Aeztia Lavender")
  .setColor("#46437b")
  .setFooter("OP Fantasy Character", "https://i.imgur.com/uOFLi1A.png")
  .setThumbnail("https://i.imgur.com/lCgNS6v.jpg")
  .addField("Status", "*Alive*", true)
  .addField("Height", "*5'5/165 cm/1.6 m*", true)
  .addField("Weight", "*120 lbs./54 kg*", true)
  .addField("Gender", "*Female*", true)
  .addField("Age", "*99 Googolplexian*", true)
  .addField("Zodiac Sign", "*Unknown*", true)
  .addField("Description", "*Mischievous demon who uses her powers to manipulate others for personal gain and advantages.*", true)
  .addField(".", "Powers and Special Abilities", true)
  .addField("Hypnosis", "*Gain control of a person, animal, and other entities and fully manipulate the victim to any extent or desire.*");
let jembed = new Discord.RichEmbed()
  .setTitle("Jejus")
  .setColor("#87c285")
  .setFooter("Fantasy Character", "https://i.imgur.com/uOFLi1A.png")
  .setThumbnail("https://i.imgur.com/8cHcPvv.jpg?1")
  .addField("Status", "*Alive*", true)
  .addField("Height", "*6'7/204 cm/2 m*", true)
  .addField("Weight", "*219 lbs./99 kg*", true)
  .addField("Gender", "*Male*", true)
  .addField("Age", "*42.1 million*", true)
  .addField("Background", "*Though it is exactly unknown when and where Jejus was born, it is estimated to be around the inital release of Roblox in 2006." + 
  " Not much is known about the muscular Roblox man other than the fact of having a questionable history. One of which occasions including being involved in a massacare and engaging in Cops n' Robbers*", true)
  .addField("Personality", "*Often known for his unusual behavior that is dynamic in all situations possible. It is an extremely rare occasion for him to speak which eventually led to the assumption of Jejus being a mute." + 
  " He strongly believes in the morals of justice and is willing to serve if necessary*", true);
let rembed = new Discord.RichEmbed()
  .setTitle("Roxuhn")
  .setColor("#000001")
  .setThumbnail("https://i.imgur.com/XbIae1y.png?1")
  .setFooter("OP Fantasy Character", "https://i.imgur.com/uOFLi1A.png")
  //.setThumbnail("https://i.imgur.com/lCgNS6v.jpg")
  .addField("Status", "*Alive*", true)
  .addField("Height", "*6'2/188 cm/1.8 m*", true)
  .addField("Weight", "*160 lbs./73 kg*", true)
  .addField("Gender", "*Male*", true)
  .addField("Age", "*400 Quintillion*", true)
  .addField("Zodiac Sign", "*Unknown*", true)
  .addField("Description", "*An ōkami that has been also known as the \"Wanderer\". As with all other ōkami, Roxuhn preys and feeds on human victims.*", true)
  .addField(".", "Powers and Abilities", true)
  .addField("Decay", "*Possesses the ability to rapidy accelerate the age life of an object, person or any entity, serverely inflicting debilitating effects.* ***Especially deadly used on all forms of life***", true)
  .addField("Regeneration", "*As long as damage is not absorbed during the processes or has not been already dismembered, any wounds can completely heal in a matter of hours.*", true)
  .addField("Fangs", "*Canine-like teeth that are razor sharp. Enough to easily slice and tear through bare skin and flesh.*", true);

{
// ▬▬▬▬▬▬▬▬▬▬▬▬
}

if(command === `dws`){
    if(args[0] == "zanneker0") return message.channel.send(zanembed);
    else if(args[0] == "spacebar") return message.channel.send(spaceembed);
    else if(args[0] == "gtgalaxytruck") return message.channel.send(galeembed);
    else if(args[0] == "nautibuoy") return message.channel.send(nbembed);
    else if(args[0] == "graveyardgrumble") return message.channel.send(ggembed);
    else if(args[0] == "decomissionedbunker") return message.channel.send(dbembed);
    else if(args[0] == "jejus") return message.channel.send(jembed);
    else if(args[0] == "aeztia") return message.channel.send(aembed);
    else if(args[0] == "travis") return message.channel.send(tembed);
    else if(args[0] == "roxuhn") return message.channel.send(rembed);
    message.channel.send(dwsembed);
}
 
if(command === `emoji`){
  let replies = [":hearts:", ":chocolate_bar:", ":cookie:", ":kissing_heart:", ":sweat_smile:", ":wink:", ":blush:", ":worried:"];
  let result = Math.floor((Math.random() * replies.length));
  
  if(message.author.id !== "362472426258300928")
    return message.channel.send("**NO.** You ain't Inkwell!");
    
    else
    message.channel.send(replies[result]);
}

  if(command === `fortunecookie`){
    let replies = ["Dont mix foul words with your bad mood. You'll have many chances to change your mood, but rarely the chance to replace the words you spoke.",
    "Before you ask why someone hates you, ask yourself why you should care deeply.",
    "The fears we don't face **become our limits**.",
    "Obsessed is a word the lazy will use to describe the dedicated.",
    "If it's still on your mind, it is **worth** taking the risk.",
    "Apparently, when you treat people like they treat you, they get upset.",
    "Don't ruin a good today by thinking about a bad yesterday. It may not be easy, but it is best to let it go.",
    "Having a soft heart in a cruel world is absolute courage, not weakness.",
    "We all have ability. The difference is **how** we use it.",
    "Stop wait for the 'right time'. Time and tide wait for no one.",
    "It's far more better to be completely exhausted from the hard times which breed success than being well-rested from achieving nothing.",
    "They watch. They hate. Then they eventually copy.",
    "Courage doesn't mean you don't get afraid. Courage means you **don't let fear stop you**.",
    "If you really want it, you simply **don't just give up**.",
    "People say 'I never see you at the club', I reply 'I never see you at the bank.'",
    "'He who buys what he does not need steals from himself'",
    "Keep your cool. Don't let little stupid things break your happiness.",
    "The more informed you are, the less arrogant and aggressive you are —Nelson Mandela",
    "If you try something, you risk failure. If you don't try it at all, **you ensure it**.",
    "You can work hard, but if you don't work smart, you'll work for the rest of your life.",
    "The best teachers are those who show you where to look, but don't tell you what to see.",
    "Don't pray for an easy life. Pray for the strength to endure a difficult one. —Bruce Lee",
    "Refuse to lower your standards to accommodate those who refuse to raise theirs.",
    "If the plan doesn't work, change the plan **but never the goal**.",
    "If you can't get somebody off your mind, they're probably supposed to be there.",
    "Hurting someone can be as easy as throwing a stone in the sea. Do you have any idea how deep that stone can go?",
    "If you hate a person, then you're defeated by them.",
    "When anger rises, think of the consequences.",
    "As long as you're making progress, it does not matter how fast or how slow it is.",
    "Happiness is a choice. Life isn't about pleasing everybody.",
    "Weakness is a choice. It's up to **you**.",
    "Silence is definitely better than uncessary drama.",];

    let result = Math.floor((Math.random() * replies.length))
    message.channel.send(replies[result]);
  }
  if(command === `ban`){

    let bUser = message.mentions.users.first()
    if(!bUser) return message.reply("Yeah, banned the air. ***Who do I ban***");
    let bReason = args.slice(1).join(" ");
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("**NO.** You don't have the ability to ban members!");
    if(bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Not allowed to ban others who have the ability to ban");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
   }

  if(command === `serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription(message.guild.name)
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField("Made on", message.guild.createdAt, true)
    .addField("You joined", message.member.joinedAt, true)
    .addField("Total Members", message.guild.memberCount, true);

    return message.channel.send(serverembed);
  }

  if(command === `purge`){
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("**No.** You need the following: ADMINISTRATOR");
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("What do you think this is, the movie? No, purge 2 or more messages.");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of ***${error}***`));
  }


  if(command === `botinfo`){
    let embed = {
      "title": "My info x3",
      //"url": "https://discordapp.com",
      "color": 15721660,
      //"timestamp": "2018-04-21T01:28:06.959Z",
      "footer": {
        "icon_url": "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png",
        "text": "Running on Discord.js v11.30"
      },
      "thumbnail": {
        "url": `${bot.user.displayAvatarURL}` 
      },
      //"image": {
        //"url": "https://cdn.discordapp.com/embed/avatars/0.png"
      //},
      "author": {
        "name": "Made by Bwapstustu Turbo#5600",
        //"url": "https://discordapp.com",
        //"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      "fields": [
        {
          "name": "I am",
          "value": `${bot.user.username}#${bot.user.discriminator} with ID of (${bot.user.id})`
        },
        {
          "name": "Made at",
          "value": `${bot.user.createdAt}`
        },
        {
          "name": "I have...",
          "value": "34 Commands (total)"
        },
        {
          "name": "RAM Usage",
          "value": `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
        },
        {
          "name": "WIP",
          "value": `${ayy} Work in progress. Don't expect much`,
          "inline": true
        },
        {
          "name": "Warning",
          "value": ":warning: Commands may be unstable; I'm not perfect yet",
          "inline": true
        }
      ]
    };
    message.channel.send({ embed });
  
    // let bicon = bot.user.displayAvatarURL;
    // let botembed = new Discord.RichEmbed()

    // .setDescription("My info x3")
    // .setColor("#15f153")
    // .setThumbnail(bicon)
    // .setAuthor("Made by", "Bwapstustu Turbo#5600")
    // .addField("I am", bot.user.username, bot.user.discriminator)
    // .addField("Made on", bot.user.createdAt)
    // .addField("Total Commands", "24");

    //return message.channel.send(botembed);
  }
  
  if(command === `help`){
    if(args[0] == "dws") return message.channel.send("Usage: !?dws <option> | *Character commands only use the first name.* `ex. !?dws travis` `!?dws ruben` | *All commands are lowercased and should not be spaced* `ex. !?dws gtgalaxytruck` `!?dws nautibuoy`.");
    else if(args[0] == "pick") return message.channel.send(`Usage: !?pick <options> <options> | All commas used **will split choices**.`);
    else if(args[0] == "ping") return message.channel.send("Checks the bot's response time. The lower the value, the more quicker the response is. *Response is the time taken to send \"pong\". API Response is the time taken for the Discord websocket to connect to the bot.*");   
    else if(args[0] == "leave") return message.channel.send("I'll leave this server if necessary.");
    else if(args[0] == "eval") return message.channel.send("Executes the arbitrary Javascript library. **Use with caution. This is an extremely powerful and dangerous command if used improperly or maliciously.**");
    else if(args[0] == "shutoff") return message.channel.send("All of my proccesses are immediately terminated upon execution.");
    else if(args[0] == "reload") return message.channel.send("Refreshes all commands in located in the directory: ./botsettings.json and ./bot.js");
       
    let embed = {
         "title": "Here x3",
        //"url": "https://discordapp.com",
        "color": 12121300,
        //"timestamp": "2018-04-21T01:28:06.959Z",
        "footer": {
          "icon_url": "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png",
          "text": "You can type help on certain commands."
        },
        "thumbnail": {
          "url": `http://www.clker.com/cliparts/a/a/5/9/1194994445711658913ark_help.svg.med.png` 
        },
        //"image": {
          //"url": "https://cdn.discordapp.com/embed/avatars/0.png"
        //},
        "author": {
          "name": "Called for help!",
          //"url": "https://discordapp.com",
          //"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "Developer",
            "value": "shutoff, reload, eval, listenp, watchp, gamep, setavat, leave, invite, status, ramcheck",
            "inline": true
          },
          {
            "name": "Random",
            "value": "serverinfo, botinfo, ping, devhelp, dws, listemotes, avatar, urban, pick"
          },
          {
            "name": "Moderation",
            "value": "purge, kick, ban, giverole, removerole"
          },
          {
            "name": "Fun",
            "value": "say, cat, catfact, dog, fox, 8ball, fortunecookie, flipcoin, rolldice, dadjoke, clapify, gaymeter"
          },
          {
            "name": " :warning: NSFW",
            "value": "dirtyquote, fucc, succ, smut, neko",
            "inline": true
          },
          // {
          //   "name": "Warning",
          //   "value": ":warning: Commands may be unstable",
          //   "inline": true
          // }
        ]
      };
      message.channel.send({ embed });

}

});
bot.login(botsettings.token);
