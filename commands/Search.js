const anime = require('@freezegold/anime.js');

const search = {
    name: 'search',
    description: 'Search anime',

    execute(message, args) {
        message.channel.send('(￣▽￣*)ゞ\nLooking for it....')
            .then(result => {

                const query = args.join(" ");

                anime.searchAnime(query, 1).then(res => {
                    let title;
                    if(res[0].titles.english) title = res[0].titles.english;else if(res.titles.romaji) title = res[0].titles.romaji; else title = res[0].titles.japanese;

                    result.edit(`Title:${title}\nSynopsis:${res[0].synopsis}`);
                });
        
            });
    }
    // TODO: add interaction implementation
};

module.exports = search;