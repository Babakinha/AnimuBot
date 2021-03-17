const TestError = {
    name: 'TestError',
    description: 'Made out Error',

    execute(message, args) {
        throw Error('TestError');
    },

};

module.exports = TestError;