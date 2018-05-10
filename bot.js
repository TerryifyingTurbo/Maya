const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
const ytdl = require("ytdl-core");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
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

if(message.content === ";T" || (message.content === ";;T") || (message.content === ";;;T") || (message.content === ";;;;T") || (message.content === "kinky") || (message.content === "spicy")){
  message.reply( ";;T");
}
  
  let prefix = botsettings.prefix;
  if(!message.content.startsWith(`${prefix}`)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Aye! Chill. Take it easy, yeah?")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

  if(command === `${prefix}shutdown`){
  if(message.author.id !== "297931837400023041")
  return message.channel.send("You ain't the creator!");
  
  else

  if(message.author.id == "297931837400023041")
  await message.channel.send("I'm sleep.");
  await bot.destroy();
  process.exit();
  console.log("Bot killed");
  }

  if(command === `${prefix}reload`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("You ain't the creator!");
    else
  
    // Reload ALL commands listed.
    
  if(message.author.id == "297931837400023041")
    await message.channel.send("**Reloading.** :arrows_counterclockwise:")
    .then(message => bot.destroy());
    
    await bot.login(botsettings.token)
    
    message.channel.send("Reloaded. :arrow_forward:");
  }

  if(command === `${prefix}invite`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("I'm not allowed to give out my invite code to strangers");
    let invlink = `https://discordapp.com/oauth2/authorize?client_id=417517654174334976&permissions=8&scope=bot`
    message.channel.send(`Here you go, boss x3
    ${invlink}`)
  }

  if(command === `${prefix}watchpresence`){
    let status = args.join(' ');
    if(message.author.id !== "297931837400023041") return message.channel.send("***Only my creator can change what I am watching!***");
    if(!status) return message.channel.send("Do I watch the void? What *or who* am I supposed to watch?")
    await bot.user.setActivity(`${status}`, {type: "WATCHING"})
    .catch(error => message.reply(`I'm not watching that because of __***${error}***__`));
    message.channel.send(`Now watching: **${status}**`);
  }

  if(command === `${prefix}gamepresence`){
    let status = args.join(' ');
    if(message.author.id !== "297931837400023041") return message.channel.send("***Only my creator can change what I am playing!***");
    if(!status) return message.channel.send("Do I play with someones feelings or something? What *or who* am I supposed to play?")
    await bot.user.setActivity(`${status}`, {type: "PLAYING"})
    .catch(error => message.reply(`I'm not playing that because of __***${error}***__`));
    message.channel.send(`Now playing: **${status}**`);
  }

  if(command === `${prefix}listenpresence`){
    let status = args.join(' ');
    if(message.author.id !== "297931837400023041") return message.channel.send("***Only my creator can change what I am listening to!***");
    if(!status) return message.channel.send("Do I listen to someones bullshit or something? What *or who* am I supposed to listen to?")
    await bot.user.setActivity(`${status}`, {type: "LISTENING"})
    .catch(error => message.reply(`I'm not listening to that because of __***${error}***__`));
    message.channel.send(`Now listening: **${status}**`);
  }
  
  if(command === `${prefix}devhelp`){
    let devembed = new Discord.RichEmbed()
    .setDescription("Developer")
    .setColor("RANDOM")
    .addField("Commands", "shutdown, reload, eval, listenpresence, watchpresence, gamepresence, setavat, leave, invite", true);
    
    message.channel.send(devembed);
  }
  
  if(command === `${prefix}kick`){
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.reply("You think this is soccer? ***Who do I kick***");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**NO.** You don't have the ability to delete messages");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Not allowed to kick the ones who have the ability to delete messages");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

if(command === `${prefix}ping`){
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`:ping_pong: ***Pong!***  x3 
Response :satellite_orbital: **${m.createdTimestamp - message.createdTimestamp}ms.** 
API Response :satellite_orbital: **${Math.round(bot.ping)}ms.**`)
  }

  if(command === `${prefix}leave`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("**NO.** Only my creator can do that");
    
    else
    
    await message.channel.send("Aight', later Boss!");
    message.guild.leave();
  }

  if(command === `${prefix}flipcoin`){
    
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

if(command === `${prefix}rolldice`){
  let dice = Math.floor(Math.random() * 5 + 1);
  message.channel.send("You rolled a :game_die:" + ` ${dice}`);
}

if(command === `${prefix}gaymeter`){
  let metre = Math.floor(Math.random() * 99 + 1);
  let thing = args.join(" ");
  if(!thing) return message.channel.send(`Since you didn't choose anything or anyone, I'd say you're about **${metre}%** gay indeed.`)
  message.channel.send(`${thing}? I'd say about **${metre}%** gay indeed.`)
}

  if(command === `${prefix}say`) {

    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Say what? x3")
    message.channel.send(sayMessage);
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
//message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  }

if(command === `${prefix}cat`){
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);
  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Kitty :0")
  .setImage(body.file);
  message.channel.send(catembed);
}

if(command === `${prefix}dog`){
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let dogembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("A dog :0")
  .setImage(body.url);
  message.channel.send(dogembed);
}

if(command === `${prefix}catfact`){
 let {body} = await superagent
 .get(`https://catfact.ninja/fact`);
 let factembed = new Discord.RichEmbed()
 .setColor("RANDOM")
 //.setTitle("It's true that...")
 .addField("It's true that...", body.fact);
 //.addField("Response Time:", `${Math.round(bot.ping)}ms.`);
 message.channel.send(factembed);
}

if(command === `${prefix}dadjoke`){
  let {body} = await superagent
  .get(`https://icanhazdadjoke.com/slack`);

  let o = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("**" + body.attachments.map(a => a.text) + "**");

  message.channel.send(o);
}

if(command === `${prefix}clapify`){
  let randomizeCase = word => word.split('').map(c => Math.random() > 0.4 ? c.toUpperCase() : c.toLowerCase()).join('');
  if (args.length < 1) return message.channel.send("***Give:clap:me:clap:something:clap:to:clap:on***");
  message.channel.send(args.map(randomizeCase).join(':clap:'));
}

if(command === `${prefix}succ`){

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

if(command === `${prefix}fucc`){
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

if(command === `${prefix}smut`){
  let smutembed = new Discord.RichEmbed()
  .setTitle("Lemon-Scented Smut")
  .setColor("#d68998")
  .setThumbnail("https://i.imgur.com/dCJlKkG.jpg")
  .setFooter("!?smut<specifc selection>", "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png")
  .addField("The Holy List of Story Sins", "*placeholder story, placeholder story (yes await until added)*", true);
  message.channel.send(smutembed);
}
  
if(command === `${prefix}8ball`){
    if(!args[2]) return message.channel.send("Actually ask a question?");
    let replies = ["Yes.", "No.", "Maybe.", "Ask some other time.", "Cannot say now.", "Absolutely.", "Without a doubt.", "For real? No."];

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName + " asked...")
    .setColor("RANDOM")
    .addField("Question :8ball:", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
  }


if(command === `${prefix}dws`){
    let embed = {
      "title": "Dog with Sins",
      //"url": "https://discordapp.com",
      "color": 1156136,
      //"timestamp": "2018-04-21T01:28:06.959Z",
      "footer": {
        "icon_url": "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png",
        "text": "!?dws<selection>"
      },
      "thumbnail": {
        "url": `https://i.imgur.com/yztZj9k.png` 
      },
      // "image": {
      //   "url": "http://icecream.me/uploads/aadb1b46d8bc42d40a4a4f77a9fec4ac.png"
      // },
      // "author": {
      //   "name": "Called for help...",
      //   //"url": "https://discordapp.com",
      //   //"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
      // },
      "fields": [
        {
          "name": "Intro",
          "value": "Just some random shit to view any of my characters, lore n' shit"
        },
        {
          "name": "Characters",
          "value": "Travis Rilynar, Marlowe Rilynar, Aeztia, Pamaer, Ruben Ferrant, Jejus, Lyian Sato, Yannis Seifer, Roxuhn"
        },
        {
          "name": "Vehicles",
          "value": "GT-GalaxyTruck, Gargoyle, Wildcat, CK, Nauti Buoy"
        },
        {
          "name": "Items",
          "value": "Zanneker0, Bizid, Left Hand of Jejus, Graveyard Grumble"
        },
         {
           "name": "Journal n' Documentation",
           "value": "'Tyrexia?' (#1), 'That kid, Vortex?', 'Axe Murderer', Note #4, 'Termination Order'"
        },
        {
          "name": "Misc n' Shit",
          "value": "Entity#, Dark Areas, SpaceBar, Decommissioned Bunker"
        },
      ]
    };
    message.channel.send({ embed });
}

if(command === `${prefix}dwszanneker0`){
  let embed = {
    "title": "Zanneker0",
    //"url": "https://discordapp.com",
    "color": 8069462,
    //"timestamp": "2011-04-21",
    "footer": {
      "icon_url": "http://drawi.ru/pic/fd17e6c702f7b2bb.jpeg",
      "text": "Highly addictive"
    },
    "thumbnail": {
      "url": `https://i.imgur.com/p99ZnBd.jpg` 
    },
    // "image": {
    //   "url": "http://icecream.me/uploads/aadb1b46d8bc42d40a4a4f77a9fec4ac.png"
    // },
    // "author": {
    //   "name": "Called for help...",
    //   //"url": "https://discordapp.com",
    //   //"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    // },
    "fields": [
      {
        "name": "Overview",
        "value": "*placeholder; need to revise*", 
      },
      {
        "name": "Physical Appearance",
        "value": "*The appearance of Zanneker0 can vary as it’s usually found from being processed into 1kg bars to even being disguised as a sweet good. (Most popular: Candy) It can be applied in beverages or in food products, however, it is often found in gummy candies. The weight of Zanneker0 can vary but never no more than 3lbs [1.4kg]. Due to its relatively small mass, it is easily concealable, but even the smallest amount of heat can make Zanneker0 emit an appealing, strong sweet odor which can prove difficult to hide.*",
     }
    ]
  };
  message.channel.send({ embed });
}



if(command === `${prefix}dwsspacebar`){
  let embed = {
    "title": "SpaceBar",
    //"url": "https://discordapp.com",
    "color": 690351,
    //"timestamp": "2011-04-21",
    "footer": {
      "icon_url": "http://www.yourcts.org/wp-content/uploads/2018/02/icon-residential.png",
      "text": "Safe House"
    },
    "thumbnail": {
      "url": `https://i.imgur.com/6XlvXmY.jpg` 
    },
    // "image": {
    //   "url": "http://icecream.me/uploads/aadb1b46d8bc42d40a4a4f77a9fec4ac.png"
    // },
    // "author": {
    //   "name": "Called for help...",
    //   //"url": "https://discordapp.com",
    //   //"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    // },
    "fields": [
      {
        "name": "Overview",
        "value": "*A medium-sized bar in literal space, on the Moon. Somehow built mysteriously and is currently owned by Jesse Green and Travis Rilynar (Co-Owner). It is only accessible by these two as they carry the proper key and GT-GalaxyTruck for entry. There are multiple rooms throughout the entire perimeter, some of them being concealed such as Jesse's 'Doggo' cabinet and Travis's secured locker.*",
      },
      {
        "name": "Appearance",
        "value": "*The SpaceBar is no ordinary bar; the building itself is less than 45 x 15ft. Because it is on the Moon and in outer space, all windows and doors are air-locked. A 35+ Soundtrack playlist of EDM available for playing, the bar contains a surrounding counter in the centre. Behind the counter lies wine racks, signature displays, shelves of ingredients and the control panel to the lighting system. The decor of the SpaceBar is meant to be set to give off a nightclub atmosphere; a strip dance pole which is located near the centre to provide a 'good show'. The maximum occupancy of the bar is estimated to be about 150 people. A large game room is also included within the bar and is located northeast of the entryway. Includes, but not limited to: Air hockey tables, pool game tables, classic darts, and the arcade game machines from the 90s.*",
     }
    ]
  };
  message.channel.send({ embed });
}

if(command === `${prefix}dwsgtgalaxytruck`){
  let embed = {
    "title": "GT-GalaxyTruck",
    //"url": "https://discordapp.com",
    "color": 431330,
    //"timestamp": "2011-04-21",
    "footer": {
      "icon_url": "http://aukavinna.is/wp-content/uploads/2017/02/iconcar_2398746577.png",
      "text": "Vehicle"
    },
    "thumbnail": {
      "url": `https://i.imgur.com/qp9f9tn.jpg?1` 
    },
    // "image": {
    //   "url": "http://icecream.me/uploads/aadb1b46d8bc42d40a4a4f77a9fec4ac.png"
    // },
    // "author": {
    //   "name": "Called for help...",
    //   //"url": "https://discordapp.com",
    //   //"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    // },
    "fields": [
      {
        "name": "Top Speed",
        "value": "*Mach 1/767 mph/1234 kph*",
        "inline": true
      },
      {
        "name": "0-60",
        "value": "*1.7 seconds*",
        "inline": true
      },
      {
        "name": "MPG",
        "value": "*3*",
        "inline": true
      },
      {
        "name": "Engine",
        "value": "*9.7L V8 Duramax*",
        "inline": true
      },
      {
        "name": "Curb Weight",
        "value": "*3300 lbs/1497 kg*",
        "inline": true 
      },
      {
        "name": "Layout",
        "value": "*AWD, Front Engine*",
        "inline": true
      },
      {
        "name": "Overview",
        "value": "*A signature vehicle that has a custom galaxy wrap (hence the name) It is the only vehicle that is used to gain access to the SpaceBar, which is located on the moon." + 
        " Though it is registered under the names of Travis Rilynar and Jesse Green, it is unknown when exactly the Galaxy Truck was manufactured. The five-seater truck has been modified to sustain the extreme atmospheric pressure, speed, and temperature*",
      },
      {
        "name": "Appearance",
        "value": "*Equipped with military-grade, high-end materials: Bullet-resistant glass, reinforced carbon fiber plating, and a hardened drivetrain." + 
        " This off-road, five-seater also has an elegant wrap that glows. The interior is custom built: Motorsport racetrack seats with harnesses and steering wheel, UV-resistant tinted windows, 8ball gear shifter, and a fuzzy dashboard with a Hawaiian girl bobble-head.*",
     },
      {
        "name": "Performance",
        "value": "*Offers extremely poor power steering due to its extremely cumbersome curb weight: 3300lbs. [1497kg]. This can be a potential hazard, especially when achieving speeds of Mach 1." + 
        " With only 3 MPG, this makes it one of the WORST in fuel efficiency as it burns with a V8 Duramax 9.7L, outputting a 0–60 in 1.7 seconds. Most of its acceleration power is placed on the wheels themselves, where the drivetrain is an all-wheel drive (AWD) Despite its horrible weight, the speed significantly makes that factor up when its top speed is almost equivalent to a Boeing jet: 767mph [1234kph]*"
      }
    ]
  };
  message.channel.send({ embed });
}
// .addField(" ","* *", true)

if(command === `${prefix}dwsnautibuoy`){
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
  .addField("Appearance","*placeholder test; huge ass boat with bright accent purple*", true);

  message.channel.send(nbembed);
}

if(command === `${prefix}dwsgraveyardgrumble`){
  let ggembed = new Discord.RichEmbed()
  .setTitle("Graveyard Grumble")
  .setColor("#7d2e3e")
  .setFooter("Signature Beverage")
  //.setThumbnail()
  .addField("Overview", 
  "*This coffin-shaped bottle is made of translucent bloodshot red glass. The taste is almost described as strong and sour with a foul aftertaste." + 
  " It has a long neck, stands about nine inches tall, and it has no label other than it displaying a warning: 'So strong it's something to DIE FOR'.*", true);
  message.channel.send(ggembed);
}

if(command === `${prefix}dwsdecommissionedbunker`){
  let dbembed = new Discord.RichEmbed()
  .setTitle("Decommisssioned Bunker")
  .setColor("#d3b385")
  .setFooter("Safe House", "http://www.yourcts.org/wp-content/uploads/2018/02/icon-residential.png")
  .setThumbnail("https://i.imgur.com/7EG1emR.jpg")
  .addField("Manufacture Date", "1944", true)
  .addField("Bunker Size", "155,000sq ft²", true)
  .addField("Overview", "*A condemned bunker now used as the headquarters/hideout of the organization: Yo Ouila*", true)
  .addField("Description", "*Includes a corridor that leads to the armory roomn, garage, control room, and conference room.*", true);
  
  message.channel.send(dbembed);
}

if(command === `${prefix}dwsjejus`){
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
  message.channel.send(jembed);
}

if(command === `${prefix}dwsaeztia`){
  let aembed = new Discord.RichEmbed()
  .setTitle("Aeztia Lavender")
  .setColor("#46437b")
  .setFooter("Fantasy Character", "https://i.imgur.com/uOFLi1A.png")
  .setThumbnail("https://i.imgur.com/lCgNS6v.jpg")
  .addField("Status", "*Alive*", true)
  .addField("Height", "*5'5/165 cm/1.6 m*", true)
  .addField("Weight", "*120 lbs./54 kg*", true)
  .addField("Gender", "*Female*", true)
  .addField("Age", "*99 Googolplexian*", true)
  .addField("Zodiac Sign", "*Unknown*", true)
  .addField("Overview", "*Mischievous demon who uses her powers to manipulate others for personal gain and advantages.*", true);
  // .addField("▬▬▬▬▬▬▬▬▬▬▬▬", "Special Abilities", true)
  // .addField("Hypnosis", "*Gain control of a person, animal, and other entities and fully manipulate the victim to any extent or desire.*");
  // "*type* __*more*__ *for more info*"
  await message.channel.send(aembed)
  message.channel.send("*type* `more` *for more info or* `cancel` *to back out*");
  if(message.content.startsWith("more")){
   let aembed2 = new Discord.RichEmbed()
   .setTitle("Aeztia Lavender (Con.)")
   .setColor("#46437b")
   .addField("▬▬▬▬▬▬▬▬▬▬▬▬", "Special Abilities", true)
   .addField("Hypnosis", "*Gain control of a person, animal, and other entities and fully manipulate the victim to any extent or desire.*", true);
   message.channel.send(aembed2)
  }
  else if(message.content.startsWith("cancel")){
    return message.channel.send("*Cancelled.*");
  }
}
  


if(command === `${prefix}dirtyquote`){
    let replies = ["I'm straight, but hey, $20 is $20.", 
    "It's either ass or gas. Nobody rides for free",
    "Mm, no princess, can't stop won't stop ;D",
    "You must be my favorite car because I wanna put you into overdrive~",
    "My tongue could tease you more than my words can~",
    "Make me -3-",
    "I love calling you a good girl because we both know you aren't~",
    "You can cover your mouth all you want, I'm still gonna make you scream~",
    "PUSSY, Push.. Until.. She.. Screams.. Yess~",
    "Roses are red, Foxes are clever, I like your butt, let me touch it forever.",
    "My mind is a dirty place and I love having you in it~",
    "You know what would look good on me? You.",
    "Every beauty needs a beast~",
    "Sex is not the answer. Sex is the question, yes is the answer.",
    "All these drugs, but I still wanna do you.",
    "It's not that I'm horny all the time. It's just that you're always fucking sexy~",
    "Your pants. They bother me, take them off.",
    "The best sex is when you don't have to worry about how loud you are",
    "You may have a bad mouth but you can sure do great things with it~",
    "Moanday, Tongueday, Wetday, Thirstday, Freakday, Sexday, Suckday.",
    "Roses are red, nuts are round, skirts are up, panties are down, belly to belly, skin to skin, when it's stiff, **stick it in!**",
    "Your face would look better between my legs~",
    "I wanna do bad things to you~",
    "I just want you to be happy... and naked as well.",
    "Spank me. It's the only way I'll learn~",
    "It may be between your legs, but it belongs to me. **Understand**?",
    "I'd look so good on you right about now.",
    "Naughty or nice? I can do both.",
    "I get turned on when you tell me how much you want me~",
    "Let's misbehave~",
    "I know I'm a handful, but that's what you got two hands for.",
    "I licked it, it's mine now.",
    "Sex is like math, add the bed, subtract the clothes, divide the legs and pray you don't multiply"
  ];

    let result = Math.floor((Math.random() * replies.length))
    message.channel.send(replies[result]);
  }
 
if(command === `${prefix}emoji`){
  let replies = [":hearts:", ":chocolate_bar:", ":cookie:", ":kissing_heart:", ":sweat_smile:", ":wink:", ":blush:", ":worried:"];
  let result = Math.floor((Math.random() * replies.length));
  
  if(message.author.id !== "362472426258300928")
    return message.channel.send("**NO.** You ain't Inkwell!");
    
    else
    message.channel.send(replies[result]);
}

  if(command === `${prefix}fortunecookie`){
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
  if(command === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.reply("Yeah, banned the air. ***Who do I ban***");
    let bReason = args.join(" ").slice(22);
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

  if(command === `${prefix}serverinfo`){

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

  if(command === `${prefix}purge`){
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



  if(command === `${prefix}botinfo`){
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
          "value": `${bot.user.username}#${bot.user.discriminator}`
        },
        {
          "name": "Made on",
          "value": `${bot.user.createdAt}`
        },
        {
          "name": "I have...",
          "value": "29 Commands (total)"
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
  
  if(command === `${prefix}help`){
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
          "name": "Called for help...",
          //"url": "https://discordapp.com",
          //"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
        },
        "fields": [
          {
            "name": "Random",
            "value": "serverinfo, botinfo, ping, devhelp, dws"
          },
          {
            "name": "Moderation",
            "value": "purge, kick, ban, giverole, removerole"
          },
          {
            "name": "Fun",
            "value": "say, cat, catfact, dog, 8ball, fortunecookie, flipcoin, rolldice, dadjoke, clapify, gaymeter"
          },
          {
            "name": " :warning: NSFW",
            "value": "dirtyquote, fucc, succ, smut",
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
