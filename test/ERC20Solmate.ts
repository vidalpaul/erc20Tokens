import { expect } from 'chai';
import hre from 'hardhat';

describe('ERC20Solmate', () => {
    it('Should set the correct decimals', async () => {
        const ERC20Solmate = await hre.ethers.getContractFactory('ERC20Solmate');
        const erc20Solmate = await ERC20Solmate.deploy();
        // assert that decimals are '18'
        expect(await erc20Solmate.decimals()).to.equal(18);
        expect(await erc20Solmate.name()).to.equal('Solmate');
        expect(await erc20Solmate.symbol()).to.equal('SMT');
    });
});