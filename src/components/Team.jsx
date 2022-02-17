import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BlakePhoto from '../assets/shark1.jpg'
import RyanPhoto from '../assets/shark2.jpg'

const Team = () => {

    const teamMembers = [
        {
            'name':'Blake',
            'picture':{BlakePhoto},
            'title': 'Co Founder',
        },
        {
            'name':'Ryan',
            'picture':{RyanPhoto},
            'title': 'Founder',
        }
    ]

  return (
      <>
    <Box width='70%' height='100vh' display='flex' alignItems='center' flexDirection='column' pt={10} margin='0 auto'>
        <Typography variant='h1' color='white' gutterBottom>Meet the Team</Typography>
        <Typography variant='h5' color='black' textAlign='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
    </Box>
    <Box>
        {/* {
            teamMembers.map(person => (
                    
                    <h3>{person.title}</h3>
                
            ))
        } */}
    </Box>
    </>
  )
}

export default Team