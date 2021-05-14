const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (message.embeds.length > 0 && message.author.username === "GitHub") {
    console.log(message);
    message.channel.send("Github update!");
    message.channel.send(`Repo: ${message.embeds[0].title}`);
    message.channel.send(`Commit: ${message.embeds[0].description}`);
    message.channel.send("Embed:");
    message.channel.send({ embed: message.embeds[0] });
  }
  if (message.webhookID) {
    console.log("this works too");
  }
});

client.login(process.env.TOKEN);
