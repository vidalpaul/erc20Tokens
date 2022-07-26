import { expect } from 'chai';
import hre from 'hardhat';

describe('ERC777FixedSupplyOpenZeppelin', () => {
    it('Should set the correct contract features', async () => {
        const ERC777 = await hre.ethers.getContractFactory('ERC777FixedSupplyOpenZeppelin');
        const [addr1, addr2] = await hre.ethers.getSigners();
        const erc777 = await ERC777.deploy(10000, []);
        // assert that decimals are '18'
        expect(await erc777.decimals()).to.equal(18);
        expect(await erc777.name()).to.equal('Gold');
        expect(await erc777.symbol()).to.equal('GLD');
    });
})