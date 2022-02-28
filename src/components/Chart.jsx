import NewChart from '../assets/chart.png'
import Box from '@mui/material/Box';
import ProfileGif from '../assets/hammergif.gif'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NewerChart from '../assets/newerchart.png'

const Chart = () => {
    return (
        <div id='token'>
            <Typography variant='h1' textAlign='center' color='primary.main' sx={{mt:10}}>Tokenomics</Typography>
            <Box display='flex' alignItems='center' justifyContent='space-around' flexDirection={{xs:'column', sm:'column', md:'row', lg:'row'}} minHeight='90vh' width='100%'>
                <img className='shark-chart' src={NewerChart} alt="" />
                <img className='shark-gif' src={ProfileGif} />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' marginBottom={10}>
                <a href="https://discord.com/invite/fQtARAKgKM" target='_blank'>
                    <Button variant='contained' sx={{borderRadius:'25px', width:[350, 500], height:60, color:'white', fontWeight:'bold', marginTop:[2,2,0]}}>Join the Discord</Button>
                </a>            
            </Box>
            <hr />
        </div>
)
}

export default Chart