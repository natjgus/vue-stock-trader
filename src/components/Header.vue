<template>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <router-link to="/" class="navbar-brand">StockTrader</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav mr-auto">
                    <router-link to="/portfolio" tag="li" activeClass="active"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" tag="li" activeClass="active"><a>Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li 
                    class="dropdown" 
                    :class="{open: isDropDownOpen}" 
                    @click="isDropDownOpen = !isDropDownOpen">
                        <a 
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item"><a href="#" @click="saveData">Save Data</a></li>
                            <li class="dropdown-item"><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';
export default {
    data (){
        return {
            isDropDownOpen: false
        }
    },
    computed: {
        funds () {
            return this.$store.getters.funds;
        }
    },
    methods: {
            ...mapActions({
            randomizeStocks: 'randomizeStocks',
            // need to change the name of this function since we have one of the same name
            fetchData: 'loadData'
            }),
        endDay () {
            this.randomizeStocks();
        },
        saveData() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            axios.put('data.json', data)
            .then(alert("Data Saved"))
            .catch(alert("Error"))
        },
        loadData() {
            this.fetchData();
        }
    }
}
</script>

<style>

</style>
