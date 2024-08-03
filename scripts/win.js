// scripts/callIntermediary.js
async function main() {
  // Replace with your deployed Intermediary contract address
  const intermediaryAddress = "0x345Ff1769DdB7B006743f1F07FEcaf5Cc5C8F563";

  // Get the Intermediary contract factory and attach to the deployed address
  const intermediary = await ethers.getContractAt("Intermediary", intermediaryAddress);

  // Call the callTarget function of the Intermediary contract
  const tsx = await intermediary.addr();
  console.log("Address of target contract: ", tsx);
  const tx = await intermediary.callOtherContract();
  await tx.wait();
  console.log("callTarget function called on Intermediary");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
