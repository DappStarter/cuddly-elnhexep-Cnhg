require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name razor random snack grace segment foster gather'; 
let testAccounts = [
"0x98c51268472832a5676fc89ecd17f22d7c6b8fb16e5a16e70c1a8edceb0913e6",
"0xa33914f78a346ebc222647a1433d5fd5e5de7665e89fe8dfdd02e436ca096ad0",
"0xcb72c0117d737a2373d06f86ff574eabb4d3319ed0794e30cbf3a0a828027050",
"0x55fe4b94a18ee53830809f5738f1a017bbec5547b47ade5835d928cc402b9241",
"0xe8c2b5dbc08b0586ea9e214037920967fc671a8964f03d5495b60fb38f2a678b",
"0x931deb6e2b3c72b3f96b9761542e7b10700710851d36ee784c05665704718913",
"0x72f2cd92f304f65cc1ae10b3c4253dc80cfac4ead3eac0f664082707c65a0bed",
"0xbfb027935cf551bf9125dc69ff03b5f1d88b2f977730a0b0b85858449fa36162",
"0x22097abfb0eddffac166fc1992879a43748cec1cde6fc8da74ca93948d490eff",
"0x530d2b1bbbb67ebbcb50629d3d233376c843e481eeb9702d8af361b118131b12"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

