const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
const ytdl = require("ytdl-core");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const leetspeak = require("leetspeak");
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

  bot.user.setActivity("out for trouble!", {type: "WATCHING"});

  //bot.user.setGame("<Activity>!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm"){
    return message.reply("Ew, not in my DMs. Go to a server that **I'm in**.");
  }
  
  const ayy = bot.emojis.get("426999753830825995");
  
  if(message.content === "ayy"){
  const ayy = bot.emojis.find("name", "ayy");
  message.channel.send(`${ayy} Lmao`);
}

const intensefear = bot.emojis.get("406790609035329538");

if(message.content === "D:"){
  const instensefear = bot.emojis.find("name", "intensefear");
  message.channel.send(`${instensefear}`);
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

  if(command ===`${prefix}devhelp`){
    let devembed = new Discord.RichEmbed()
    .setDescription("Developer")
    .setColor("RANDOM")
    .addField("Commands", "shutdown, reload, eval, gamepresence, setavat, leave, invite")
    
    message.channel.send(devembed);
  }
  
  if(command === `${prefix}kick`){

    //!kick @daeshan askin for it

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

  if(command === `${prefix}say`) {

    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Say what? x3")
    message.channel.send(sayMessage);
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
//message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
  }

if(message.content === ";T" || (message.content === "kinky") || (message.content === "spicy") || (message.content === ";;T") || (message.content === ";;;T") || (message.content === ";;;;T")){
  message.reply( ";;T");
}

if(command ===`${prefix}cat`){
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);

let catembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Kitty :0")
.setImage(body.file);
message.channel.send(catembed);
}

if(command ===`${prefix}dog`){
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
  message.channel.send(`***${message.author.username}***` + ` *${Posreplies[Posresult]} and puts that mouth of theirs to better use by giving* `+ `*${sayMessage}*` + ` ***${Preplies[Presult]} succ***` + ` *${Treplies[Tresult]}.*` + " *They seem to have*" + ` ***${Ureplies[Uresult]}***`);

}
if(command === `${prefix}makeme`){

  const sayMessage = args.join(" ");
  let Ureplies = ["loved it", "enjoyed it", "hates it", "wants more", "wants it from someone else instead", "liked it", "secretly like it", "wants a break from it"];
  let Treplies = ["an hour later", "a couple of minutes later", "after a really long time", "for about half an hour", "after a while", "a moment after"];
  let Preplies = ["the best", "the sloppiest", "the mad", "a decent", "an aight'", "the shittiest", "the vacuum seal", "one helluva", "the most painful", "the 'gawk-gawk' combo", "the no-hand", "the double-hand twist"];
  let Posreplies = ["get on their knees", "crave it", "beg for it"];

  let Uresult = Math.floor((Math.random() * Ureplies.length)); //for the reply options
  let Tresult = Math.floor((Math.random() * Treplies.length)); //for the time options
  let Presult = Math.floor((Math.random() * Preplies.length)); //for the power options
  let Posresult = Math.floor((Math.random() * Posreplies.length)); //for the position options

  if(!sayMessage) return message.channel.send(`${message.author.username}, you didnt make anyone *or anything*  give you the succ...`)
  message.channel.send(`***${message.author.username}***` + " *makes*" + ` *${sayMessage}*` + ` ***${Posreplies[Posresult]}***` + ` *and forces them to give* ***${Preplies[Presult]} succ***` + ` *${Treplies[Tresult]}.*` + ` *One can assume that the one who forced ${sayMessage}*` + ` ***${Ureplies[Uresult]}***`);
}

if(command ===`${prefix}fucc`){
  const sayMessage = args.join(" ");
  let Ureplies = ["loved it", "enjoyed it", "hate it", "didn't like it" ,"wanted more", "needed more" ,"liked it", "secretly liked it", "want a break from it for now", "are exhausted and relieved"];
  let Treplies = ["an exhausting hour later", "a really long time", "half an hour later", "a while", "a moment later", "quite a while"];
  let Preplies = [];
  let Posreplies = [`***${sayMessage}*** *bends over for* ***${message.author.username}***`, 
                    `***${sayMessage}*** *goes on all fours for* ***${message.author.username}***`,
                    `***${sayMessage}*** *angles those hips of theirs up and spreads their legs far and wide for* ***${message.author.username}***`,
                    ` *Face down, ass up!* ***${sayMessage}'s behind*** *is claimed by* ***${message.author.username}***`,
                    `***${message.author.username}*** *gets aggressive and pins down* ***${sayMessage}*** *,taking completele control over them*`,
                    `***${message.author.username}*** *is quite kinky and teases* ***${sayMessage}*** *with foreplay*`];

  let Uresult = Math.floor((Math.random() * Ureplies.length)); //for the end reaction options
  let Tresult = Math.floor((Math.random() * Treplies.length)); //for the time options
  let Presult = Math.floor((Math.random() * Preplies.length)); //for the power options
  let Posresult = Math.floor((Math.random() * Posreplies.length)); //for the position options

  if(!sayMessage) return message.channel.send(`${message.author.username} must've went to go fuck themselves or something since they didn't say who otherwise`);
  message.channel.send(`${Posreplies[Posresult]}` + " *and then the two have some 'fun' for* " + `***${Treplies[Tresult]}.***` + ` *It's safe to assume that they* ***${Ureplies[Uresult]}.***`);
}

  
if(command === `${prefix}8ball`){
    if(!args[2]) return message.channel.send("Actually ask a question?");
    let replies = ["Yes.", "No.", "Maybe.", "Ask some other time.", "Cannot say now.", "Absolutely.", "Without a doubt.", "For real? No."];

    let result = Math.floor((Math.random() * replies.length))
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag + " asked...")
    .setColor("#FF9900")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);
  }

  if(command === `${prefix}charq`){
let sayMessage = args.join(" ");
let question = ["What's your nationality?",
"What is your **worst** phobia?",
"What is your gender *or sex* ***or both?***",
"How old do you appear? **True** age?",
"What is your height?",
"Any enemimes? If so, when, how, and why?",
"Any allies/friends? If so, when, how and why?",
"Are you **close** with someone *or something?*",
"What are your morals? Why?"];

let result = Math.floor((Math.random() * question.length))

if(!sayMessage) return message.channel.send(question[result]);

message.channel.send(sayMessage);
message.delete().catch(O_o=>{}); 
  }
if(command ===`${prefix}charq help`){
  message.channel.send("`!?charq <args, question(s)>`",
"If user does not supply question, a random one will be generated instead");
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

  if(command ===`${prefix}coinflip`){
    
    let replies = ["Heads.", "Tails."];
    
    let result = Math.floor((Math.random() * replies.length));
    
    message.channel.send(replies[result]);
}
 
if(command ===`${prefix}emoji`){
  let replies = [":hearts:", ":chocolate_bar:", ":cookie:", ":kissing_heart:", ":sweat_smile:", ":wink:", ":blush:", ":worried:"];
  let result = Math.floor((Math.random() * replies.length));
  
  if(message.author.id !== "362472426258300928")
    return message.channel.send("**NO.** You ain't Inkwell!");
    
    else
    message.channel.send(replies[result]);
}

  if(command ===`${prefix}fortunecookie`){
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

  if(command === `${prefix}giverole`){
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**NO.** You don't have the ability to give or remove roles!");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]); 
    if(!rMember) return message.reply("Yeah, let me just give a role to thin air. ***Who do I give a role to***");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("So what role do I add-");
    let gRole = message.guild.roles.find(`name`,role);
    if(!gRole) return message.reply("You either spelled it wrong or that role doesn't exist");
  
    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role");
    await(rMember.addRole(gRole.id));
    return message.reply (`Added ***${gRole.name}.***`);
  }

  if(command === `${prefix}removerole`){
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("**NO.** You don't have the ability to give or remove roles!");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Yeah, I took the air's role away. ***Who do I take a role away from***");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("So what role do I take away-");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("You either spelled it wrong or that role doesn't exist");
  
    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rMember.removeRole(gRole.id));
    return message.reply (`Removed ***${gRole.name}.***`);
  }

  if(command === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Here's what I found...")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Made on", message.guild.createdAt)
    .addField("You joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(command === `${prefix}purge`){
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("What do you think this is, the movie? No, purge 2 or more messages.");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
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
          "value": `${bot.user.username}` + `#${bot.user.discriminator}`
        },
        {
          "name": "Made on",
          "value": `${bot.user.createdAt}`
        },
        {
          "name": "I have...",
          "value": "24 Commands (total)"
        },
        {
          "name": "WIP",
          "value": `${ayy} Work in progress.`,
          "inline": true
        },
        {
          "name": "Warning",
          "value": ":warning: Commands may be unstable",
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
      //let botembed = new Discord.RichEmbed()
      
      // .setDescription("Here are my commands so far x3")
      // .addField("Random Commands","serverinfo, botinfo, ping, devhelp")
      // .addField("Moderator","purge, kick, ban, giverole, removerole")
      // .addField("Fun", "say, cat, catfact, dog, 8ball, fortunecookie, coinflip")
      // .addField("NSFW", "Classified, Classified, Classified, Classified", true)
      // .setFooter("On certain cmds, you can type help for them", true);
      
      // message.channel.send(botembed);
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
          "url": `https://facilities.uw.edu/files/media/question-mark.png` 
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
            "value": "serverinfo, botinfo, ping, devhelp"
          },
          {
            "name": "Moderation",
            "value": "purge, kick, ban, giverole, removerole"
          },
          {
            "name": "Fun",
            "value": "say, cat, catfact, dog, 8ball, fortunecookie, coinflip"
          },
          {
            "name": "NSFW",
            "value": "Classified, Classified, Classified, Classified",
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
