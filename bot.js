require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  if (msg.content === "hi") {
    msg.reply("Hello fellow Person");
  }
});

client.login(process.env.BOT_TOKEN);
