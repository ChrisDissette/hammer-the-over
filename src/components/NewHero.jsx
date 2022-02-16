import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TestChart from '../assets/chart.png'


const NewHero = () => {
  return (
    <div>
        <Box minHeight='90vh' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Typography variant='h4' color='white' gutterBottom>Official Website</Typography>
            <Typography variant='h2' fontWeight='bold'>Meet The</Typography>
            <Typography variant='h1' fontWeight='bold' color='primary.main'>Hammerheads</Typography>
        </Box>
    </div>
  )
  
};

export default NewHero;
