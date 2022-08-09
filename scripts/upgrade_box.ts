// scripts/upgrade_box.js
import { ethers, upgrades } from 'hardhat';

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', BoxV2);
  console.log('Box upgraded');
}

main();