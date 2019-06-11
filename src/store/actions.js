import axios from 'axios';

export const loadData = ({ commit }) => {
    axios.get('/data.json')
    .then((response) => response.data)
    .then(data => {
        // if data exists assign it to our state
        if (data) {
            const stocks = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;

            // now we want to create a new portfolio with the data from the server
            // this will be the same as the portfolio we set up in the portfolio.js state file
            const portfolio = {
                stockPortfolio,
                funds
            };
            // now we need to commit our mutations to make changes in the app
            // SET_STOCKS is in our stocks.js file, need to pass the stocks as well
            // SET_PORTFOLIO is in our portfolio.js file, need to pass the portfolio
            commit('SET_STOCKS', stocks);
            commit('SET_PORTFOLIO', portfolio);
        }
    });
};