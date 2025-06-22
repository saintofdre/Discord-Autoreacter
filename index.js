const { Client } = require('discord.js-selfbot-v13')

const client = new Client ({
    checkUpdate: false
});

client.on('ready', async () => {
    console.log("Client is Ready!")
});

//Replace YOUR USER ID with your actual ID
client.on('messageCreate', async message => {
    if (message.author.id === 'YOUR USER ID') {
        await message.react('☠️');
        await message.react('😭');
    }
});

//Replace YOUR USER TOKEN with your actual token
client.login("YOUR USER TOKEN")