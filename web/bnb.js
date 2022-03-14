let bnbws = new WebSocket( 'wss://stream.binance.com:9443/ws/bnbusdt@trade');
let bnb = document.getElementById('bnbcoin');
let lastPriceBNB = null;
bnbws.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          bnb.innerText = price; 
          bnb.style.color = !lastPriceBNB || lastPriceBNB === price ? 'black' : price > lastPriceBNB ? 'green' : 'red';
          lastPriceBNB = price;
};