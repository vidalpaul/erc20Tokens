import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-erc1820"; //for ERC777 deployment

const config: HardhatUserConfig = {
  solidity: "0.8.15",
};

export default config;
