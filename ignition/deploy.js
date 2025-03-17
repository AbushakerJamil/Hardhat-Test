const { ethers, run, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  // console.log(SimpleStorageFactory);
  
  const simpleStorage = await SimpleStorageFactory.deploy(); // ✅ Correct usage
  // await simpleStorage.waitForDeployment(); // ✅ Correct method to wait for deployment
  
  console.log("Contract deployed at:", simpleStorage.target); // ✅ Print contract address
  // console.log(network.config);
  const currettValue = await simpleStorage.retrieve();
  console.log(`current Value is:${currettValue}`);

  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updateValue = await simpleStorage.retrieve();
  console.log(`Updated Value is:${updateValue}`);
  
  
}

// async function verify(contractAddress, arg) {
//   console.log("verify func....")
//   try {
//     await run("verify:verify",{
//       address: contractAddress,
//       constructorArguments: arg
//     })
//   } catch (e) {
//       if(e.message.toLowerCase().includes(
//         "alredy verifyed"
//       ))
//       console.log("alredy verifyed");
//       else{
//         console.log(e);
//       }
      
//   }

// }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
