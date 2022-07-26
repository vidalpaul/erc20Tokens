import { expect } from 'chai';
import hre from 'hardhat';

describe('ERC20FixedSupplyOpenZeppelin', () => {
    it('Should set the correct decimals', async () => {
        const FixedSupply = await hre.ethers.getContractFactory('ERC20FixedSupplyOpenZeppelin');
        const fixedSupply = await FixedSupply.deploy();
        // assert that decimals are '18'
        expect(await fixedSupply.decimals()).to.equal(18);
        expect(await fixedSupply.name()).to.equal('FixedSupply');
        expect(await fixedSupply.symbol()).to.equal('FIX');
    });
    it('Should transfer 200 Fix', async () => {
        const FixedSupply = await hre.ethers.getContractFactory('ERC20FixedSupplyOpenZeppelin');
        const fixedSupply = await FixedSupply.deploy();
        const [addr1, addr2] = await hre.ethers.getSigners();
        await fixedSupply.transfer(addr2.address, 200);
        expect(await fixedSupply.balanceOf(addr1.address)).to.equal(800);
        expect(await fixedSupply.balanceOf(addr2.address)).to.equal(200);
    })
});

