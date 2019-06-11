<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: insufficientQuantity}">
                </div>
                <div class="pull-rig">
                    <button 
                        class="btn btn-primary"
                        @click.prevent="sellStock"
                        :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)">{{ insufficientQuantity ? 'Not enough' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {


    props: ['stock'],
    data () {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock',
        }),
        ...mapGetters(['funds']),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockName: this.stock.name,
                stockPrice: this.stock.price,
                quantity:  this.quantity
            };
            this.placeSellOrder(order);
            this.quantity = 0; 
        }
        // checkSellable () {
        //     this.funds 
        // }
    },
    computed: {
        insufficientQuantity () {
            return this.quantity > this.stock.quantity;
        }
    }
}
</script>

<style scoped>
    .danger{
        border: solid 1px red;
    }
</style>
