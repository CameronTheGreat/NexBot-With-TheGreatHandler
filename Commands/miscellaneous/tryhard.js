module.exports = {
    config: {
      name: "tryhard",
      description: "help",
      usage: "/tryhard",
      category: "miscellaneous",
      accessableby: "Members",
    },
    run: async (bot, message, args) => {
        message.channel.send('A tryhard has been spotted in the crew lobby. See <#747232293826854992> for more details.');
        message.guild.channels.cache.get("747232293826854992").send('<a:GAMEOPSAlert:694771391169298493> <@&690732079473885184> <a:GAMEOPSAlert:694771391169298493>');
        const tryhardEmbed = {
            color: 0xc00000,
            title: 'A Tryhard Has Joined the Crew Lobby',
            author: {
                name: 'G.A.M.E Ops Alert',
                icon_url: 'https://i.imgur.com/9majgsu.png',
            },
            description: '**DO NOT** try to attack them, they are most likely in god mode and cannot be killed. Please vote to kick the tryhard, starting with the one with the highest level or K/D.',
            thumbnail: {
                url: 'https://i.imgur.com/9majgsu.png',
                },
                fields: [
                {
                name: 'How do I vote to kick a player?',
                value: 'Options > Online > Players > Select Player > Kick',
                inline: false,
                },
                
                {
                name: 'Now what do I do to protect myself?',
                value: 'Please close application if you are selling to protect your sale. Go inside of a building to avoid being killed.',
                inline: false,
                },
                {
                name: 'What now?',
                value: 'If the tryhards persist, a new lobby will be up shortly.',
                inline: false,
                },
            ],
                footer: {
                    text: 'The Gamer Nexus',
                    icon_url: 'https://i.imgur.com/dkKFHsj.png',
                },
        };
        message.guild.channels.cache.get("747232293826854992").send({ embed: tryhardEmbed });
        message.guild.channels.cache.get("747232293826854992").send('<:GAME2:705767132062810226> <@&678088149611708417> @here <:GAME2:705767132062810226>');
        
    }
}