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
        <Box minHeight='100vh' paddingTop={{md:15,lg:20}} bgcolor='black' >
            <Box display='flex' width={{xs:400, sm:500, md:700, lg:1100}} minHeight={400} margin='0 auto' flexDirection={{xs: 'column-reverse', sm:'column-reverse', md:'column-reverse', lg:'row'}}>
                <Box width={{xs:400 , sm:500, md:700, lg:650}}>
                    <Typography 
                        color='primary'
                        variant="h1"
                        pt={5}
                        textAlign={{xs:'center', sm:'center', md:'center', lg:'left'}} 
                    >
                        Hammerheads
                    </Typography>
                    <Typography 
                        color='white'
                        variant="h4" 
                        component="div" 
                        textAlign={{xs:'center', sm:'center', md:'center', lg:'left'}}
                        gutterBottom
                        paddingRight={{xs:0,sm:0,md:0,lg:3}}
                    >
                        An antimarketing social experiment on derivative culture in the Solana NFT ecosystem. Thugmonkez started as a low effort derivative project turned into a high quality 3d collection.
                    </Typography>
                    </Box>
                    
                    {/* <Box width='75%' display='flex' justifyContent='space-around' marginTop={4}>
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
                    </Box> */}
                <Box width={{lg:500}} minHeight={400} display='flex' alignItems='center' justifyContent='center'>
                    <img className='hero-img' src={HeroImage} /> 
                </Box>
                </Box>
            </Box>
    );
};

export default Hero;
