import { expect } from 'chai';
import hre from 'hardhat';

describe('ERC777FixedSupplyOpenZeppelin', () => {
    it('Should set the correct contract features', async () => {
        const ERC777 = await hre.ethers.getContractFactory('ERC777FixedSupplyOpenZeppelin');
        const erc777 = await ERC777.deploy(10000, []);
        // assert that decimals are '18'
        expect(await erc777.decimals()).to.equal(18);
        expect(await erc777.name()).to.equal('Gold');
        expect(await erc777.symbol()).to.equal('GLD');
    });
    it('Should transfer 200 GLD', async () => {
        const ERC777 = await hre.ethers.getContractFactory('ERC777FixedSupplyOpenZeppelin');
        const erc777 = await ERC777.deploy(1000, []);
        const [addr1, addr2] = await hre.ethers.getSigners();
        await erc777.send(addr2.address, 200, []);
        expect(await erc777.balanceOf(addr1.address)).to.equal(800);
        expect(await erc777.balanceOf(addr2.address)).to.equal(200);
    });
})