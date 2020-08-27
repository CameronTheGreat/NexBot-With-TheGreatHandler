 module.exports = {
        config: {
          name: "queue",
          description: "help",
          usage: "/queue",
          category: "miscellaneous",
          accessableby: "Members",
        },
        run: async (bot, message, args) => {
        if (!args.length) {
            return message.channel.send(`Please input the businesses being sold!`);
        }
        message.channel.send('Businesses added to the queue.')
        const queueEmbed = {
            color: 0xac20da,
            author: {
                name: 'Sales Queue',
            },
            description: `${message.author} has sales ready! \n ${args}`,
            footer: {
                text: 'The Gamer Nexus',
                icon_url: 'https://i.imgur.com/dkKFHsj.png',
            },
        }
        message.guild.channels.cache.get('747231636260651149').send({ embed: queueEmbed})
        .then(async queue =>{
            await queue.react('⏹️')
            const filter = (reaction, user) => user.id == message.author.id
            const collector = queue.createReactionCollector(filter);
            collector.on('collect', (r, user) => {
            if (r === '⏹️') return;
                queue.delete().catch(console.error('There was an error deleting that message'))
            })
        })   
    }
    }
