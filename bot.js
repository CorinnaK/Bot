require("dotenv").config();
const generateImage = require("./generateImage");

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "hi") {
    msg.reply("Hello fellow Person");
  }
});

const welcomeChannelId = "969749401759256636";

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the Server!`,
    files: [img],
  });
});

client.login(process.env.BOT_TOKEN);
