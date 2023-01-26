<script>

import { types } from '../data/store';

export default {
    name: 'Tendina',

    data() {

        return {
            types,
            selectedOption: ''
        }
    }
};

</script>


<template>

    <select v-model="selectedOption" @change="$emit('option-change', selectedOption)">
        <option value="">Seleziona...</option>
        <option v-for="option in types.types" :key="option" value="option">{{ option }}</option>
    </select>

</template>