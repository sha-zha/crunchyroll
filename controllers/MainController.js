let controller = {};
let fetch = require('node-fetch');

controller.index = async (req,res) => {
    res.render('liste', { title: 'Crunchyroll' });
};

controller.listing = async(req,res) => {
    const response = await fetch('https://graphql.anilist.co/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            query: `
       query {
  Page(page:2,perPage:25){
    pageInfo{total, perPage, currentPage, lastPage, hasNextPage}
     media { id, type, title { romaji }, season, episodes, status,coverImage {
       extraLarge
       large
       medium
       color
    },genres } 
  }
}
      `,
        }),
    });

    const { data } = await response.json();

    return data;
};

module.exports = controller;