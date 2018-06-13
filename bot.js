const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
const urban = require("urban");
const cheerio = require("cheerio");
const querystring = require("querystring");
const mathjs = require("mathjs");
const snekfetch = require("snekfetch");
const osu = require("os-utils");
const os = require("os");
const platform = require("platform");
const prettyMs = require("pretty-ms");
const giphy = require("giphy-api")("l1Y4ECUVv8LSCMnVAQlRjJPds4AsWDNg");
const bot = new Discord.Client({disableEveryone: true})
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
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm"){
    return message.reply("Ew, not in my DMs. Go to a server that **I'm in**.");
  }


 const lmao = bot.emojis.get("426999753830825995");
 const ayy = bot.emojis.find("name", "ayy");

 const intensefear = bot.emojis.get("406790609035329538");
 const fear = bot.emojis.find("name", "intensefear");

 const green = bot.emojis.get("444736840940126208");
 const greencheck = bot.emojis.find("name", "greencheck");

 const redx = bot.emojis.get("444736917217476608");
 const x = bot.emojis.find("name", "redx");
 
 const partyblob = bot.emojis.get("447855822811430912");
 const blob = bot.emojis.find("name", "partyblob");
 
 const bmo = bot.emojis.get("447855890062770179");
 const beemo = bot.emojis.find("name", "bmo");

 const snoop = bot.emojis.get("447855918827175936");
 const dogg = bot.emojis.find("name", "snoop");
 
 const pepedab = bot.emojis.get("447856207928098847");
 const dab = bot.emojis.find("name", "pepedab");

 const pikagroove = bot.emojis.get("447856282049708053");
 const pika = bot.emojis.find("name", "pikagroove");
 
 const heckingfastthink = bot.emojis.get("447856347493433374");
 const think = bot.emojis.find("name", "heckingfastthink");

 const rainbowyeet = bot.emojis.get("447856449855553536");
 const yeet = bot.emojis.find("name", "rainbowyeet");

 const animeahhhhh = bot.emojis.get("447856637525491712");
 const ah = bot.emojis.find("name", "animeahhhhh");

 const refresh = bot.emojis.get("444751183505260575");
 const reload = bot.emojis.find("name", "reload");

 const engcheck = bot.emojis.get("454400961281261580");
 const checkeng = bot.emojis.find("name", "checkeng");

 const love = bot.emojis.get("454416240904110081");
 const loveydovey = bot.emojis.find("name", "loveydovey");
  
let prefix = botsettings.prefix;
   if(!message.content.startsWith(`${prefix}`)) return;
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

  message.channel.send(`***Reloading*** ${reload}`).then(message => {
    setTimeout(() => {
    message.edit(`*Reloaded.* ${greencheck}`)
  }, cdseconds * 4500)
});
  }

if(command === `eval`){
  if(message.author.id !== "297931837400023041") return message.channel.send("No wtf lol you are not allowed to use this command");
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    // if (typeof evaled !== "string")
    //   evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), {code:"xl"});
  } catch (err) {
    message.channel.send(`\`${redx} WARN ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}

if(command === `status`){
  let status = args;
  if(status !== "online" || "idle" || "dnd" || "invisible") return message.channel.send(`${redx} That's not gonna work. Status must be either \`online\` \`idle\` \`dnd\` or \`invisible\``);
  await bot.user.setStatus(status);
  message.channel.send(`${greencheck} I am now __**${status}**__`);
}

if(command === "docrefs"){
  let docembed = new Discord.RichEmbed()
  .setAuthor("Unofficial Discord Libraries", "https://cdn.discordapp.com/embed/avatars/0.png", "https://discordapi.com/unofficial/libs.html")
  .setColor("#de1b24")
  .setDescription("Be aware of API updates, some methods may be deprecated/outdated")
  .addField("discord.js", "https://discord.js.org/#/docs/main/stable/general/welcome", true)
  .addField("JDA", "https://github.com/DV8FromTheWorld/JDA/", true)
  .addField("discord.py", "http://discordpy.readthedocs.io/en/latest/api.html", true)
  .addField("Discord.NET", "https://github.com/RogueException/Discord.Net", true)
  .addField("discordrb", "https://www.rubydoc.info/gems/discordrb", true);
  message.channel.send(docembed);
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
  
  if(command === `kick`){
    let User = message.mentions.users.first()
    if(!User) return message.reply("You think this is soccer? ***Who do I kick***");
    let Reason = args.slice(1).join(" ");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**NO.** You don't have the ability to kick members");
    if(User.hasPermission("KICK_MEMBERS")) return message.channel.send("I can't kick members who have the ability to kick as well.");
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.channel.send("I need the following to perform this command: KICK_MEMBERS");

    // let kickEmbed = new Discord.RichEmbed()
    // .setTitle("Yeet! Out you go...")
    // .setDescription("Kick")
    // .setColor("#e56b00")
    // .addField("Kicked User", `${User} with ID ${User.id}`)
    // .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    // .addField("Kicked In", message.channel)
    // .addField("Time", message.createdAt)
    // .addField("Reason", `${Reason}`);

    //let kickChannel = message.guild.channels.find(`name`, "incidents");
    //if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    await User.kick(Reason);
    message.channel.send(`Alright, ${member.user.username} is outta' here.`).catch(console.error);
  }

  if(command === `giverole`){
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have permissions.")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Please provide a user name")
    let role = args.join(" ").slice(22);

    if (!role) return message.reply("Please provide a role name.");
    let aRole = message.guild.roles.find(`name`, role);
    if (!aRole) return message.reply(`I can't find the role.`);

    if (rMember.roles.has(aRole.id)) return message.reply("The user already have this role!");
    await (rMember.addRole(aRole.id))
    message.channel.send("A'ight, give them the role.");

}

if(command === `ping`){
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`:ping_pong: ***Pong!***  x3 
Response :satellite_orbital: **${m.createdTimestamp - message.createdTimestamp}ms.**`); 
// API Response :satellite_orbital: **${Math.round(bot.ping)}ms.**`);
  }

  if(command === `leave`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("**NO.** Only my creator can do that");
    
    else
    
    await message.channel.send("A'ight, later Boss!");
    message.guild.leave();
  }

  if(command === `cpu`){
    if(message.author.id !== "297931837400023041") return message.channel.send("***You ain't my creator!***");
    message.channel.send(`NODE JS v11.30 ${platform.os} \n${bot.user.username}#${bot.user.discriminator}\nCPU | **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB of ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB**`);
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
  let sides = (args[0]) || 6;
  let dice = Math.floor(Math.random() * sides) + 1;

  if(isNaN(sides)) return message.channel.send(`You must roll a __number__ not... whatever that was.`);
  if(sides < 1) return message.channel.send(`You cannot roll a 0 or negative die :game_die:`);
  message.channel.send("You rolled a :game_die:" + ` ${dice}`);
}

if(command === `gaymeter`){
  let metre = Math.floor(Math.random() * 100 + 1);
  let thing = args.join(" ");
  if(!thing) return message.channel.send(`I'd say you're about **${metre}%** gay.`)
  message.channel.send(`${thing}? I'd say about **${metre}%** gay.`)
  // if(metre <= 10) return message.channel.send("Eh, not really gay to begin with.");
  // if(metre < 20) return message.channel.send("Still not *that* gay");
  // if(metre < 30) return message.channel.send("The gay is *barely* showing up");
  // if(metre < 40) return message.channel.send("You could almost see the gay within them");
  // if(metre < 50) return message.channel.send("Only half gay. Sounds about right.");
  // if(metre < 60) return message.channel.send("Concerned gay level");
  // if(metre < 70) return message.channel.send("Heck, no doubt about being gay for sure");
  // if(metre < 80) return message.channel.send("Gawddamn, definitely gay");
  // if(metre >= 90) return message.channel.send("Now that's pretty fucking gay");
}

// if(command === `giphy`){
//   let str = args.join(" ");
//   if(!str) return message.channel.send("Enter something to gif search");

// giphy.random(str).then(res => {
//   console.log(res)
//   let body = res.data
//   let embed = new Discord.RichEmbed()
//   .setAuthor(body.title, null, body.url)
//   .setFooter("GIPHY ID: " + body.id)
//   .setColor("RANDOM")
//   .setImage(body.image_original_url);
//   message.channel.send(embed);
// });
// }

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
// strainapi.evanbusse.com/qLZXyPT/searchdata/effects (lists all effects)
// strainapi.evanbusse.com/qLZXyPT/strains/search/effect/EFFECT (searches strains with supplied effect)
// strainapi.evanbusse.com/qLZXyPT/searchdata/flavors (lists all flavors)
// strainapi.evanbusse.com/qLZXyPT/strains/data/desc/STRAIN_ID
// strainapi.evanbusse.com/qLZXyPT/strains/data/effects/STRAIN_ID



if(command === `mstrain`){
  let strainID = Number(args[0]);
  if(!strainID) return message.channel.send(`${redx} Enter an ID number to search for a strain.`);
  if(isNaN(strainID)) return message.channel.send(`${redx} It must be a valid number.`);

  let descAPI = `http://strainapi.evanbusse.com/qLZXyPT/strains/data/desc/${encodeURIComponent(strainID)}`;
  let effectsAPI = `http://strainapi.evanbusse.com/qLZXyPT/strains/data/effects/${encodeURIComponent(strainID)}`;
  
  snekfetch.get(descAPI).then(r =>{
  //snekfetch.get(effectsAPI);
    let body = r.body
    if(!body) return message.channel.send(`${redx} Provided ID does not exist.`);
    console.log(body)
    // let embed = new Discord.RichEmbed()
    // .setColor("RANDOM")
    // .setFooter(`ID: ${strainID}`)
    // .setDescription(`${body.desc}`);
    //.addField(`Medical Effects`, body.medical, true)
    //.addField(`Effects ${greencheck}`, body.positive, true)
    //.addField(`Effects ${redx}`, body.negative, true);
    message.channel.send(`${body.desc}`);
  });
}

if(command === `jsontest`){
  let api = "https://jsonplaceholder.typicode.com/posts";
  snekfetch.get(api).then(r => {
    let body = r.body
    let id = Number(args[0]);
    if(!id) return message.channel.send("An ID number is required.");
    if(isNaN(id)) return message.channel.send("It must be a valid number.");

    let entry = body.find(post => post.id === id);
    if(!entry) return message.channel.send(` ${redx} This entry does NOT exist`)
    let embed = new Discord.RichEmbed()
    .setAuthor(entry.title)
    .setDescription(entry.body)
    .addField("Author ID", entry.userId)
    .setFooter("Post ID: " + entry.id)
    
    message.channel.send(embed);
  });
}

if(command === `namegen`){
  let {body} = await snekfetch.get(`https://uinames.com/api/`);
  let info = new Discord.RichEmbed()
  .setTitle("Generated Name")
  .setFooter("Region: " + body.region)
  .addField("Full Name", body.name + ` ${body.surname}`)
  .addField("Sex", body.gender);
 message.channel.send(info);
}

if(command === `calc`){
  let input = args.join(" ");
  if(!input) return message.channel.send("I need an equation for this to work.")

  let answer;
  try{
    answer = mathjs.eval(input);
  } catch (error) {
    return message.channel.send(`${redx} Could not solve: **${error}**`);
  }
  message.channel.send(`\`${answer}\``);
}

if(command === `say`) {

    let sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Say what? x3")
    message.channel.send(sayMessage);
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
//message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  }

if(command === `avatar`){
  let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;

  let embed = new Discord.RichEmbed() 
  .setTitle(`${member}'s avatar`)
  .setColor("RANDOM")
	.setImage(member.avatarURL);
  message.channel.send({embed})
}

if(command === `fliptext`){
  const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
  const OFFSET = '!'.charCodeAt(0);

  if(args.length < 1) return message.channel.send("I can't flip text that isn't even there");
  message.channel.send(
    args.join(' ').split('')
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || ' ')
        .reverse().join('')
  );
}

if(command === `rps`){
 var choice = args[0];
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "scissors") {
      var response = "**Scissors**! :v: Haha, I win!"
    } else if (choice2 == "paper") {
      var response = "**Paper**! :hand_splayed: It's a tie :o"
    } else {
      var response = "**Rock**. :punch: You win."
    }
    message.channel.send(response);
  } else if (choice == "rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "paper") {
      var response = "**Paper**! :hand_splayed: Haha, I win!"
    } else if (choice2 == "rock") {
      var response = "**Rock**! :punch: It's a tie :o"
    } else {
      var response = "**Scissors**. :v: You win."
    }
    message.channel.send(response);
  } else if (choice == "scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "rock") {
      var response = "**Paper**. :hand_splayed: You win."
    } else if (choice2 == "scissors") {
      var response = "**Scissors**! :v: It's a tie :o"
    } else {
      var response = "**Rock**! :punch: Haha, I win!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Can't play rps if you don't even say what you declare first`);
  }
}

if(command === `listemotes`){
  if(message.guild.emojis.size === 0) return message.channel.send("There aren't any emojis here.");
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(`***Fetching emojis for ${message.guild.name}...***`).then(message => {
    setTimeout(() => {
    message.edit(`${emojiList}`)
  }, cdseconds * 2500)
})}

if(command === `cat`){
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);
  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Kitty :0")
  .setImage(body.file);
  message.channel.send(catembed)
}

if(command === `fox`){
  let {body} = await snekfetch.get(`https://randomfox.ca/floof/`);
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
 let {body} = await superagent.get(`https://catfact.ninja/fact`);
 let factembed = new Discord.RichEmbed()
 .setColor("RANDOM")
 //.setTitle("It's true that...")
 .addField("It's true that...", body.fact);
 //.addField("Response Time:", `${Math.round(bot.ping)}ms.`);
 message.channel.send(factembed);
}

if(command === `dogfact`){
  let {body} = await snekfetch.get(`https://dog-api.kinduff.com/api/facts`);
  let doggyfacts = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("It's true that...", body.facts, true);
  message.channel.send(doggyfacts)
}

if(command === `dadjoke`){
  let {body} = await superagent
  .get(`https://icanhazdadjoke.com/slack`);

  let o = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("**" + body.attachments.map(a => a.text) + "**");

  message.channel.send(o);
}

if(command === `meme`){
  let{body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let me = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${ayy} lmao`)
  .setImage(body.url);

  message.channel.send(me);
}

if(command === `clapify`){
  let randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
  if (args.length < 1) return message.channel.send("***Give:clap:me:clap:something:clap:to:clap:clap:clap:on:clap:***");
  message.channel.send(args.map(randomizeCase).join(':clap:'));
}

if(command === `smut` && args[0] == "tradechristmasspecial"){
 if(!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  let pages = [
  //one
  `*Written by an awesome person:* <@362472426258300928>`,
  //two
  `*"TRAAAAVIIIIIIIIS" Jade called from downstairs, it has been several months since the incident at the bar. Jade moved in with Travis since that night and they've had some fun, but this morning was special, it was Christmas.
  "Wh-Huh?" Travis questioned, waking up from his slumber, he reached over to hug jade and cuddle close but all he could feel was a warm space where her body should be and the covers. He sighed, "JAAAADDE, come back here it's too early, anyway, The squad will be over soon for dinner and gifts.
  "Then we better hurry" Jade called to him.
  "Hurry for what?" he asked himself as he climbed out of bed. After pulling on his boxers he went downstairs and walked into the kitchen to brew some coffee.
  "uh-uh, living room, now." Jade demanded.
  Travis rolled his eyes, "For what damnit." He headed into the living room only to see jade naked with red ribbons wrapped around her body covering her body.*`,
  //three
  `*Travis' jaw dropped, "holy..."
  "what are you going to do, sit there and gawk or come open your present?" she sat on her knees in front of the Christmas tree.
  "Wh- Jade- I..." he smiled and slowly walked over. "but uh, I like to open my presents sitting."
  jade smirked and stood, walking over to a recliner, " then come sit"
  Travis wasted no time, he walked over and sat down.
  "This one is from me" she sat on his lap sideways.
  "Well, I love it.' he said putting the tips of his fingers onto her leg, messing with one of the ribbons.
  "how can you love it if you haven't used it yet?" she teased. He smiled.
  "Okay, let me open it then" he replied in a seducing matter. He reached one of his hands up to the ribbon bow that held Jade's breast. He loosened it and pulled the ribbon apart.*`, 
  //four
  `*He watched her breast bounce as they were released from the ribbons, " Don't drool too much" Jade laughed.
  He reached over and began groping her left tit, " no matter how many times I see them I still love them."
  She smiled, "I know you do," she smirks, "But I know what you love more". She rocked her hips around in his lap.
  "mhm.." he agreed.
  She turned to face away from him, swaying her hips and grinding her butt against his growing cock, "I think it wants to come out to play~" she teased, then she turned around and played with the waistband of his boxers.
  "Then we better let him out, " he slid off his boxers, releasing his six-inch.
  she turned back around, grinding her ass against his cock some more, Travis grabbing her hips. He took more control as time passed.*`,
  //five 
  `*"I'm going in" he spoke with dominance, something Jade loved. She nodded.
  He pushed her legs apart and forced his tip into her wet self. "M-more" Jade demanded, she had been waiting a couple of hours for him to wake and wanted him to be in her.
  He gave her what she wanted, he pushed himself as deep as he could. Her moans filled the house, once he was in they sat there, breathing heavily. Once Travis gained his breath again he began to force her body to move up and down, using both his hands on her hips and his hips, pushing up and down.
  He knew he was doing something right because of her groans and moans, he loved it just as much as she did.*`,
  //six
  `*After a bit of this, he put his hand on the center of her back, pushing her down into a bent position. He stood himself up, forcing himself in and out of her. Her small cove barely able to take it. He gave her ass a few smacks, making her pussy tense around his cock, the pleasure overtook her as she let out a huge moan, letting her orgasm shake her, but Travis wasn't finished. He kept pounding into her, soon he would cum. Now they had done this enough to know he shouldn't come in her, so before he got to his last straw he pulled out, cumming all over her ass. Then he sat back down.
  "Alright, go get cleaned up before everyone shows up." he let out a deep breath and leaned his head back, Jade still leaned over breathing heavily.*`,
  //seven
  `*The End*
  !?smut <story> for other lemon stuff :lemon: *you nasty*`];
  let page = 1; 
 
  const embed = new Discord.RichEmbed() 
    .setTitle("Trade Christmas Special")
    .setColor("#d42426")
    .setFooter(`Page ${page} of ${pages.length}`) 
    .setDescription(pages[page-1])
 
  message.channel.send(embed).then(message => { 
    message.react('⏪').then( r => { 
      message.react('⏩') 
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪'
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩'
      const backwards = message.createReactionCollector(backwardsFilter, { time: 600000 }); 
      const forwards = message.createReactionCollector(forwardsFilter, { time: 600000 }); 
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--;
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`)
        message.edit(embed) 
      })
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++;
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`)
        message.edit(embed) 
      })
   
    })
})};

if(command === `succ`){
  let Reciever = args.join(" ");

  let intro = [``];
  let introOutcome = Math.floor((Math.random() * intro.length));
  
  let middle = [];
  let middleOutcome = Math.floor((Math.random() * middle.length));
  
  let end = [];
  let endOutcome = Math.floor((Math.random() * end.length));

  message.channel.send(`${message.member.displayName}`)
}

// let intro = [];
// let introOutcome = Math.floor((Math.random() * intro.length));

// let middle = [];
// let middleOutcome = Math.floor((Math.random() * middle.length));

// let end = [];
// let endOutcome = Math.floor((Math.random() * end.length));

if(command === `smut`){
  if(!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  
  if(args[0] == "tradechristmasspecial") return;
  if(args[0] == "wehaveusanyway") return message.channel.send(`${redx} *403 Forbidden*`);
  
  let smutembed = new Discord.RichEmbed()
  .setTitle(`Lemon Scented.`)
  .setColor("#d68998")
  .setThumbnail("https://i.imgur.com/dCJlKkG.jpg")
  .setFooter("!?smut <story>", "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png")
  .addField(`${loveydovey}`, "*Trade Christmas Special \n???\nWe Have Us Anyway\n???*", true);
  message.channel.send(smutembed);
}

if(command === `hentai`){
  if(!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  let {body} = await superagent.get(`https://nekos.life/api/lewd/neko`);
  let nekoEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Nya~")
    .setImage(body.neko);
  if(args[0] == "neko") message.channel.send(nekoEmbed);
  else{
  let {body} = await superagent.get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
  let hentaiemd = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Hentai is an art, after all.")
    .setImage(body.url);
  
  message.channel.send(hentaiemd)
  .catch(error => message.reply(`${redx} ${error}`));
}}

if(command === `dirtyquote`){
  if(!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  
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
  "\"Sex is like math, add the bed, subtract the clothes, divide the legs and pray you don't multiply\"",
  `"Ugh, it's so hot"
  "If you don't stop going on about how hot it is, I'm going to give you a reason to feel hot."`,
  `"Anything can be a dildo if you're brave enough."`
 ];

  let result = Math.floor((Math.random() * replies.length))
  message.channel.send(`*${replies[result]}*`);
}

if(command === `8ball`){
    if(!args[2]) return message.channel.send("Actually ask a question?");
    let replies = ["It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "For real? No",
    "Eh... maybe"];

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " asked—")
    .setThumbnail("https://findicons.com/files/icons/1700/2d/512/8_ball.png")
    .setColor("RANDOM")
    .addField("Question :question:", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
  }

if(command === `pick`){
    let opt = message.content.slice(7).trim().split(',');
    let result = Math.floor((Math.random() * opt.length));
    if(opt.length < 2) return message.channel.send("I need two options to decide. Commas used will split choices.");
    message.channel.send(`I pick... **${opt[result]}**`);
  }

{
    // yes
}

let dwsembed = new Discord.RichEmbed()
  .setTitle("Dog with Sins")
  .setColor("#000001")
  .setFooter("!?dws <selection>", "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png")
  .setThumbnail("https://i.imgur.com/yztZj9k.png")
  .setDescription("*Just some random shit to view any of my characters, lore n' shit*")
  .addField("Characters", "Travis Rilynar, Marlowe Rilynar, Aeztia, Pamaer, Ruben Ferrant, Jejus, Lyian Sato, Yannis Seifer, Roxuhn, Anahi Muñoz", true)
  .addField("Vehicles", "GT-GalaxyTruck, Gargoyle, Wildcat, CK, Nauti Buoy", true)
  .addField("Items", "Bizid, Left Hand of Jejus, Graveyard Grumble", true)
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
  .setTitle("Bizid")
  .setColor("#ac5846")
  .setFooter("FICTIONAL DRUG", "http://drawi.ru/pic/fd17e6c702f7b2bb.jpeg")
  .setThumbnail("https://i.imgur.com/p99ZnBd.jpg")
  .addField("Generic Name", "*Benzcylozankerzolam*", true)
  .addField("Route of Administration", "*Consumption, Direct Inhalation*", true)
  .addField("Chemical Formula", "*C19 H27 N20*", true)
  .addField("Drug Class", "*NMDA Receptor Antagonist | Dissociative Hallucinogen | Antidepressant | Arylcyclohexylamine*", true)
  .addField("Description", "*Benzcylozankerzolam—most commonly known as Z-bar, Pure Ivory, Zanneker, and Clarity; sold under the name of \"Bizid\"—is a synthetic drug made as an alternative to well-known hallucinogens such as Phencyclidine (PCP). Consistent demand and the rising popularity of drug has not only made a peak of hospitalized emergency room cases and leading arrests, it has also reached headline news at some point in 2010, leading to an immediate widespread of law enforcement actions.*", true)
  .addField("Process", "*Benzcylozankerzolam is first produced and processed in solid form which can then be crushed into a powdery substance; however, there are other alternatives such as—in liquid form—being molded into one kilogram bars, taking the shape of stored containers or, if done properly, even stored into sweet goods; in fact, sweet goods have been noted to be a popular method of concealing and/or administering Benzcylozankerzolam. One of the most distinct aspects of the drug is the ‘sweet’ odor that is emitted. Often described as being almost similar to candy in which some may find appealing.*", true);
  //.addField("Physical Appearance", "*The appearance of Zanneker0 can vary as it’s usually found from being processed into 1kg bars to even being disguised as a sweet good. (Most popular: Candy) It can be applied in beverages or in food products, however, it is often found in gummy candies. The weight of Zanneker0 can vary but never no more than 3lbs [1.4kg]. Due to its relatively small mass, it is easily concealable, but even the smallest amount of heat can make Zanneker0 emit an appealing, strong sweet odor which can prove difficult to hide.*", true);

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
  .addField("Status", "*Determinant*", true)
  .addField("Species", "*Human*", true)
  .addField("Height", "*5'9/175 cm/1.7 m*", true)
  .addField("Weight", "*130 lbs./59 kg*", true)
  .addField("Gender", "*Male*", true)
  .addField("Age", "*22*", true)
  .addField("Zodiac Sign", "*Scorpio*", true);
let aembed = new Discord.RichEmbed()
  .setTitle("Aeztia Lavender")
  .setColor("#46437b")
  .setFooter("OP Fantasy Character", "https://i.imgur.com/uOFLi1A.png")
  .setThumbnail("https://i.imgur.com/lCgNS6v.jpg")
  .addField("Status", "*Alive*", true)
  .addField("Species", "*Demon*", true)
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
  .addField("Species", "*Ōkami*", true)
  .addField("Height", "*6'2/188 cm/1.8 m*", true)
  .addField("Weight", "*160 lbs./73 kg*", true)
  .addField("Gender", "*Male*", true)
  .addField("Age", "*400 Quintillion*", true)
  .addField("Zodiac Sign", "*Unknown*", true)
  .addField("Description", "*An ōkami that has been also known as the \"Wanderer\". As with all other ōkami, Roxuhn preys and feeds on human victims.*", true)
  .addField(".", "Powers and Abilities", true)
  .addField("Decay", "*Possesses the ability to rapidy accelerate the age life of an object, person or any entity, serverely inflicting debilitating effects.* ***Especially deadly towards biological material***", true)
  .addField("Regeneration", "*As long as damage is not absorbed during the processes or has not been already dismembered, any wounds can completely heal in a matter of hours.*", true)
  .addField("Fangs", "*Canine-like teeth that are razor sharp. Enough to easily slice and tear through bare skin and flesh.*", true);
  
let axemurder = new Discord.RichEmbed()
  .setTitle("The Axe Murderer")
  .setDescription("```[Shaky breathing] I don't know what the fuck is going on, man... \n Shit has been happening—I... I think Tr—Travis is out of his mind! \nWhat the fuck has gotten into him!? ...I think it's the damn... drug... B—bizid. It's almost like bath salts but far more worse. \n[Low voice]Travis! It's me! \n [Long pause]...Oh god... TRAVIS NO——```");




{
// ▬▬▬▬▬▬▬▬▬▬▬▬
}

if(command === `dws`){
    if(args[0] == "bizid") return message.channel.send(zanembed);
    if(args[0] == "spacebar") return message.channel.send(spaceembed);
    if(args[0] == "gtgalaxytruck") return message.channel.send(galeembed);
    if(args[0] == "nautibuoy") return message.channel.send(nbembed);
    if(args[0] == "graveyardgrumble") return message.channel.send(ggembed);
    if(args[0] == "decomissionedbunker") return message.channel.send(dbembed);
    if(args[0] == "jejus") return message.channel.send(jembed);
    if(args[0] == "aeztia") return message.channel.send(aembed);
    if(args[0] == "travis") return message.channel.send(tembed);
    if(args[0] == "roxuhn") return message.channel.send(rembed);
    if(args[0] == "theaxemurderer") return message.channel.send(axemurder);
    message.channel.send(dwsembed);
}

{
// ▬▬▬▬▬▬▬▬▬▬▬▬
}

if(command === `pagetest`){
  let pages = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5', 'Section 6'];
  let page = 1; 
 
  const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setFooter(`Page ${page} of ${pages.length}`) 
    .setDescription(pages[page-1])
 
  message.channel.send(embed).then(message => { 
   
    message.react('⏪').then( r => { 
      message.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪'
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩'
     
      const backwards = message.createReactionCollector(backwardsFilter, { time: 240000 }); 
      const forwards = message.createReactionCollector(forwardsFilter, { time: 240000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--;
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`)
        message.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++;
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Page ${page} of ${pages.length}`)
        message.edit(embed) 
      })
   
    })
})};
 
if(command === `emoji`){
  let replies = [":hearts:", ":chocolate_bar:", ":cookie:", ":kissing_heart:", ":sweat_smile:", ":wink:", ":blush:", ":worried:"];
  let result = Math.floor((Math.random() * replies.length));
  
  if(message.author.id !== "362472426258300928")
    return message.channel.send("**NO.** You ain't Inkwell!");
    
    else
    message.channel.send(replies[result]);
}

  if(command === `fortune`){
    let replies = ["\"Dont mix foul words with your bad mood. You'll have many chances to change your mood, but rarely the chance to replace the words you spoke.\"",
    "\"Before you ask why someone hates you, ask yourself why you should care deeply.\"",
    "\"The fears we don't face become our limits.\"",
    "\"Obsessed is a word the lazy will use to describe the dedicated.\"",
    "\"If it's still on your mind, it is worth taking the risk.\"",
    "\"Apparently, when you treat people like they treat you, they get upset.\"",
    "\"Don't ruin a good today by thinking about a bad yesterday. It may not be easy, but it is best to let it go.\"",
    "\"Having a soft heart in a cruel world is absolute courage, not weakness.\"",
    "\"We all have ability. The difference is how we use it.\"",
    "\"Stop wait for the 'right time'. Time and tide wait for no one.\"",
    "\"It's far more better to be completely exhausted from the hard times which breed success than being well-rested from achieving nothing.\"",
    "\"They watch. They hate. Then they eventually copy.\"",
    "\"Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.\"",
    "\"If you really want it, you simply don't just give up.\"",
    "\"People say 'I never see you at the club', I reply 'I never see you at the bank.'\"",
    "\"He who buys what he does not need steals from himself\"",
    "\"Keep your cool. Don't let the little things break your happiness.\"",
    "\"The more informed you are, the less arrogant and aggressive you are\" —Nelson Mandela",
    "\"If you try something, you risk failure. If you don't try it at all, you ensure it.\"",
    "\"You can work hard, but if you don't work smart, you'll work for the rest of your life.\"",
    "\"The best teachers are those who show you where to look, but don't tell you what to see.\"",
    "\"Don't pray for an easy life. Pray for the strength to endure a difficult one.\" —Bruce Lee",
    "\"Refuse to lower your standards to accommodate those who refuse to raise theirs.\"",
    "\"If the plan doesn't work, change the plan but never the goal.\"",
    "\"If you can't get somebody off your mind, they're probably supposed to be there.\"",
    "\"Hurting someone can be as easy as throwing a stone in the sea. Do you have any idea how deep that stone can go?\"",
    "\"If you hate a person, then you're defeated by them.\"",
    "\"When anger rises, think of the consequences.\"",
    "\"As long as you're making progress, it does not matter how fast or how slow it is.\"",
    "\"Happiness is a choice. Life isn't about pleasing everybody.\"",
    "\"Weakness is a choice. It's up to you.\""];

    let result = Math.floor((Math.random() * replies.length))
    message.channel.send(`*${replies[result]}*`);
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
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription(message.guild.name)
    .setAuthor(`Owner: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, message.guild.owner.user.displayAvatarURL)
    .setColor("#15f153")
    .setThumbnail(sicon)
    //.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField("Server Established @", `${month}/${day}/${year}`, true)
    .addField("Server Region", message.guild.region, true)
    .addField("Server ID", message.guild.id, true)
    .addField("You joined @", message.member.joinedAt, true)
    .addField("Total Members", message.guild.memberCount, true)
    .addField("Human Users", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Bot Users", message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Total Roles", message.guild.roles.size, true);
    
    message.channel.send(serverembed);
  }

if(command === `purge`){
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${redx} Looks like you first need the following: ADMINISTRATOR`);
  if(isNaN(args[0])) return message.channel.send('**This ain\'t the movie purge. This is to remove 1-100 messages**');
  if(args[0] > 100) return message.channel.send('**You can only remove a maximum of 100 messages**');
 await message.channel.bulkDelete(args[0]).then(messages => message.channel.send(`${greencheck} **Removed \`${messages.size}/${args[0]}\` messages**`))
  .catch(error => message.reply(`${redx} ***${error}***`));
}


if(command === `botinfo`){
    let day = bot.user.createdAt.getDate()
    let month = 1 + bot.user.createdAt.getMonth()
    let year = bot.user.createdAt.getFullYear()
    let embed = {
      //"title": "My info x3",
      //"url": "https://discordapp.com",
      "color": 15721660,
      //"timestamp": "2018-04-21T01:28:06.959Z",
      "footer": {
        "icon_url": "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png",
        "text": "Running on Node JS and Discord.js v11.30"
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
        "icon_url": "https://cdn.discordapp.com/avatars/297931837400023041/6fc9d991ec25a82ca4633aaaba38073e.png?size=2048"
      },
      "fields": [
        {
          "name": "Full Username",
          "value": `${bot.user.username}#${bot.user.discriminator}`,
          "inline": true
        },
        {
          "name": "ID",
          "value": `${bot.user.id}`,
          "inline": true
        },
        {
          "name": "Made @",
          "value": `${month}/${day}/${year}`,
          "inline": true
        },
        {
          "name": ":map: Guild Count",
          "value": `${bot.guilds.size}`,
          "inline": true
        },
        {
          "name": "Command Count",
          "value": "36 Commands (total)",
          "inline": true
        },
        {
          "name": ":floppy_disk: CPU Usage",
          "value": `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB \nTotal: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
          "inline": true
        },
        {
          "name": `${bot.user.username} System Time`,
          "value": `${prettyMs(osu.processUptime())}`,
          "inline": true
        },
        {
          "name": "Datacentre Server Time",
          "value": `${prettyMs(osu.sysUptime())}`,
          "inline": true
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
  }
  
  
if(command === `help`){
     if(args[0] == "dws") return message.channel.send(`
     Usage: !?dws <any> 
 | *Character commands only use the first name.* \`ex. !?dws travis\` \`!?dws ruben\` 
 | *All subcommands are lowercased and should not be spaced* \`ex. !?dws gtgalaxytruck\` \`!?dws nautibuoy\`.`);
     
     if(args[0] == "pick") return message.channel.send(`
     Out of the choices you supply me, I will pick only **one.** 
 | Usage: !?pick <any> <any> 
 | All commas used **will split choices**.`);
     
     if(args[0] == "ping") return message.channel.send("Checks the bot's response time. The lower the value, the more quicker the response is.*");   
     
     if(args[0] == "leave") return message.channel.send("I'll leave this server if necessary.");
     
     if(args[0] == "eval") return message.channel.send("Executes the arbitrary Javascript library. \n**Use with caution. This is an extremely powerful and dangerous command if used improperly or maliciously.**");
     
     if(args[0] == "shutoff") return message.channel.send("All of my proccesses are immediately terminated upon execution.");
     
     if(args[0] == "reload") return message.channel.send("Refreshes all commands in located in the directory: ./botsettings.json and ./bot.js");

     if(args[0] == "namegen") return message.channel.send("I will get a randomly generated name that includes it's origin.");

     if(args[0] == "calc") return message.channel.send('I will solve a mathematic expression. \nUsage: !?calc <valid expression>');

     if(args[0] == "rolldice") return message.channel.send(`Roll a die with any amount of sides inputted or defaults to 6 if none. \nUsage: !?rolldice <number>`);
     
     if(args[0] == "smut") return message.channel.send(`
     A collection of stories that are most definitely NSFW. 
 | Usage: !?smut <story> 
 | *Stories cannot be spaced out; will not work* ex. !?smut tradechristmasspecial
 | :rewind: Previous Page
 | :fast_forward: Next Page`);
     
     if(args[0] == "hentai") return message.channel.send(`
     I'll bring up some of those anime titties or whatever :o \n**Or**, *Nya~* I'll bring up lewd and NSFW images of nekos. \`!?hentai neko\``);
     
 if(args[0] == "succ") return message.channel.send(`
     Give something *or someone* the oral relief. 
 | Usage: !?succ <any>`);
     
     if(args[0] == "dirtyquote") return message.channel.send("I'll say something... dirty.");
     
     if(args[0] == "fliptext") return message.channel.send(`
     It's like repeating what you say but upside down :o 
 | Usage: !?fliptext <any>`);
     
     if(args[0] == "fortune") return message.channel.send("I'll say some big facts.");
     
     if(args[0] == "rps") return message.channel.send(`
     We shall duel in a match of Rock, Paper, Scissors. 
 | Usage: !?rps <rock|paper|scissors> or !?rps <r|p|s>`);
     
     if(args[0] == "docrefs") return message.channel.send("I'll send links that lead to unofficial, but documented, Discord API libraries.");
     
     if(args[0] == "mstrain") return message.channel.send(`
     I will send a database of marijuana strains from three branches: Sativa, Indica, and Hybrid. I can also send lists of flavors and effects.
 | *Can only search strains with ID*
 | Usage: !?mstrain <id>
 | Usage: !?mstrains flavors`);
    // if(args[0] == "") return message.channel.send("");
    let embed = {
         "title": "Here x3",
        //"url": "https://discordapp.com",
        "color": 13112340,
        //"timestamp": "2018-04-21T01:28:06.959Z",
        "footer": {
          "icon_url": "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png",
          "text": "You can type help on certain commands."
        },
        "thumbnail": {
          "url": `https://onlinevapour.com/wp-content/uploads/2017/08/orange-question-mark-icon-png-clip-art-30-copy.png` 
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
            "name": `${checkeng} Developer`,
            "value": "shutoff, reload, eval, listenp, watchp, gamep, setavat, leave, invite, status, cpu, jsontest",
            "inline": true
          },
          {
            "name": " :package: Random and Util",
            "value": "serverinfo, botinfo, ping, docrefs, dws, listemotes, avatar, urban, pick, fortune, mstrain, namegen, calc"
          },
          {
            "name": " :wrench: Moderation",
            "value": "purge, kick, ban, giverole, removerole"
          },
          {
            "name": `Fun ${bmo} ${pikagroove}`,
            "value": "say, cat, catfact, dog, dogfact, fox, 8ball, flipcoin, rolldice, dadjoke, clapify, gaymeter, fliptext, rps, meme"
          },
          {
            "name": " :eggplant: NSFW",
            "value": "dirtyquote, fucc, succ, smut, hentai",
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

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

bot.login(botsettings.token);
