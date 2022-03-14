let ethws = new WebSocket( 'wss://stream.binance.com:9443/ws/etheur@trade');
let eth = document.getElementById('ethereum');
let lastPriceETH = null;
ethws.onmessage = (event) =>{
    let stockObject = JSON.parse(event.data);
          let price = parseFloat(stockObject.p).toFixed(2);
          eth.innerText = price; 
          eth.style.color = !lastPriceETH || lastPriceETH === price ? 'black' : price > lastPriceETH ? 'green' : 'red';
          lastPriceETH = price;
};