import { expect } from 'chai';
import hre from 'hardhat';

describe('ERC20FixedSupplyOpenZeppelin', () => {
    it('Should set the correct decimals', async () => {
        const FixedSupply = await hre.ethers.getContractFactory('ERC20FixedSupply');
        const fixedSupply = await FixedSupply.deploy();
        // assert that decimals are '18'
        expect(await fixedSupply.decimals()).to.equal(18);
        expect(await fixedSupply.name()).to.equal('FixedSupply');
        expect(await fixedSupply.symbol()).to.equal('FIX');
    });
});

