const fetch = require('node-fetch');
const coinGecko = require('coingecko-api');
const coinGeckoClient = new coinGecko();

const api = {};

api.fetchData = (req, res, next) => {
    const wallet = req.body.wallet;
    let token = req.body.token.toUpperCase();
    let results;
    const body = JSON.stringify({
        sql: "SELECT one.block_number, one.quantity, one.to_address, one.from_address, one.timestamp, two.symbol FROM ethereum.token_transfers AS one LEFT JOIN ethereum.tokens AS two ON one.contract_address = two.contract_address WHERE two.symbol = '{{token}}' AND (one.from_address = '{{wallet_address}}' OR one.to_address = '{{wallet_address}}') ORDER BY one.block_number ASC;",
        parameters: {
            token: token,
            wallet_address: wallet
        }
    });

    fetch('https://api.transpose.io/sql', {
	method: 'POST',
	body: body,
	headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'WbmQyvuapelJYhuZEThTusUGPyGJ8Mez'
    }
    })
    .then((data) => data.json())
    .then((response) => {
        results = response.results;
        let start;
        let end;
        for (let i = 0; i < results.length; i++) {
            const ele = results[i];
            const date = ele.timestamp.slice(0, 10);
            ele.timestamp = Math.floor(new Date(date).getTime());
            ele.type = ele.from_address === wallet ? "sell" : "buy";
            ele.quantity = Number(ele.quantity.toString().slice(0, -18));
        }
        start = results[0].timestamp / 1000;
        end = (Math.floor(new Date().getTime() / 1000));
        token = token.toLowerCase();
        return coinGeckoClient.coins.fetchMarketChartRange(token, {
            from: start,
            to: end
          });
    })
    .then((info) => {
        let a = 0;
        let b = 0;
        const prices = info.data.prices;
        while (a < results.length && b < prices.length) {
            if (prices[b][0] > results[a].timestamp) {
                results[a].price = Math.floor(prices[b][1]);
                a++;
            }
            b++;
        }
        res.locals.response = results;
        return next();
    })
    .catch((err) => {
        return next({err: err})
    });
}

module.exports = api;
