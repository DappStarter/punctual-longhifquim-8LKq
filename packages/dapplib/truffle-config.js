require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember mistake hover deputy bottom soap'; 
let testAccounts = [
"0x39d8bb4fd519dfb8920a86a3140286b17c2ad744cfba1359c5001a8039aa9251",
"0xba80034f6cd7d7334ac4e2d0f9e5caef7bb43e0f52d31d9ed9eab13de6c3019d",
"0xb378ffaa688ed4081bd58610110de04900e6149f456542b09e3c6ae4625fe940",
"0xfdd73d6d0ab654ac50b84e04eae8b02609862079ae2e5b24b39aecf247f941ca",
"0xe37568bbffc9c3d2341c4b957c4e662af6deb78ad1b084d70e98e4bb53148fbc",
"0x8265b29b7c21f779a30a88459fc375e077f6e5b09be6c4e226eb19edcff83dcd",
"0x1883aa8b133c727dcfab7521db9de9fca79dc58be8956ca1cf127c03fcffd545",
"0x862c9a02d44d55cd135ae42a116c363b1b618284c4ba545a214e768f57eaf5b9",
"0x894ce5079645c6049863877cfe092d7fd9209850dd1303b73b7c436187626a23",
"0x05c927bb9fada42b6b8caf30c4ff2a074ea45c40aad2949aac36c54236ec2647"
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

