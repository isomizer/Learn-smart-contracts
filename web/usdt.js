let usdtws = new WebSocket( 'wss://stream.binance.com:9443/ws/usdtbidr@trade');
let usdt = document.getElementById('usdt');
let lastPriceUSDT = null;
usdtws.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          usdt.innerText = price*0.00232232; 
          usdt.style.color = !lastPriceUSDT || lastPriceUSDT === price ? 'black' : price > lastPriceUSDT ? 'green' : 'red';
          lastPriceUSDT = price;
};