document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apiUrl = 'https://api.api-ninjas.com/v1/exchangerate?pair=GBP_';

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        
        chrome.storage.local.get('apiKey',function(data) {
            const apiKey = data.apiKey;
            const url = apiUrl + currencyTotal;

            fetch(url, {
                headers: {
                    'X-API-KEY': apiKey
                }
            })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                const resultPrice = amountTotal * rate;
                result.innerHTML = `${amountTotal} GBP= ${resultPrice.toFixed(2)} ${currencyTotal}`;
            })
            .catch(error => {
                console.log('Request failed:', error);
                result.innerHTML = 'An error occurred';
            });
        });
    });
});


