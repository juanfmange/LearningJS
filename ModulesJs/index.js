const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const main = async () => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let {
        data: { results }
    } = response;
    let personajes = results.map((personajes) => {
        return {
            id: personajes.id,
            name: personajes.name,
            status: personajes.status,
            species: personajes.species,
        };
    }).map((personaje) => Object.values(personaje).join(','))
        .join('\n');
    //console.log(path.join(__dirname,'data.csv'));
    await fs.writeFile(path.join(__dirname, 'data.csv'), personajes)
//    console.log(personajes);
};

main();