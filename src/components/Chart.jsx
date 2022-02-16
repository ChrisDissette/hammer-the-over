import NewChart from '../assets/newchart.png'
import Box from '@mui/material/Box';

const Chart = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' height='90vh' width='100%'>
        <img className='shark-chart' src={NewChart} alt="" />
    </Box>
  )
}

export default Chart