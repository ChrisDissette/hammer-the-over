import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BlakePhoto from '../assets/blake.png'
import RyanPhoto from '../assets/ryan.png'
import ChrisAPhoto from '../assets/chrisA.png'
import ChrisDPhoto from '../assets/chrisD.png'
import JohnPhoto from '../assets/john.png'

const Team = () => {

    const teamMembers = [
        {
            'name':'King Hammer',
            'picture':BlakePhoto,
            'title': 'Founder/Dev',
        },
        {
            'name':'Hungry Hammerhead',
            'picture':RyanPhoto,
            'title': 'Marketing',
        },

        {
            'name':'Chief Financial Hammer',
            'picture':ChrisAPhoto,
            'title': 'Financial Manager',
        },
        {
            'name':'Hammertech Shark',
            'picture':ChrisDPhoto,
            'title': 'Web Dev',
        },
        {
            'name':'Whale Shark',
            'picture':JohnPhoto,
            'title': 'Investor',
        },
    ]

  return (
    <Box minHeight='100vh' id='team'>
        <Box width='70%' display='flex' alignItems='center' flexDirection='column' pt={10} margin='0 auto'>
            <Typography variant='h1' color='white' textAlign='center' gutterBottom>Meet the Team</Typography>
        </Box>
        <Box display='flex' marginTop={10} width='100%' alignItems='center' justifyContent='center' flexDirection={{xs:'column', sm:'column', md:'row', lg: 'row'}}>
            {
                teamMembers.map((item, i) => {
                    return <div key={i} className='profile-card'>
                        <img className='team-img' src={item.picture}/>
                        <Typography variant='h5' textAlign='center' color='white' sx={{fontWeight:'bold'}}>{item.name}</Typography>
                        <Typography variant='body2' textAlign='center'>{item.title}</Typography>
                        
                    </div>
                })
            }
        </Box>
        </Box>
)
}

export default Team