<template>
    <div id="pokedex-wrapper">
        <h3>Pokemon Detail</h3>
        <PokemonDetail />
    </div>
</template>

<script>
// @ is an alias to /src
import PokemonDetail from '@/components/PokemonDetail/PokemonDetail.vue'

export default {
  name: 'ViewPokemon',
  components: {
    PokemonDetail
  }
}
</script>
