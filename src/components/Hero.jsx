import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HeroImage from '../assets/hammergif.gif'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    buttonStyle: {
        width: 225,
        fontWeight:'bold',
    },
    textStyle: {
        color:'	#4B0082',
    }
});


const Hero = () => {
    
    const classes = useStyles();

    return( 
        <Box height='100vh' paddingTop={20} bgcolor='black'>
            <Box display='flex' width='65%' margin='0 auto' >
                <Box 
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    padding={6}
                    textAlign='center'
                    margin={5}
                >
                    <Typography 
                        color='primary'
                        variant="h1" 
                        component="div"
                    >
                        Hammerheads
                    </Typography>
                    <Typography 
                        color='white'
                        variant="h5" 
                        component="div" 
                        textAlign='center' 
                        gutterBottom
                    >
                        An antimarketing social experiment on derivative culture in the Solana NFT ecosystem. Thugmonkez started as a low effort derivative project turned into a high quality 3d collection.
                    </Typography>
                    <Box width='75%' display='flex' justifyContent='space-around' marginTop={4}>
                        <Button 
                            className={classes.buttonStyle} 
                            sx={{fontWeight:'bold', borderRadius:16}} 
                            variant="contained"
                        >
                        Follow us on Twitter
                    </Button>
                        <Button 
                            className={classes.buttonStyle} 
                            sx={{fontWeight:'bold', borderRadius:16}} 
                            variant="outlined"
                        >
                            Join our Discord
                        </Button>
                    </Box>
                </Box>
                <Box>
                    <img src={HeroImage} /> 
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
