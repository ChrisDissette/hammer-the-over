import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const NewHero = () => {
  return (
    <div>
        <Box minHeight='90vh' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Typography variant='h4' color='white' gutterBottom>Official Website</Typography>
            <Typography variant='h2' fontWeight='bold'>Meet The</Typography>
            <div className="typewriter-container">
              <Typography className='typed-out' variant='h1' fontWeight='bold' color='primary.main'>Hammerheads</Typography>
            </div>
            <Button className='hero-button' variant='contained' size='large' color='secondary' sx={{borderRadius:'16px', height:75, width:400, marginTop:10}}>Join The Discord</Button>
        </Box>
    </div>
  )
  
};

export default NewHero;
