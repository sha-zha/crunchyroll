let controller = {};
let fetch = require('node-fetch');
let perPage = 9;
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
  Page(page:1,perPage:${perPage}){
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

    res.status(200).json(data);
};
controller.listingPag = async(req,res) => {
    const page = req.params.page;

    if(Number.isInteger(Number(page))){
        const response = await fetch('https://graphql.anilist.co/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: `
       query {
  Page(page:${page},perPage:${perPage}){
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

        res.status(200).json(data);
    }
};
controller.show = async (req,res) =>{
    res.render('show', {title:'Crunchyroll'});
};
controller.showing = async(req,res) => {
    const id = req.params.id;

    if(Number.isInteger( Number(id)) ) {

        const response = await fetch('https://graphql.anilist.co/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query: `
       query {
 
     Media (id: ${id}){ id, type, title { romaji }, episodes, status,coverImage {
       extraLarge
       large
       medium
       color
    },genres,description } 
}
      `,
            }),
        });

        const {data} = await response.json();

        res.status(200).json(data);
    }
};

module.exports = controller;