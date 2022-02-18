import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const NewHero = () => {
  return (
    <div>
        <Box minHeight='90vh' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Typography textAlign='center' variant='h4' color='white' gutterBottom width={{xs:'70%', sm:'70%', md:'60%'}}>Official Website</Typography>
            <Typography variant='h2' fontWeight='bold' color={{xs:'white', sm:'white', md:'black'}}>Meet The</Typography>
            <div className="typewriter-container">
              <Typography className='typed-out' variant='h1' fontWeight='bold' color='primary.main'>Hammerheads</Typography>
            </div>
            <a href="https://discord.com/invite/fQtARAKgKM" target='_blank'>
            <Button className='hero-button' variant='contained' size='large' color='secondary' sx={{borderRadius:'16px', height:75, width:[300, 400], marginTop:[7, 10]}}>Join The Discord</Button>
            </a>
        </Box>
    </div>
  )
  
};

export default NewHero;
