import { expect } from 'chai';
import hre from 'hardhat';

describe('ERC20MinerRewardOpenZeppelin', () => {
    it('Should set the correct decimals', async () => {
        const MinerReward = await hre.ethers.getContractFactory('ERC20MinerRewardOpenZeppelin');
        const minerReward = await MinerReward.deploy();
        // assert that decimals are '18'
        expect(await minerReward.decimals()).to.equal(18);
        expect(await minerReward.name()).to.equal('MinerReward');
        expect(await minerReward.symbol()).to.equal('MRW');
    });
    it('Should transfer 200 MRW', async () => {
        const MinerReward = await hre.ethers.getContractFactory('ERC20MinerRewardOpenZeppelin');
        const minerReward = await MinerReward.deploy();
        const [addr1, addr2] = await hre.ethers.getSigners();
        await minerReward.transfer(addr2.address, 200);
        expect(await minerReward.balanceOf(addr1.address)).to.equal(800);
        expect(await minerReward.balanceOf(addr2.address)).to.equal(200);
    })
});

