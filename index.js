const axios = require('axios');

const main = async() => {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    let {
        data: { name }
    } = response;
    console.log(name);
}

main()