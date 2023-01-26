
import { reactive } from 'vue';

export const store = reactive({
    type: [],
    pokemon: [],
    apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1'
})

export const types = reactive({

    types: [],
    apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1'
});