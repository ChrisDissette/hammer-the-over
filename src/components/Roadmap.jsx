import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Roadmap = () => {
  return (
    <>
    <Typography id='roadmap' variant='h1' textAlign='center' color='white' sx={{marginTop:7}}>Roadmap</Typography>

    <div class="container">

  <div class="timeline">
    <ul>
      <li>
        <div class="timeline-content">
          <h3 class="date">Q1</h3>
          <h1>Phase 1: Pre-mint</h1>
          <p>The first phase of the project will include launching twitter, discord, and the website. While we build our community, we will be actively working on the staking platform as well as our proprietary $CHUMM token.</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">Q2</h3>
          <h1>Phase 2: Mint and Whirlpool</h1>
          <p>The second phase will be the mint and whirlpool (liquidity pool) setup. There will be a total of 7,777 Hammerheads available at 1 SOL each. We will start the whirlpool with 2,777 SOL (roughly 300,000 $USDC) and 100,000 $CHUMM giving our utility token a value of 3 $USDC. At this point, hammerheads can be staked for 2 $CHUMM per day.</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">Q3</h3>
          <h1>Phase 3: Breeding and Burning</h1>
          <p>The third phase of the project will be the creation of Hammerpups which will yield 7 $CHUMM per day. There will be a total of 2,000 hammerpups and you will need to burn two Hammerheads to get one.</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">Q4</h3>
          <h1>Phase 4: More Utility</h1>
          <p>The 4th phase involves mutations. We will release 500 radioactive $CHUMM tokens and you will have to burn 100 $CHUMM to get one. It’s risky business feeding the glowing chum to your hammerhead, but the results could be worth it…. One of two things will happen….
          <br />
          <br />

          The most likely outcome? Your hammerhead’s body rejects the radioactive $CHUMM turning him into the undead scourge. The undead can’t survive without constant feeding so this guy will yield twice as much $CHUMM/Day as his living counterpart.
          <br />
          <br />
          HOWEVER…..
          <br />
          <br />
          There is a 10% chance that your hammerhead will start producing microbots, making them the ultimate APEX PREDATOR. These new hammerbots will yield a WHOPPING 10 $CHUMM/Day. Twice as much as any other hammerhead generation. 

          </p>
        </div>
      </li>
    </ul>
  </div>
</div>
</>
  )
}

export default Roadmap