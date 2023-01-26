<script>

import axios from 'axios';
import { store } from './data/store.js';
import { types } from './data/store.js';

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {

    components: { AppHeader, AppMain },

    data() {
        return {
            store,
            types
        }
    },

    methods: {
        filterPokemon(type) {
            console.log(type);

            const url = type ? `https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?eq[type1]=${type}` : store.apiUri;
            this.created(url)

        },

    },

    created() {
        axios.get("https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1")
            .then((response) => {
                store.pokemon.push(...response.data.docs);
            })
    }

};



</script>

<template>
    <header>
        <AppHeader @filter-change="filterPokemon"></AppHeader>
    </header>

    <main>
        <AppMain></AppMain>
    </main>


</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
