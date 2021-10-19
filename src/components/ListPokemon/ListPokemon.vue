<template src="./ListPokemon.html"></template>
<style lang="scss" src="./ListPokemon.scss"></style>
<script>

import {
    getPokemons
} from '../../services/pokedex/PokedexService.js'

export default {
    name: 'ListPokemon',
    data() {
        return {
            page_title: 'My Pokedex',
            searchPokemon: "",
            filter: {
                offset: 0,
                limit: 10
            },
            isLoading: true,
            pokemons: []
        }
    },
    methods: {
        init() {
            this.loadPokemons();
        },
        async loadPokemons(filter) {
            let response = await getPokemons(this.filter);
            if(response && response.length > 0) {
                const pokemon = response.map(data => ({
                    id: data.id,
                    pokemon_name: data.name.toUpperCase(),
                    pokemon_img: data.sprites.front_default,
                    pokemon_types: data.types.map(type => type.type.name).join(", "),
                    pokemon_abilities: data.abilities.map(ability => ability.ability.name).join(", "),
                    link: `/view-pokemon/${data.id}`
                }));
                this.pokemons.push(pokemon)
            }
            this.isLoading = false;
        },
        searchKeyword() {
            let keyword = this.searchPokemon;
            console.log(keyword);
        },
        async loadMore() {
            this.filter.offset += 10;
            let response = await getPokemons(this.filter);
            console.log(response)
        }
    },
    mounted() {
        this.init();
    }
}
</script>