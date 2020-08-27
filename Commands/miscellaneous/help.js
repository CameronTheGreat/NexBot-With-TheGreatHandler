module.exports = {
    config: {
      name: "help",
      description: "help",
      usage: "/help",
      category: "miscellaneous",
      accessableby: "Members",
    },
    run: async (bot, message, args) => {
        const helpEmbed = {
            color: 0xac20da,
            title: 'Command List',
            author: {
                name: 'NexBot Help',
                icon_url: 'https://i.imgur.com/dkKFHsj.png',
            },
            description: `Here is a list of my commands:`,
            thumbnail: {
                url: 'https://i.imgur.com/dkKFHsj.png',
                },
                fields: [
                {
                name: '/queue {businesses}',
                value: 'Use this command to join the sales queue. Ex: /queue <:zMETH:747238947519725618> <:zCOKE:747238947326787590> <:zBUNKER:747238946857025568>',
                inline: false,
                },
                {
                name: '/help',
                value: 'Displays a list of all commands',
                inline: false,
                },
                
                {
                name: '/random {player}',
                value: 'Lets players in the crew session know to vote kick the random. Ex: /random Rooked--',
                inline: false,
                },
                {
                name: '/griefer',
                value: 'Lets players in the crew session know that a griefer is in the crew lobby.',
                inline: false,
                },
                {
                name: '/tryhard',
                value: 'Lets players in the crew session know that a tryhard is in the crew lobby who is using god mode.',
                inline: false,
                },
            ],
            footer: {
                text: 'The Gamer Nexus',
                icon_url: 'https://i.imgur.com/dkKFHsj.png',
            },
        };
        message.channel.send({ embed: helpEmbed});
    }
}
