const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (message.embeds.length > 0) {
    console.log(message);
    message.channel.send(`New message! ${message.content}`);
    message.channel.send(`Author! ${message.author}`);
    message.channel.send(`Embeds! ${message.embeds}`);
  }
});

client.login(process.env.TOKEN);
