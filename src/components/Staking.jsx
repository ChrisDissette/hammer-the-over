import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Staking = () => {
  return (
    <Box className='banner-box' height={300} display='flex' alignItems='center' justifyContent=
    'center' flexDirection='column' id='staking'>
        <Typography variant='h3' color='white' mb={5}>Staking</Typography>
        <Typography variant='h3' color='white' mb={3}>coming soon...</Typography>
        <a href="https://discord.com/invite/fQtARAKgKM" target='_blank'>
          <Button variant='contained' sx={{borderRadius:'25px', width:250, height:50, color:'white', fontWeight:'bold'}}>JOIN NOW</Button>
        </a>
    </Box>
  )
}

export default Staking