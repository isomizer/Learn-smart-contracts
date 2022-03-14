let btcws = new WebSocket( 'wss://stream.binance.com:9443/ws/btcusdt@trade/btcusdt@kilne_1d');


let btc = document.getElementById('bitcoin');
let bitpercent = document.getElementById('btcpercent');


let lastPriceBTC = null;

btcws.onmessage = (event) =>{
    console.info(btcws);
let stockObject = JSON.parse(event.data);
let price = parseFloat(stockObject.p).toFixed(2);
let perprice = parseFloat(stockObject.h).toFixed(2);
btc.innerText = price; 
bitpercent.innerText = ((price-perprice)/price)*100; 
btc.style.color = !lastPriceBTC || lastPriceBTC === price ? 'black' : price > lastPriceBTC ? 'green' : 'red';
lastPriceBTC = price;

};




