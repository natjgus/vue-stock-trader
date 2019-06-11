<template>
    <div>
        <!-- stocks below is referring to the getter which is a property on the state -->
        <!-- Need to pass stock as a prop because we expect it in the component portfolio/stock.vue -->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue'
    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style>

</style>
