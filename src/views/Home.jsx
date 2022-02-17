import Header from '../components/Header'
import Hero from '../components/Hero'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Community from '../components/Community'
import ImgCarousel from '../components/ImgCarousel'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import NewHero from '../components/NewHero'
import Chart from '../components/Chart'
import Roadmap from '../components/Roadmap';
import Team from '../components/Team'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Box className='everything'>
                    <Header />
                    <NewHero />
                    <ImgCarousel />
                    <Roadmap />
                    <Banner />
                    <Chart />
                    <Team />
                    <Footer />
            </Box>
        </div>

    );
};

export default Home;
