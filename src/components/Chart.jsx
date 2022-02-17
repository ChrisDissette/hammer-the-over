import NewChart from '../assets/chart.png'
import Box from '@mui/material/Box';
import ProfileGif from '../assets/hammergif.gif'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Chart = () => {
    return (
        <div>
            <Typography variant='h1' textAlign='center' color='primary.main' sx={{mt:10}}>Token</Typography>
            <Box display='flex' alignItems='center' justifyContent='space-around' height='90vh' width='100%'>
                <img className='shark-chart' src={NewChart} alt="" />
                <img className='shark-gif' src={ProfileGif} />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                <Button sx={{width:500, height: 50, borderRadius:'20px', marginBottom:10}} color='secondary' variant='contained'>Join our Discord</Button>
            </Box>
            <hr />
        </div>
)
}

export default Chart