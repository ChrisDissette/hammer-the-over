import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SharkOne from '../assets/profileshark.jpg'
import SharkTwo from '../assets/shark1.jpg'
import SharkThree from '../assets/shark2.jpg'
import SharkFour from '../assets/shark3.jpg'
import SharkFive from '../assets/shark4.jpg'
import SharkSix from '../assets/shark5.jpg'



const Community = () => {
    return (
        <Box 
            minHeight='100vh' 
            bgcolor='secondary.main' 
            border='1px solid black' 
            width='85%' 
            margin='0 auto'
        >
            <Box height={200} display='flex' alignItems='center' justifyContent='flex-start' width='70%' marginTop={15} marginBottom={7} marginLeft={18}>
                <Typography variant='h1' color='primary'>What makes Hammerheads unique.</Typography>
            </Box>
            <Box display='flex' width='85%' margin='0 auto'>
                <Box width='50%' minHeight={400} display='flex' flexDirection='column' justifyContent='center' alignItems='left' px={5}>
                    <Typography variant='h3' color='white' gutterBottom>Overview</Typography>
                    <Typography variant='h5' color='white'>With the coming metaverse & 3D VR wave we are trying to get out in front! We also want to get away from the 8bit derivative art we currently use. Initially, the art was a meme on the NFT markets trend, but it kept us from reaching our potential. We decided to seek new heights and try something entirely unlike any other NFT project.</Typography>
                </Box>
                <Box 
                    width='50%' 
                    minHeight={400}
                    mx={5}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                        <Grid item xs={6}>
                        <img className='grid-shark' src={SharkFour} />
                        </Grid>
                        <Grid item xs={6}>
                        <img className='grid-shark' src={SharkThree} />
                        </Grid>
                        <Grid item xs={6}>
                        <img className='grid-shark' src={SharkFive} />
                        </Grid>
                        <Grid item xs={6}>
                        <img className='grid-shark' src={SharkTwo} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Community;
