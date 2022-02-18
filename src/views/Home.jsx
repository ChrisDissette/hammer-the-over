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
import { Link as Scroll} from 'react-scroll'
import ImgScroll from '../components/ImgScroll'



const Home = () => {
    return (
        <div>
            <Box className='everything'>
                <Header />
                <NewHero />
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
