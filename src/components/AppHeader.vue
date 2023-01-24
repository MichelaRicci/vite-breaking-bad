<script>

</script>

<template>

    <div class="container">

        <div class="row justify-content-between">
            <div class="col">
                <div class="d-flex circle-container">
                    <div class="circle big-circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>

            <div class="col">
                <img src="src/assets/img/logo-pokemon.png" alt="logo-pokemon">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
img {
    width: 300px;
}

.circle-container {

    padding: 10px;


    .circle {
        margin: 0 5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid white;
    }

    .big-circle {

        width: 100px;
        height: 100px;

    }
}
</style>
