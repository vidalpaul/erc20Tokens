import { expect } from 'chai';
import hre from 'hardhat';

describe('ERC20MintableBurnableOpenZeppelin', async () => {
    const ERC20MintableBurnableOpenZeppelin = await hre.ethers.getContractFactory('ERC20MintableBurnableOpenZeppelin');
        const erc20MintableBurnableOpenZeppelin = await ERC20MintableBurnableOpenZeppelin.deploy();
    it('Should set the correct decimals', async () => {
        // assert that decimals are '18'
        expect(await erc20MintableBurnableOpenZeppelin.decimals()).to.equal(18);
    });
    it('Should set the correct name and symbol', async () => {
        expect(await erc20MintableBurnableOpenZeppelin.name()).to.equal('Burnable');
        expect(await erc20MintableBurnableOpenZeppelin.symbol()).to.equal('BRB');
    })
})