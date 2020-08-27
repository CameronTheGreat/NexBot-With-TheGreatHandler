module.exports = {
    config: {
      name: "griefer",
      description: "help",
      usage: "/griefer",
      category: "miscellaneous",
      accessableby: "Members",
    },
    run: async (bot, message, args) => {
        message.channel.send('A griefer has been spotted in the crew lobby. See <#747232293826854992> for more details.');
        message.guild.channels.cache.get("747232293826854992").send('<a:GAMEOPSAlert:694771391169298493> <@&690732079473885184> <a:GAMEOPSAlert:694771391169298493>');
        
        const grieferEmbed = {
            color: 0xc00000,
            title: 'A Griefer Has Joined the Crew Lobby',
            author: {
                name: 'G.A.M.E Ops Alert',
                icon_url: 'https://i.imgur.com/9majgsu.png',
            },
            description: 'Please stay alert at all times. **Vote to kick** the griefer, start with the one with the highest level or K/D first.',
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
                value: 'Please close application if you are selling to protect your sale. Go inside of a building to avoid being killed, or join the G.A.M.E Ops in attacking the griefers. Thanks!',
                inline: false,
                },
                {
                    name: 'What now?',
                    value: 'If the griefers persist, a new lobby will be up shortly.',
                    inline: false,
                    },
            ],
                footer: {
                    text: 'The Gamer Nexus',
                    icon_url: 'https://i.imgur.com/dkKFHsj.png',
                },
        };
        message.guild.channels.cache.get("747232293826854992").send({ embed: grieferEmbed });
        message.guild.channels.cache.get("747232293826854992").send('<@&678088149611708417> @here');
        
        
    }
}
