//Imports
const Discord = require('discord.js');
const fs = require('fs');
const { Prefix } = require('./deafultConfig.json');
const Client = new Discord.Client();
Client.commands = new Discord.Collection();

//Load env vars
try {
    require('dotenv').config();
}catch(err) {}

const token = process.env.TOKEN;
//Load Commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
        const command = require(`./commands/${file}`);

        // set a new item in the Collection
        // with the key as the command name and the value as the exported module
        Client.commands.set(command.name, command);
}


//Events
Client.on('ready', () => {
    console.log('BOT IS ON BAYBE');
    Client.user.setActivity('Some Animu', { type: 'WATCHING' })
});

Client.on('message', (message) => {
    if (!message.content.startsWith(Prefix) || message.author.bot) return;

        const args = message.content.slice(Prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

    try {
        Client.commands.get(command).execute(message, args);
    } catch (error) {
        if(error.name == "TypeError"){
            message.reply('Sorry, didnt found this command (￣▽￣*)ゞ');
        }else {
            message.reply('SOMETHING IS WRONG, I CAN FEEL IT...\nCongrats!!!\nYou broke my bot ( ╥ω╥ )\nPlease contact me and maybe i can fix it!\n\n - Babakinha#7938');
            console.log(`Hey ${message.author.username} Foun a "${error.name}" error, while using the ${command} command with this args ${args}.`);
        }
    }
});

Client.on('guildMemberAdd', (member) => {
    member.guild.systemChannel.send(`Seja bem vindo ${member.displayName}`);
});

//login
Client.login(token);