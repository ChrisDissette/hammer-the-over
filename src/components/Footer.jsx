import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box width='100%' height={50} display='flex' alignItems='center' justifyContent='center' borderTop='1px solid black'>
        <Typography variant='caption' color='white'>HODL Hammerhead &#169;</Typography>
    </Box>
  )
}

export default Footer