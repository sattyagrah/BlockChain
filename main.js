const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "7eff855c5a703d0a9c8f5b59fc37fbaedffe46c837fc24dc18f0d8efb3ff6aad"
);
const myWalletAddress = myKey.getPublic("hex");

let blockchain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);

blockchain.addTransaction(tx1);

console.log("\n Starting the miner...");
blockchain.minePendingTransactions(myWalletAddress);

console.log(
  "\n Balance of Satyanshu is :",
  blockchain.getBalanceOfAddress(myWalletAddress)
);
