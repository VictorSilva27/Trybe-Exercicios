// api.js
const fetchCoins = async () => {
    const urlCoins = 'https://api.coincap.io/v2/assets';
    const coins = await fetch(urlCoins)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    return coins;
}

const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const usdEndpoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(usdEndpoint);

    const usdCurrencies = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.usd)
        .catch((error) => error.toString());

    return usdCurrencies;
};

const setCoinsBrl = async () => {
    const coins = await fetchCoins();
    const usdCurrencies = await fetchUsdCurrencies();
    const coinsList = document.getElementById('coins-list2');
    coins
        .filter((coin) => Number(coin.rank) <= 10)
        .forEach((coin) => {
            const newLi = document.createElement('li');
            const usdPrice = Number(coin.priceUsd);
            const brlPrice = usdPrice * usdCurrencies.brl;

            newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

            coinsList.appendChild(newLi);
        });
    const coinsListUsd = document.getElementById('coins-list');
    coins
        .filter((coin) => Number(coin.rank) <= 10)
        .forEach((coin) => {
            const newLi = document.createElement('li');
            newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
            coinsListUsd.appendChild(newLi);
        });
};
window.onload = setCoinsBrl;