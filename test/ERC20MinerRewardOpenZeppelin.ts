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
});

