const {ethers} = require('ethers');

//Address : 0xd7750c807e847B7f5a1A441B37fE9F2eEaFE9806 
//Private Key: 0x9701d7dca475db36df25587e7fbd5e4e89f357df88b8a35cf572e4d8cdfdb3d0
async function app(){

    // BSC RPC list: https://docs.binance.org/smart-chain/developer/rpc.html
    const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');

    const balance = await provider.getBalance('0xd7750c807e847B7f5a1A441B37fE9F2eEaFE9806');
    console.log('My BNB Balance is:', ethers.utils.formatEther(balance));

}

app();