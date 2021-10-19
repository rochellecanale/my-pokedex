<template src="./PokemonDetail"></template>
<script>
export default {
    name: 'PokemonDetail',
    data() {
        return {
            page_title: 'Pokemon Detail',
        }
    },
    methods: {
        init() {
            console.log('App init');
            this.loadDetail();
        },
        async loadDetail() {
            
        }
    },
    mounted() {
        this.init();
    }
}
</script>