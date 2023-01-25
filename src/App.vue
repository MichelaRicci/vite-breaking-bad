<script>

import axios from 'axios';
import { store } from './data/store.js'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {

    components: { AppHeader, AppMain },



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
        <AppHeader></AppHeader>
    </header>

    <main>
        <AppMain></AppMain>
    </main>


</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
