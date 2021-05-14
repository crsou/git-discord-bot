const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.REACT_APP_BOT_TOKEN);
