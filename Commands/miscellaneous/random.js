const { DiscordAPIError, Channel } = require("discord.js")

module.exports = {
    config: {
      name: "random",
      description: "help",
      usage: "/random",
      category: "miscellaneous",
      accessableby: "Members",
    },
    run: async (bot, message, args) => {
        
        if (!args.length) {
            return message.channel.send(`Please input the name of the random!`);
        }
        message.channel.send('A random is in the crew session. See <#747232293826854992> for more details.')
        message.guild.channels.cache.get("747232293826854992").send(`<:GAME2:705767132062810226> <@&678088149611708417> <:GAME2:705767132062810226>`);
        
        const randomEmbed = {
        color: 0xac20da,
            title: 'A Random Has Joined the Crew Session',
            author: {
                name: 'Session Alert',
                icon_url: 'https://i.imgur.com/dkKFHsj.png',
            },
            description: `A random by the name of ${args} is in our lobby, please **vote to kick** the random`,
            thumbnail: {
                url: 'https://i.imgur.com/dkKFHsj.png',
                },
                fields: [
                {
                name: 'How do I vote kick a random?',
                value: 'Options > Online > Players > Select Player > Kick',
                inline: false,
                },
                
                {
                name: 'Now what do I do?',
                value: 'After voting to kick the random, please react to this message with ✅. Thanks!',
                inline: false,
                },
            ],
                footer: {
                    text: 'The Gamer Nexus',
                    icon_url: 'https://i.imgur.com/dkKFHsj.png',
                },
        };

        message.guild.channels.cache.get("747232293826854992").send({ embed: randomEmbed })
    
        .then(random => random.react('✅'));
    }
}