import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Banner = () => {
    return (
        <div>
            <Box height={500} border='1px solid pink' bgcolor='blue' display='flex' alignItems='center' justifyContent=
            'center' flexDirection='column'>
                <Typography variant='h3' color='white'>JOIN ON OUR DISCORD</Typography>
                <Typography variant='h3' color='white' mb={5}>Hammer the Over</Typography>
                <Button variant='contained' sx={{borderRadius:'25px', width:250, height:50}}>JOIN NOW</Button>
            </Box>
        </div>
        ) 
};

export default Banner;
