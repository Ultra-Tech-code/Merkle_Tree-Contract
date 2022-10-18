require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


const ALCHEMY_ROPSTEN_API_KEY_URL = process.env.ALCHEMY_ROPSTEN_API_KEY_URL;
const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;
//contract address key
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;
//beneficial address key
const ACCOUNT_PRIVATE_KEY2 = process.env.ACCOUNT_PRIVATE_KEY2;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    forking:{
      URL: ALCHEMY_ROPSTEN_API_KEY_URL,
    },
    ropsten: {
      URL: ALCHEMY_ROPSTEN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY2]

    },
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
  },
};
