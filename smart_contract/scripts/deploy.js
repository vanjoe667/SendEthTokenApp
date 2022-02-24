const main = async()=>{
    const transactionFactory = await hre.ethers.getContractFactory('Transactions');
    const transactionContract = await transactionFactory.deploy()

    await transactionContract.deployed()

    console.log("Transaction was deployed to: ",transactionContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});

// ;(async () =>{
//     try {
//         await main()
//         process.exit(0)
//     } catch (error) {
//         console.log('there was an error deploy',error);
//         process.exit(1)
//     }
// })()