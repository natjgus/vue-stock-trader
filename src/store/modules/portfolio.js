const state = {
    funds: 10000,
    // stocks are the ones in our portoflio, not all available
    stocks: []
};

const mutations = {
    // *All mutations get the state
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}){
        // check to see if there is a record of that stock
        // find lets us look for an item in the array
        // it take a function as the argument where the element is passed in automatically
        //if the element.id matches the stockId the find will return true, if not false
        const record = state.stocks.find(element => element.id == stockId);
        // if there is a record we do not want to add new item to Array, instead we want to add to existing
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id = stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        // Here we just need to set the current state funds/stocks to the funds from our database
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    // We are injecting the getters to allow for accessing the stocks on the stocks array in the module
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            // const record = getters.stockById(stock.id);
            const record= getters.stocks.find(element => {
                // element.id is array from the stock module, not just in the stocks portfolio
                // stock.id is the id we are currently at in our map method
                return element.id == stock.id
            });
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
    }
};

export default{
    state, 
    mutations,
    actions,
    getters
}