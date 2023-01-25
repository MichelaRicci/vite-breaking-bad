<script>
import { store } from '../data/store.js';


export default {

    pokemon: [],
    apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1',

    data() {
        return {
            store,

        }
    },
}

</script>

<template>

    <div class="container rounded-4 bg-white" id="main-box">

        <div class="" id="gallery">

            <div class="row row-cols-5">

                <div class="card" v-for="pokemon in store.pokemon" :key="pokemon.id">
                    <div> {{`#${pokemon.number}`}} </div>
                    <div class="img-container d-flex justify-content-center"><img :src=pokemon.imageUrl alt=""></div>
                    <div>{{ pokemon.name }}</div>
                    <div>{{ pokemon.type1 }}</div>
                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.card {
    width: 200px;
    height: 300px;
    background-color: #ffffff;

    margin: 15px;

}

img {
    border-radius: 50%;

    object-fit: cover;
    width: 150px;
    height: 150px;
}
</style>
