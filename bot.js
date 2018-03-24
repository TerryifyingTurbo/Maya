const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
const ytdl = require("ytdl-core");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const leetspeak = require("leetspeak");
const bot = new Discord.Client({disableEveryone: true});
const cooldown = new Set();


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
    return message.reply("Ew, not in my DMs. Go do that in a server");
  }

  let prefix = botsettings.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(command === `${prefix}shutdown`){
  if(message.author.id !== "297931837400023041")
  return message.channel.send("Only Master can use this command!");
  
  else

  if(message.author.id == "297931837400023041")
  await message.channel.send("I'm sleep. *Aeztia deactivated*");
  await bot.destroy();
  process.exit();
  console.log("Bot killed");
  }

  if(command === `${prefix}reload`){
    if(message.author.id !== "297931837400023041")
    return message.channel.send("Only Master can use this command!");
    else
  
    // Reload ALL commands listed
  
  if(message.author.id == "297931837400023041")
  const reloading = bot.emojis.get("427234545805557771");
  const reloading = bot.emojis.find("name", "reloading");

  await message.channel.send("**Reloading.**", `${reloading}`)
    .then(message => bot.destroy());
    
    await bot.login(botsettings.token)
    
    message.channel.send("Reloaded.");
  }

  if(command ===`${prefix}devhelp`){
    let devembed = new Discord.RichEmbed()
    .setDescription("Developer Only >:c")
    .setColor("RANDOM")
    .addField("CMD", "shutdown, reload, shardcheck, gamepresence")
    
    message.channel.send(devembed);
  }
  
  if(command === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Uh... Who do I kick...?");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I can't kick that person! They're too strong...");

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

  if(command === `${prefix}ping`) {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`:ping_pong: ***Pong!***  x3 
My Latency is **${m.createdTimestamp - message.createdTimestamp}ms.** API Latency is **${Math.round(bot.ping)}ms.**`);
  }

  if(command === `${prefix}say`) {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Say what? x3")
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    //message.delete().catch(O_o=>{}); 
        // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  if(command ===`${prefix}leetspeak`){
    const sayMessage = args.join(" ");
    const thing = leetspeak(args);
    
    if(!sayMessage) return message.channel.send("Say something so I can encode it.")

    message.channel.send(thing);

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

if(message.content === ";T" || (message.content === ";;T") || (message.content === ";;;T") || (message.content === ";;;;T")){
  message.reply(";;T");
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
  ];

    let result = Math.floor((Math.random() * replies.length))
    message.channel.send(replies[result]);
  }

  if(command ===`${prefix}coinflip`){
    
    let replies = ["Heads.", "Tails."];
    
    let result = Math.floor((Math.random() * replies.length));
    
    await message.channel.send(":currency_exchange:");
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
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

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
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("No. You don't have the ability to add or remove roles.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.member(message.id.user()) || message.guild.members.get(args[0]); 
    if(!rMember) return message.reply("Did you specify a person...?");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Oh? What role do I add...?");
    let gRole = message.guild.roles.find(`name`,role);
    if(!gRole) return message.reply("I was not able to find that role.");
  
    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
    await(rMember.addRole(gRole.id));
    return message.reply (`Added ***${gRole.name}.***`);
  }

  if(command === `${prefix}removerole`){
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");
  
    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rMember.removeRole(gRole.id));
    return message.reply (`Removed ***${gRole.name}.***`);
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

  if(command ===`${prefix}cat`){
    let {body} = await superagent
    .get(`http:\/\/aws.random.cat\/meow`);

let catembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Kitty :0")
.setImage(body.file);

message.channel.send(catembed);
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


  if(command === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Here's what I found...")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Made on...", message.guild.createdAt)
    .addField("You joined...", message.member.joinedAt)
    .addField("Total Members...", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(command === `${prefix}purge`){
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Provide a value between 2 and 100 for the number of messages that I'll delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }



  if(command === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("My info x3")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("My name is...", bot.user.username)
    .addField("I was made on...", bot.user.createdAt)
    .addField("Total CMDs", "24");

    return message.channel.send(botembed);
  }
  
  if(command === `${prefix}help`){
      let botembed = new Discord.RichEmbed()
      .setDescription("Here are my commands so far x3")
      .addField("Random Commands","serverinfo, botinfo, ping, devhelp")
      .addField("Moderator","purge, kick, ban, giverole, removerole")
      .addField("Fun", "say, cat, catfact, dog, 8ball, fortunecookie, coinflip")
      .addField("NSFW", "Classified, Classified, Classified")

      return message.channel.send(botembed);
}

});

bot.login(botsettings.token);
