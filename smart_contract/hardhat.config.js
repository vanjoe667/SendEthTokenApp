require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/qXSqcWnf8Zg09scohqyc3ijK7EDt6oO9',
      accounts: [
        '306edef85411e6f660bd9330b419dd4d52751ef62b81c50b08f9214e0ba47263'
      ]
    }
  }
};
