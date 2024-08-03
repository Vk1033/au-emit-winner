const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Intermediary", (m) => {
  const contract = m.contract("Intermediary");

  return { contract };
});
