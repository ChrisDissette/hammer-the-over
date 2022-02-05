import Box from '@mui/material/Box';
import ProfilePic from '../assets/originalimg/shark2.png'
import Typography from '@mui/material/Typography';


const Profile = () => {
    return (
    <div>
        <Box height={800} bgcolor='black' display='flex'>
            <Box minHeight={500} width='50%' display='flex' alignItems='center' justifyContent='center' border='1px solid pink'>
                <img src={ProfilePic} />
            </Box>
            <Box minHeight={500} width='50%' display='flex' alignItems='center' justifyContent='center' flexDirection='column' border='1px solid yellow'>
                <Typography variant='h3' color='white' gutterBottom>Overview</Typography>
                <Typography variant='h5' color='white'>With the coming metaverse & 3D VR wave we are trying to get out in front! We also want to get away from the 8bit derivative art we currently use. Initially, the art was a meme on the NFT markets trend, but it kept us from reaching our potential. We decided to seek new heights and try something entirely unlike any other NFT project.</Typography>
            </Box>

        </Box>
    </div>
    ) 
};

export default Profile;
