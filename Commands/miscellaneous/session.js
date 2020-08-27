
    module.exports = {
        config: {
          name: "session",
          description: "help",
          usage: "/session",
          category: "miscellaneous",
          accessableby: "Members",
        },
        run: async (bot, message, args) => {
        
        if (!args.length) {
            return message.channel.send(`Please input the name of the session host!`);
        }
        
        message.guild.channels.cache.get("738596735420596269").send(`<:GAME2:705767132062810226> <@&678088149611708417> <:GAME2:705767132062810226>`);
        
        const sessionEmbed = {
            color: 0xac20da,
            title: 'Session Host',
            author: {
                name: 'Session Alert',
                icon_url: 'https://i.imgur.com/dkKFHsj.png',
            },
            description: `Safe session on ${args}. If you haven't added ${args} yet, feel free to add them and they will accept as soon as possible.`,
            thumbnail: {
                url: 'https://i.imgur.com/dkKFHsj.png',
                },
                fields: [
                {
                name: 'How do I join?',
                value: 'Look at the <#678028080362815488> and add someone who is already in the session, then join through their PSN Profile. Or, you can join someone who is in the session through the PS4 community. *Just search for The Gamer Nexus!*',
                inline: false,
                },
                
                {
                name: 'Appearing Offline',
                value: 'Appearing offline is mandatory in the crew session, as it decreases the chances of randoms joining. An exception to this is appearing online for a little bit to help a crew member join.',
                inline: false,
                },
                
            ],
                footer: {
                    text: 'The Gamer Nexus',
                    icon_url: 'https://i.imgur.com/dkKFHsj.png',
                },
        };
          
        message.guild.channels.cache.get("738596735420596269").send({ embed: sessionEmbed });
    }
}