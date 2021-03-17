const ping = {
    name: 'ping',
    description: 'Ping!',

    execute(message, args) {
            message.channel.send('__〆(￣ー￣ )\nDoing some maths real quick...')
        .then(result => {
            const ping = result.createdTimestamp - message.createdTimestamp;

            result.edit(`Bot's ping: ${ping},\nAPI's ping: ${message.client.ws.ping}`);
        });
    },

};

module.exports = ping;