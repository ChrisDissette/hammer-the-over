import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Banner = () => {
    return (
        <div>
            <Box className='banner-box' height={500} display='flex' alignItems='center' justifyContent=
            'center' flexDirection='column'>
                <Typography variant='h3' color='white'>JOIN ON OUR DISCORD</Typography>
                <Typography variant='h3' color='white' mb={5}>Hammer the Over</Typography>
                <a href="https://discord.com/invite/fQtARAKgKM" target='_blank'>
                    <Button variant='contained' sx={{borderRadius:'25px', width:250, height:50, color:'white', fontWeight:'bold'}}>JOIN NOW</Button>
                </a>
            </Box>
        </div>
        ) 
};

export default Banner;
