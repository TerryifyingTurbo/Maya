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
const convert = require("convert-units");
const giphy = require("giphy-api")("l1Y4ECUVv8LSCMnVAQlRjJPds4AsWDNg");
const fantasyNames = require("fantasy-names");
const db = require("quick.db");
const bot = new Discord.Client({disableEveryone: true})
let cooldown = new Set();
let cdseconds = 2;



bot.commands = new Discord.Collection();


bot.on("ready", async () => {
  console.log(`Discord.js v11.30 ${platform.os} \nCPU | ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB \n${bot.user.username}#${bot.user.discriminator} with (${bot.user.id}) online in ${bot.guilds.size} servers! \nReady when you are, Boss xd`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm"){
    return message.reply("Ew, not in my DMs. Go to a server that **I'm in**.");
  }


 const lmao = bot.emojis.get("426999753830825995");
 const ayy = bot.emojis.find("name", "ayy");

 const Platinum = bot.emojis.get("460264163499835402");

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

  message.channel.send(`***Reloading***` + ` ${refresh}`).then(message => {
    setTimeout(() => {
    message.edit(`*Reloaded.* ${greencheck}`)
  }, cdseconds * 4500)
});
  }

if(command === `eval`){
  if(message.author.id !== "297931837400023041") return message.channel.send("No");
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    // if (typeof evaled !== "string")
    //   evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), {code:"xl"});
  } catch (err) {
    message.channel.send(`\`${redx} WARN ERROR REJECTION\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
}

if(command === `status`){
  let status = args[0];
  if(args[0] !== "online" || args[0] !== "idle" || args[0] !== "dnd" || args[0] !== "invisible") return message.channel.send(`${redx} That's not gonna work. \nStatus must be either \`online\` \`idle\` \`dnd\` or \`invisible\``);
  await bot.user.setStatus(`${args[0]}`);
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
    if(message.author.id !== "297931837400023041") return message.channel.send("No");

    let invlink = `https://discordapp.com/api/oauth2/authorize?client_id=417517654174334976&permissions=201714886&scope=bot`
   await message.author.send(`Here you go, boss x3 \n${invlink}`);
   message.channel.send("📥 Invite sent, check your PMs");
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

if(command === `permcheck`){
  if(!message.member.hasPermission("VIEW_AUDIT_LOG") || (!message.member.hasPermission("MANAGE_ROLES")) || (!message.member.hasPermission("MANAGE_MESSAGES"))) return message.channel.send(`No \n**VIEW_AUDIT_LOG*, **MANAGE_MESSAGES** or **MANAGE_ROLES** permission required.`);
  let admin = (message.guild.member(bot.user).hasPermission("ADMINISTRATOR"));
  let ALog = (message.guild.member(bot.user).hasPermission("VIEW_AUDIT_LOG"));
  let Cmanage = (message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS"));
  let Rmanage = (message.guild.member(bot.user).hasPermission("MANAGE_ROLES"));
  let Kick = (message.guild.member(bot.user).hasPermission("KICK_MEMBERS"));
  let Ban = (message.guild.member(bot.user).hasPermission("BAN_MEMBERS"));
  let Mmanage = (message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES"));
  let Everyone = (message.guild.member(bot.user).hasPermission("MENTION_EVERYONE"));
  let Areactions = (message.guild.member(bot.user).hasPermission("ADD_REACTIONS"));
  let Eemojis = (message.guild.member(bot.user).hasPermission("EXTERNAL_EMOJIS"));
  let Elinks = (message.guild.member(bot.user).hasPermission("EMBED_LINKS"));
  let Afiles = (message.guild.member(bot.user).hasPermission("ATTACH_FILES"));
  let Mnicknames = (message.guild.member(bot.user).hasPermission("MANAGE_NICKNAMES"));
  //let ALog = (message.guild.member(bot.user).hasPermission("VIEW_AUDIT_LOG"));

  let Perms = new Discord.RichEmbed()
  .setDescription(`**Permissions Check** :wrench: ${checkeng}`)
  .addField("*Administrator*", admin, true)
  .addField("*View Audit Log*", ALog, true)
  .addField("*Manage Channels*", Cmanage, true)
  .addField("*Manage Messages*", Mmanage, true)
  .addField("*Manage Nicknames*", Mnicknames, true)
  .addField("*Manage Roles*", Rmanage, true)
  .addField("*Kick Members*", Kick, true)
  .addField("*Ban Members*", Ban, true)
  .addField("*Mention @everyone*", Everyone, true)
  .addField("*Add Reactions*", Areactions, true)
  .addField("*External Emojis*", Eemojis, true)
  .addField("*Attach Files*", Afiles, true)
  .addField("*Embed Links*", Elinks, true);


  message.channel.send(Perms);
}

if(command === `stats`){
  const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    let ping = bot.ping
    message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}`, {
        code: 'AsciiDoc'
    });
}

  if(command === `kick`){
    let User = message.mentions.users.first()
    if(!User) return message.reply("You think this is soccer? ***Who do I kick***");
    let Reason = args.slice(1).join(" ");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**NO.** You don't have the ability to kick members");
    if(User.hasPermission("KICK_MEMBERS")) return message.channel.send("I can't kick members who have the ability to kick as well.");
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.channel.send("I need the following to perform this command: KICK_MEMBERS");

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
    message.channel.send(`Discord.js v11.30 ${platform.os} \nCPU | **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB of ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB** \nUptime: ${prettyMs(bot.uptime)}`);
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

if(command === `gen` && args[0] == `LIST`){
  let pages = [
  '**Armour** \nBelts, Boots, Chests, Cloaks, Gauntlets, Helmets, Legs, Pauldrons, Shields, Vambraces.',
  '**Descriptions** \nAliens, Animals, Armys, Backstorys, Battlefields, Bows, Castles, Characters, Citys, Constellations, Countrys, Diseases, Dragons, Dungeons, Dyings, Flags, Gems, Ghost Towns, Gods, Holidays, Houses, Humanoids, Laws, Monuments, Pains, Personalitys, Pistols, Planets, Plants, Plots, Pokemons, Potions, Prophecys, Quests, Rifles, Shields, Shotguns, Societys, Spells, Staffs, Taverns, Towns, Traditions, Wands, Weapons',
  '**Destiny** \nAwokens, Cabals, Exos, Fallens, Hives, Humans, Vexs',
  '**Diablo** \nAngels, Demons, Khazras, Nephalems',
  '**Fantasy** \nAliens, Amazons, Angels, Animatronics, Bandits, Barbarians, Cavemens, Centaurs, Codes, Cowboys, Creatures, Deaths, Demons, Detectives, Dragons, Dryads, Dwarfs, Elementals, Elfs, Ents, Evils, Fairys, Fursonas, Futuristics, Ghosts, Giants, Gnolls, Gnomes, Goblins, Gods, Gorgons, Griffins, Harpys, Heros, Hobbits, Horses, Imps, Kaijus, Killers, Knights, Kobolds, Lamias, Lichs, Mechas, Medievals, Mermaids, Minotaurs, Mobsters, Monsters, Nagas, Necromancers, Nephilims, Ninjas, Nymphs, Ogres, Orcs, Pegasus, Phoenixs, Pirates, Robots, Servants, Shapeshifters, Sirens, Slaves, Species, Steampunks, Succubus, Sylphs, Taurens, Trolls, Twins, Unicorns, Valkyries, Vampires, Villains, Werewolfs, Witchs, Wizards',
  '**Miscellaneous** \nAfterlifes, Airplanes, Airships, Alliances, Apocalypses, Armys, Artifacts, Awards, Bands, Battles, Birds, Bouquets, Brands, Candys, Cars, Class, Colors, Constellations, Creepypastas, Crops, Currencys, Dances, Dates, Dinosaurs, Diseases, Drinks, Drugs, Enchantments, Epithets, Foods, Fungis, Galaxys, Gangs, Guilds, Hackers, Heists, Helicopters, Herbs, Holidays, Instruments, Inventions, Jewelrys, Languages, Magazines, Mascots, Medicines, Metals, Molecules, Newspapers, Nicknames, Plagues, Plants, Poisons, Potions, Professions, Racers, Railways, Ranks, Religions, Ships, Softwares, Spaceships, Spells, Sports, Squads, Superpowers, Teleportations, Thrones, Titles, Treatys, Trees, Tribals, Tribes, Usernames, Vehicles, Wines, Wrestlers',
  '**Pets** \nAliens, Amphibians, Bats, Bears, Birds, Cats, Cows, Crabs, Deers, Dogs, Elephants, Fishs, Horses, Insects, Lions, Monkeys, Mouses, Owls, Parrots, Pigs, Rabbits, Reptiles, Rodents, Sheeps, Turtles, Wolfs',
  '**Places** \nAsylums, Bakerys, Banks, Beachs, Blacksmiths, Brewerys, Bridges, Business, Cafes, Camps, Casinos, Castles, Caves, Circus, Civilizations, Cliffs, Companys, Continents, Countrys, Dimensions, Dungeons, Farms, Forests, Grasslands, Graveyards, Harbors, Headquarters, Hospitals, Hotels, Inns, Islands, Jungles, Kingdoms, Laboratorys, Lakes, Lands, Librarys, Mansions, Mountains, Museums, Nightclubs, Oasis, Orphanages, Outposts, Parks, Planets, Plantations, Plazas, Prisons, Realms, Restaurants, Rivers, Roads, Ruins, Schools, Shops, Snowlands, Stadiums, Stars, Streets, Swamps, Temples, Theaters, Towers, Volcanos, Waterfalls, Waters',
  '**Real** \nAboriginals, Akans, Albanians, Algerians, Amazighs, Argentinians, Armenians, Assyrians, Azerbaijanis, Aztecs, Babylonians, Basothos, Basques, Belgians, Bengalis, Biblicals, Bosnians, Brazilians, Bulgarians, Cajuns, Catalans, Celtics, Chineses, Circassians, Croatians, Czechs, Danishs, Dutchs, Edwardians, Egyptians, Englishs, Enochians, Estonians, Ethiopians, Faroeses, Filipinos, Finnishs, Frankishs, Frenchs, Frisians, Georgians, Germans, Gothics, Greeks, Hausas, Hawaiians, Hebrews, Hillbillys, Hindus, Hippies, Hispanics, Hungarians, Icelandics, Indonesians, Inuits, Irishs, Italians, Jamaicans, Japaneses, Jewishs, Kazakhs, Khmers, Koreans, Kurdishs, Laotians, Latins, Latvians, Lithuanians, Malaysians, Malteses, Maoris, Mayans, Mongolians, Moroccans, Muslims, Natures, Nepaleses, Normans, Norwegians, Pashtuns, Persians, Polishs, Portugueses, Poshs, Punjabis, Puritans, Quebecois, Romanians, Romans, Russians, Serbians, Shakespeareans, Shonas, Sikhs, Sinhaleses, Slavics, Slovenians, Somalis, Stages, Suebis, Sumerians, Swahilis, Swedishs, Swiss, Tajiks, Tamils, Telugus, Thais, Tibetans, Turkishs, Twins, Ukrainians, Victorians, Vietnameses, Vikings, Yorubas, Zulus',
  ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setTitle("Generator Reference")
    .setFooter(`[Page ${page} of ${pages.length}] \n!?gen <category> <subcategory> <amount>`)
    .setDescription(pages[page-1])

  message.channel.send(embed).then(message => {

    message.react('⏪').then( r => {
      message.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪'
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩'

      const backwards = message.createReactionCollector(backwardsFilter, { time: 1800000 });
      const forwards = message.createReactionCollector(forwardsFilter, { time: 1800000 });


      backwards.on('collect', r => {
        if (page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`[Page ${page} of ${pages.length}] \n!?gen <category> <subcategory> <amount>`)
        message.edit(embed)
      })

      forwards.on('collect', r => {
        if (page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`[Page ${page} of ${pages.length}] \n!?gen <category> <subcategory> <amount>`)
        message.edit(embed)
      })

    })
})};


if(command === `gen`){
  let category = args[0];
  let subcategory = args[1];
  let amount = args[2] || 1;

  if(category === "LIST") return;
  if(!category || !subcategory) return message.channel.send("You must provide both a valid category and subcategory! \nSee __!?gen LIST__ if needed");
  if(isNaN(amount)) return message.channel.send("The amount MUST be a number. \nBe mindful when using amounts that are more than one request, especially with descriptions \nSee __!?gen LIST__ if needed");
  if(amount < 1 || amount > 25) return message.channel.send("Oh, that ain't gonna work. That's either below or above the limit (Min: 1, Max: 25) \nSee __!?gen LIST__ if needed");

  //console.log(fantasyNames(`${category}`, `${subcategory}`, `${amount}`));
  let suggestions;
  try{
  suggestions = (fantasyNames(`${category}`, `${subcategory}`, `${amount}`));
  } catch (error) {
  console.log(error);
  return message.channel.send(`${redx} Not a valid category or subcategory. \nCheck your spelling or see __!?gen LIST__ if needed`)
  }
  message.channel.send(suggestions.join("\n"));
}

if(command === `calc`){
  let input = args.join(" ");
  if(!input) return message.channel.send(`${message.member.displayName}, I need an expression for this to work.`)

  let answer;
  try{
    answer = mathjs.eval(input);
  } catch (error) {
    return message.channel.send(`${redx} Could not solve: **${error}**`);
  }
  message.channel.send(`${answer}`);
}

if(command === `convert` && args[0] == "LIST"){
  let pages = ['__Length__ \nmm \ncm \nm \nin \nft-us \nft \nmi',
  '__Area__ \nmm2 \ncm2 \nm2 \nha \nkm2 \nin2 \nin2 \nft2 \nac \nmi2',
  '__Mass__ \nmcg \nmg \ng \nkg \noz \nlb \nmt \nt',
  '__Volume__ \nmm3 \ncm3 \nml \nl \nkl \nm3 \nkm3 \ntsp \nTbs \nin3 \nfl-oz \ncup \npnt \nqt \nqt \ngal \nft3 \nyd3',
  '__Temperature__ \nC \nF \nK \nR',
  '__Time__ \nns \nmu \nms \ns \nmin \nh \nd \nweek \nmonth \nyear',
  '__Speed__ \nm/s \nkm/h \nm/h \nknot \nft/s',
  '__Pressure__ \nPa \nhPa \nkPa \nMPa \nbar \ntorr \npsi \nksi',
  '__Digital__ \nB \nKB \nMB \nGB \nTB',
  '__Voltage__ \nV \nmV \nkV',
  '__Power__ \nW \nmW \nkW \nMW \nGW',
  '__Energy__ \nWh \nmWh \nkWh \nMWh \nGWh \nJ \nkJ',
  '__Angle__ \ndeg \nrad \ngrad \narcmin \narcsec'];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setTitle("Unit Reference")
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

  message.channel.send(embed).then(message => {

    message.react('⏪').then( r => {
      message.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪'
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩'

      const backwards = message.createReactionCollector(backwardsFilter, { time: 1800000 });
      const forwards = message.createReactionCollector(forwardsFilter, { time: 1800000 });


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

if(command === `convert`){
  let value = args[0];
  let unit1 = args[1];
  let unit2 = args[2];

  if(value == "LIST") return;
  if(isNaN(value)) return message.channel.send(`${message.member.displayName}, provide a value to convert`)
  if(!unit1 || !unit2) return message.channel.send(`${message.member.displayName}, what are you trying to convert? \nSee __!?help convert__ and __!?convert LIST__ if needed.`);

  let answer;
  try{
  answer = convert(`${value}`).from(`${unit1}`).to(`${unit2}`).toFixed(2);
  } catch (error) {
    console.log(error);
    return message.channel.send('That\'s not gonna work. Check your spelling or see __!?convert LIST__ if needed. \n```You cannot make impossible conversions such as fl-oz (Volume) to oz (Mass)```');
  }

  message.channel.send(answer +`${unit2}`);
}

if(command === `balance` || command === `bal`){
  //let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    let user = message.author;    
    let senderBalance = await db.fetch(`userBalance_${message.author.id}`);
  
  if (!senderBalance || senderBalance == null) db.set(`userBalance_${message.author.id}`, 50);
  //db.set(`userBalance_${user.id}`, 50);

  message.channel.send(`${message.member.displayName}, you have ***${senderBalance}*** ${Platinum} Platinum`);
}

if(command === `pay`){
  let recipient = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let value = parseInt(args[1]);

  if(!recipient) return message.channel.send(`${message.member.displayName}, you can't magically give the air some Platinum!`);
  if(isNaN(value)) return message.channel.send(`Uhm hello, that must be a number.`);
  if(recipient == message.author || recipient == message.author.id) return message.channel.send("Silly, you can't loan yourself money!");

  let recipientBalance = await db.fetch(`userBalance_${recipient.id}`),
  senderBalance = await db.fetch(`userBalance_${message.author.id}`);

  if(recipientBalance === null) db.set(`userBalance_${recipient.id}`, 50);
  if(senderBalance === null) db.set(`userBalance_${message.author.id}`, 50);

  if(value > senderBalance) return message.channel.send(`No can do, you gotta' have the proper amount of Platinum first`);
  db.add(`userBalance_${recipient.id}`, value).then(i => console.log(i, typeof i));
  db.subtract(`userBalance_${message.author.id}`, value).then(i => console.log(i, typeof i));

  message.channel.send(`All set ${greencheck} \nGave ${recipient.displayName} ***${value}*** ${Platinum} Platinum`);
  
}

if(command === `loan`){
  if(message.author.id !== "297931837400023041") return message.channel.send(`${message.member.displayName}, you're not Boss so I ain't going to let you`);
  let recipient = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let value = parseInt(args[1]);

  if(!recipient) return message.channel.send(`Hey Boss, you can't magically give the air some Platinum!`);
  if(isNaN(value)) return message.channel.send(`Uhm, Boss. That isn't a number x3`);

  let recipientBalance = await db.fetch(`userBalance_${recipient.id}`),
  senderBalance = await db.fetch(`userBalance_${message.author.id}`);

  if(recipientBalance === null) db.set(`userBalance_${recipient.id}`, 50)

  db.add(`userBalance_${recipient.id}`, value).then(i => console.log(i, typeof i));
  db.subtract(`userBalance_${message.author.id}`, value).then(i => console.log(i, typeof i));

  message.channel.send(`All set, Boss x3 \nGave ${recipient.displayName} ***${value}*** ${Platinum} Platinum`);
  
}

if(command === `ttget`){
  db.add(`userBalance_${message.author.id}`, 250);
  message.channel.send("250 Added").then(i => console.log(i, typeof i));
}

if(command === `revoke`){
  if(message.author.id !== "297931837400023041") return message.channel.send(`${message.member.displayName}, you're not Boss so I ain't going to let you`);
}

if(command === `say`) {
let sayMessage = args.join(" ");

if(!sayMessage) return message.channel.send("Say what? x3")
message.channel.send(sayMessage);
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
//message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
  }

// if(command === `avatar`){
//   let user = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;

//   let embed = new Discord.RichEmbed()
//   .setAuthor(`${user.displayName}'s Avatar`)
//   .setImage(user.displayAvatarURL)
//   .setTimestamp();

//   message.channel.send({embed})
// }

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
    message.channel.send(`Rock, paper, scissors! \nNot... whatever ${choice} was`);
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
  message.channel.send(catembed).catch(error);{
    if(error.status == 403) return message.reply(`${redx} 403 Forbidden`)
  }
}

if(command === `fox`){
  let {body} = await snekfetch.get(`https://randomfox.ca/floof/`);
  let foxembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Foxy :0")
  .setImage(body.image);
  message.channel.send(foxembed)
  .catch(error => message.channel.send(`Failed. Something went wrong.**${error}**`));
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
 message.channel.send(body.fact);
}

if(command === `dogfact`){
  let {body} = await snekfetch.get(`https://dog-api.kinduff.com/api/facts`);
  message.channel.send(body.facts)
}

if(command === `dadjoke`){
  let {body} = await superagent
  .get(`https://icanhazdadjoke.com/slack`);

  message.channel.send("**" + body.attachments.map(a => a.text) + "**");
}

if(command === `meme`){
  let {body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let me = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(body.text)
  .setImage(body.url);

  message.channel.send(me);
}

if(command === `clapify`){
  let randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
  if (args.length < 1) return message.channel.send("***Give:clap:me:clap:something:clap:to:clap:clap:clap:on:clap:***");
  message.channel.send(args.map(randomizeCase).join(':clap:'));
}

if(command === `smut` && args[0] == "keepthisbetweenus"){

  if(!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  let pages = [
    //one
  `*Written by yours truly,* <@297931837400023041>`,
  //two
  `*“I just… I don’t know what to do anymore, really.” Travis says disappointedly “What’s the point of still ‘being with’ Maya when she pretty much disappeared and never came back.” He rests his head, facing down at the floor, on his hands, sitting adjacent to Saeyoung on the edge of his bed “It’s weird… one day she was here, then the next day, not anymore..”
  “It… sucks, honestly. I’m having the same situation too with… Taeyeon”
 “Oh...?”
  “She also disappeared and never really came back.” He muttered “I think we both honestly should just.. Y’know..”
 Travis lifts his head up in response. “Huh?”
  “I meant… to move on from them.” He takes off his jacket and tosses it aside “It’s probably the best thing, at least for me anyway.”*`,
  //three
  `*“Not sure what to really say about that.” Travis sighs and lays back on the bed, staring at the ceiling above. There wasn’t much else for him to say what was on his mind.  “...I mean They said they’ll be back and who knows if—” He exclaims and turns his attention to Saeyoung when he climbs over on top of him, confusion striking him “The hell? Aye, chill!” He’s ‘shushed’ by the redhead who leans in to kiss for a moment that felt almost more than a moment and then parts away. Saeyoung smirks, hinting his intentions. He could see the look in Travis; who was clearly flustered, but that would be something he’d deny. A very low ‘uh...’ was the most the dumbfounded boy could make at the moment, now blushing up a storm as he couldn’t make an answer from feeling slightly dizzy*`,
  //four
  `*Saeyoung’s eyes meet with Travis’s “I've always found you.. a little cute and then I always had these… thoughts about you”
  “If… y-you really thought that way…” Travis brings Saeyoung closer face to face and whispers “I’ve—actually uhm... thought of… that… too” Without hesitation, he seizes his lips in a returned kiss that becomes sloppy and rough in a matter of time—Who wouldn't for that porcelain skin and vermillion hair Korean that everyone seems to love?—Their bodies not only radiating heat and rubbing against each other but were also linked close together as if being bear-hugged and unable to let go. The two aggressively exchange in saliva that seems more of a competition that prolonged but then Saeyoung forcibly breaks the kiss, allowing himself and Travis for a quick gasp of air. Actions speak louder than words, they say...*`,
  //five
  `*And they’d be right: Being ‘straight’ did not exist for the time being since the two decide to take their ‘curiosity’ up a notch when Saeyoung instinctively strips of his own clothing with Travis hesitating for a split second but promptly strips of his own afterwards, freeing their own stiffened and throbbing members that were of relatively equal length. Saeyoung couldn’t help but stare at the now-bare Travis who was just as obviously aroused as he was himself. “Turn around” He commands
  ‘Okay’ Travis gives a slight nod and reluctantly shifts a little ways back up on the bed, hefting himself up to turn about and set out on his hands and knees. It seemed odd for himself about how he already knows what to do and how to do it, but at this point, there’s no objecting now. Saeyoung scoots in on his knees positioning himself right behind, literally ‘admiring the view’. He couldn’t help but make a soft snicker at his obedience.*`,
  //six
  `*It is safe to say that Travis has a decent firm booty clearly respected and Saeyoung certainly seems to agree from the way he’s greedily grabbing him from behind, making Travis find himself shuddering and reddening from those soft pale hands that now grip at his hips “Ah, uhm, we’re gonna keep this between us, right?”
  “Oh yeah, definitely.”
 “Uhm, I… I’ve never done this before either…” He adds
  “Err... Neither have I.”
 “Then, could you go a little easy and not so hard—Ahgh~!!!” A thick, throaty cry bursts from the virgin half a beat later—he must’ve choked on his own breath an instant when Saeyoung thrusted and practically slammed in with sudden force, his head thrown back as he grinded in.*`,
 //seven
  `*“Ah! I—I said not so ha—hard!” Travis winced, groaning out a thick, wandering, wordless speech on the pain of such a sudden stuffing. Saeyoung apologizes pathetically and while he makes effort to letup, he succumbs to his temptation to drive in again and again, punctuating every thrust with a small flare of intense sensation that slowly stretch open that tight entrance.  Sharp sighs escape from Travis as he attempts to stifle them with a spare hand only to fail to do as intended.
  “Mmm, sounds like you’re liking this, much?” The redhead murmured, his hands dig deep into that pale skin at the hips
 “Sh—Shut it, you” Travis stammers, out of embarrassment and humiliation.*`,
  //eight
  `*His hands knot up into fists that cling to the bedsheets as he drags his head up, panting and groaning luxuriously with painful pleasure blooming from his back end. How could something feel painful yet pleasuring at the same time? It was true that he couldn’t deny that he’s liking it, if not, thoroughly enjoying it. Saeyoung’s lengthy dick slicks all over the boy’s insides, providing more than enough lubrication of aggressively working in and out of that claimed firm ass that deliciously strains around him. Every muscle up his legs and belly burn with raw effort, shoving Travis forward with resounding slam, forcing shameless perverted moans from him. Must’ve been too much since then he bursts out screaming every curse word in the book, even including the lord’s name in vain.*`,
  //nine
  `*Enough just isn’t enough. In desperation to fulfill his need for even more, he goes reaching for his own twitching, hanging and pre-soaked rod that ached intensely but finds impossible to do when an uncontrollable redhead behind him shows no sign of slowing down—or so it was believed. Saeyoung is getting close faster than he’d but that doesn’t stop him just yet. Panting out and pressing forward, he forces himself to ease a little as he hugs down around Travis. The thin sweat rising on both the two seals with his belly to Travis’s back in a strange, hot bond, making him feel all the more intensely even as he throbs inside him, chest tight to his ribcage. Ecstasy and raw stimulation intoxicates Travis’s mind as he glances back at the soon-to-blow redhead “D—does it feel... good? To be deep inside me?” His face turns the same radiant red from earlier*`,
  //ten
  `*“Do I… have to answer that?” He utters, as if the answer wasn’t obvious enough already. Swallowing tightly, gradually panting out uncontrollably, he hugs the boy tight as his hips work feverishly against those cheeks, the two of them collapse to the bed, Travis’s ass bends back high in offering and back arching tight, being driven at balls deep, when Saeyoung spends himself with effort as his own fingernails dig into that hot, slick skin. The redhead feels himself swelling into hypersensitive steel, inner walls being pulled taut around him so painfully good that it’d be a pain to stop now. However, all good things eventually come to an end.*`,
  //eleven
  `*“I’m… I’m gonna—” Saeyoung unknowingly leaves his impending warning incomplete and with all of his strength to continue more, his hips making a sudden jerk and high, frantic moan bursting from his throat, pinning Travis in the bed and firing his surging load of hot warm seed deep into those walls before slumping over, hands loosening of grip. He lies down atop just short of collapsing entirely, sprawling over Travis’s back with a thick sigh as he spends himself to the last drop within him. Feeling woozy and the world may be… turning a little… It takes Travis a moment to realize that Saeyoung is saying something
  “You… Alright?” His breathing enthusiasm slowly breaks when the exhausted boy clears his throat barely collecting himself, finally managing something a little more coherent than frantic moans afterwards*`,
  //twelve
  `*“Can’t believe you asked that. First you—You cummed inside me,” He rebuked, disgusted by the thought of it and then pushes Saeyoung off his back to sit up “and second, you did the complete opposite of going easy. My ass literally hurts!”
  “Well… you liked it either way so—” He shrugs, knowing that it is true
 “I did not.”
  “Did too.”
 “No, I didn’t” Still continuing in denial, and for some reason now admitting “Okay fine… Maybe” He looks away, pouting with Saeyoung making a faint chuckle. “Whatever, this is still only between just us.”
 He scoffs “Yeah, obviously.”
 Two almost strikingly similar voices instantly turn both the boys attention toward the locked door, demanding to be let in “Oppa? Travvy? Ya’ both in there?” Quickly panicking and with no time to waste, the two hop off the bed, scrambling for their clothing.
 “Uhm, yeah, just give us a second!” Travis assures*
  ***Talk about a close call...***`,
  //thirteen
  `*The End* \n!?smut <story> for other lemon stuff 🍋 *you nasty* \nIf it was... in a non-weird sense... perfect, well-done and awesome, then react with a ⭐! \n*Really though, it's not that easy making these. Appreciate*`];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setTitle("Keep This Between Us")
    .setColor("#44eae7")
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

  message.channel.send(embed).then(message => {

    message.react('⏪').then( r => {
      message.react('⏩')

      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪'
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩'

      const backwards = message.createReactionCollector(backwardsFilter, { time: 1800000 });
      const forwards = message.createReactionCollector(forwardsFilter, { time: 1800000 });


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
      const backwards = message.createReactionCollector(backwardsFilter, { time: 1800000 });
      const forwards = message.createReactionCollector(forwardsFilter, { time: 1800000 });
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
  let giver = `${message.member.displayName}`;
  let Reciever = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  let intro = [`Giving a sly smile, ${giver} puts that bad mouth to good use.`,
  `Looks like ${giver} is giving ${Reciever.displayName} some of that oral relief.`,
  `Without a moment to waste, ${giver} gets busy by giving ${Reciever.displayName} some of that tongue.`,
  `Momma didn't raise no bitch. ${giver} cajoles ${Reciever.displayName} to let'em get a sample of some of that mouth seal succ.`,
  `Biting their lip, ${giver} gets to work and gives ${Reciever.displayName} some of that nice ol' relaxation.`,
  `Maybe a quick one wouldn't hurt, says ${Reciever.displayName}. ${giver} agrees, more than happy to do so.`,
  `${giver} believes that they're really good at giving oral relief. Only one way to find out.`];
  let introOutcome = Math.floor((Math.random() * intro.length));

  let middle = [`${giver} is making great progress working their way on ${Reciever.displayName} with those lovely lips.`,
  `${giver}, taking in all of ${Reciever.displayName}, making them periodically thrust upwards, moaning small O's.`,
  `Poor ${giver}, being greedily trapped by ${Reciever.displayName}'s thighs, forcing them into their crotch.`,
  `Oh, those slick lubricated noises that ${giver} makes... It's almost an art.`,
  `Slurp... slurp-slurp much like sipping all of the juice from a soup bowl; The sound as ${giver} is slobbering all over it. What else is there to say?`,
  `${Reciever.displayName}, shoving ${giver}'s face down to their crotch and pratically face grinding.`,
  `${giver} is definitely putting in work. Their tongue-lathering skills is making ${Reciever.displayName} scream the lord's name in vain.`,
  `${giver} seemingly aggressive with what they're doing. It's definitely 'too much teeth'`,
  `Not going easy, it is assumed. Judging by the way ${Reciever.displayName} is rarely letting ${giver} stop for some breathing.`,
  `...But what exactly is ${giver} doing? It looks as if they don't even know what giving the succ is.`,
  `${giver} may not be exactly doing such a perfect job, at least they're making good effort. Definitely something than nothing.`];
  let middleOutcome = Math.floor((Math.random() * middle.length));

  let end = [`${Reciever.displayName} is satisfied with their little session with ${giver}. Perhaps they might ask for more some other time.`,
  `${Reciever.displayName} may deny it, but they know that they secretly loved it.`,
  `${Reciever.displayName} hated it, despite ${giver} putting all their effort.`,
  `Though ${Reciever.displayName} enjoyed it, it wasn't exactly what they were looking for... or who they were looking for.`,
  `${Reciever.displayName} thoroughly enjoyed it just as much as ${giver} thoroughly enjoyed it; Happy ending.`,
  `In the end, ${Reciever.displayName} isn't too excited as ${giver} is.`,
  `${Reciever.displayName} doesn't want anymore... at least for now.`];
  let endOutcome = Math.floor((Math.random() * end.length));

  if(!message.channel.nsfw) return message.channel.send("Whoa, relax. You can only use this command in a channel that is marked as NSFW.");
  if(!Reciever) return message.channel.send("People may be able to suck themselves but you certainly aren't one of them. \nThat, or you just didn't specify a valid person. \n*or maybe didn't even spell their name right*");

  message.channel.send(`*${intro[introOutcome]}*`).then(message =>{
    message.channel.startTyping();
    setTimeout(() => {
      message.edit(`*${intro[introOutcome]} ${middle[middleOutcome]}*`)
    }, cdseconds * 2500);

    message.channel.stopTyping(true);

    setTimeout(() => {
      message.edit(`*${intro[introOutcome]} ${middle[middleOutcome]} ${end[endOutcome]}*`)
    }, cdseconds * 5000);
  });
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
  if(args[0] == "keepthisbetweenus") return;

  let smutembed = new Discord.RichEmbed()
  .setTitle(`Lemon Scented.`)
  .setColor("#d68998")
  .setThumbnail("https://i.imgur.com/dCJlKkG.jpg")
  .setFooter("!?smut <story>", "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png")
  .addField(`${loveydovey}`, "*Trade Christmas Special (m×f) \n??? \nKeep This Between Us (m×m) \n??? \n??? \n???*", true);
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
    let opt = args.join(" ").split(',');
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
    .setTitle(message.guild.name)
    .setAuthor(`Owner: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, message.guild.owner.user.displayAvatarURL)
    .setColor(message.guild.owner.highestRole.color)
    .setThumbnail(sicon)
    .setTimestamp()
    //.addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField("Server Established @", `${month}/${day}/${year}`, true)
    .addField("Server Region", message.guild.region, true)
    .addField("Server ID", message.guild.id, true)
    .addField("Server Verification", "Level " + message.guild.verificationLevel, true)
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
      "color": 10181046,
      //"timestamp": "2018-04-21T01:28:06.959Z",
      "footer": {
        "icon_url": "https://cdn2.iconfinder.com/data/icons/nodejs-1/256/nodejs-256.png",
        "text": `${platform.os} \nNode JS ${process.version} \nDiscord.js v11.30`
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
        "icon_url": "https://cdn.discordapp.com/avatars/297931837400023041/96f61c42442da90a057042729a26d30b.png?size=2048"
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
          "name": "Creation Date",
          "value": `${month}/${day}/${year}`,
          "inline": true
        },
        {
          "name": "Guild Count",
          "value": `${bot.guilds.size}`,
          "inline": true
        },
        {
          "name": "Command Count",
          "value": "39 Commands (total)",
          "inline": true
        },
        {
          "name": "CPU Usage",
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
          "name": "VPS Socket Uptime",
          "value": `${prettyMs(bot.uptime)}`,
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

     if(args[0] == "gen") return message.channel.send("I will randomly generate lists of names and descriptions. \nUsage: !?gen <category> <subcategory> <amount (1 or 1-25)> \nUsage: !?gen LIST \nExample: !?gen fantasy werewolfs 5 `//Returns 5 names from this category`");

     if(args[0] == "leave") return message.channel.send("I'll leave this server if necessary.");

     if(args[0] == "eval") return message.channel.send("Executes the arbitrary Javascript library. \n**Use with caution. This is an extremely powerful and dangerous command if used improperly or maliciously.**");

     if(args[0] == "shutoff") return message.channel.send("All of my proccesses are immediately terminated upon execution.");

     if(args[0] == "reload") return message.channel.send("Refreshes all commands in located in the directories");

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
 if(args[0] == "permcheck") return message.channel.send("I'll provide a list of the most core permissions and whether if I have them or not.");

 if(args[0] == "convert") return message.channel.send("Convert measurments from a unit to another. \n*Uses case sensitive abbreviations for units (mi, yd, ft, lb, kg, t, etc...)* \nUsage: !?convert <value> <unit> <unit> \nUsage: !?convert LIST");
    // if(args[0] == "") return message.channel.send("");
    let embed = {
         //"title": "Here x3",
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
            "name": ":package: Random and Util",
            "value": "serverinfo, botinfo, ping, docrefs, dws, listemotes, avatar, urban, pick, fortune, mstrain, gen, calc, convert"
          },
          {
            "name": ":wrench: Moderation",
            "value": "purge, kick, ban, giverole, removerole, permcheck"
          },
          {
            "name": `${Platinum} Economy`,
            "value": "balance, pay, loan (dev), revoke (dev)"
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

bot.login(botsettings.mightykey);
