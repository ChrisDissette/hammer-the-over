import Header from '../components/Header'
import Hero from '../components/Hero'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Community from '../components/Community'
import ImgCarousel from '../components/ImgCarousel'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import NewHero from '../components/NewHero'

const useStyles = makeStyles({
    backgroundStyle: {
        height:'100vh'
    },
});

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Box>
                    <Header />
                    <NewHero />
                    <ImgCarousel />
                    <Community />
                    <Banner />
                    <Profile />
            </Box>
        </div>

    );
};

export default Home;
