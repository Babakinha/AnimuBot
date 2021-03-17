const ping = {
    name: 'ping',
    description: 'Ping!',

    execute(message, args) {
        throw Error('TestError');
    },

};

module.exports = ping;