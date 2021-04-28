const { Mal } = require('node-myanimelist');

const ping = {
    name: 'malsearch',
    description: 'Search using node-myanimelist',

    execute(message, args) {
            message.channel.send('__〆(￣ー￣ )\nSearching here some maths real quick...')
        .then(async result => {
            let searchIDC = await message.malclient.manga.search(
                args.join(" "),
                Mal.Anime.fields().all()
             ).call();

            result.edit(`Title:${searchIDC.data[0].node.title}\n\nSynopsis:${searchIDC.data[0].node.synopsis}`);
        });
    }

};

module.exports = ping;