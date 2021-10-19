const axios = require("axios");
const baseURL = "https://pokeapi.co/api/v2";

export async function getPokemons(filter) {
    let response = await axios.get(`${baseURL}/pokemon?offset=${filter.offset}&limit=${filter.limit}`);
    let pokemon = [];
    if(response.data.results.length > 0) {
        for(let i = 1; i <= response.data.results.length; i++) {
            let getDetail = await axios.get(`${baseURL}/pokemon/${i}`);
            pokemon.push(getDetail.data);
        }
    }
    return pokemon;
}

export async function searchPokemon(pokemon) {
    let response = await axios.get(`${baseURL}/pokemon/${pokemon}`); 
    console.log(response);
}