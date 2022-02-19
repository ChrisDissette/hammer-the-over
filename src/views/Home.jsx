import Header from '../components/Header'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Banner from '../components/Banner'
import NewHero from '../components/NewHero'
import Chart from '../components/Chart'
import Roadmap from '../components/Roadmap';
import Team from '../components/Team'
import Footer from '../components/Footer'
import Staking from '../components/Staking'
import ImgScroll from '../components/ImgScroll'
import MobileNav from '../components/MobileNav'
import MobileHero from '../components/MobileHero';

import { layoutGenerator } from 'react-break';


const layout = layoutGenerator({
    mobile: 0,
    phablet: 600,
    tablet: 900,
    desktop: 1200,
    tv: 1536
});


const OnMobile = layout.is('mobile')
const OnAtMostPhablet = layout.is('phablet')
const OnAtLeastTablet = layout.is('tablet')
const OnDesktop = layout.isAtLeast('desktop')

const Home = () => {
    return (
        <div>
            <Box className='everything'>
                
                <OnMobile>
                    <MobileNav />
                </OnMobile>

                <OnAtMostPhablet>
                <MobileNav />
                </OnAtMostPhablet>

                <OnAtLeastTablet>
                    <Header />
                </OnAtLeastTablet>

                <OnDesktop>
                    <Header />
                </OnDesktop>

                <OnMobile>
                    <MobileHero />
                </OnMobile>

                <OnAtMostPhablet>
                    <NewHero />
                </OnAtMostPhablet>

                <OnAtLeastTablet>
                    <NewHero />
                </OnAtLeastTablet>

                <OnDesktop>
                    <NewHero />
                </OnDesktop>

                <ImgScroll />
                <Roadmap />
                <Banner />
                <Chart />
                <Team />
                <Staking />
                <Footer />
            </Box>
        </div>

    );
};

export default Home;
