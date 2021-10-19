<template>
    <div id="pokedex-wrapper">
        <h3>Pokedex</h3>
        <ListPokemon />
    </div>
</template>

<script>
// @ is an alias to /src
import ListPokemon from '@/components/ListPokemon/ListPokemon.vue'

export default {
  name: 'Pokedex',
  components: {
    ListPokemon
  }
}
</script>
