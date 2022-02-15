import { Link as Scroll} from 'react-scroll'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { navigate } from '@reach/router'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import React from 'react'
import ProfilePic from '../assets/profileshark.jpg'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    buttonTextStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    
});


const Header = (props) => {
    const classes = useStyles();
    return(
        <nav>
            <Box id='top-page' sx={{ flexGrow: 1 }} width='100%'>
                <AppBar position="static" elevation={0} sx={{width:'100%'}}>
                    <Toolbar sx={{height:86}} >
                        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit" sx={{fontSize:20, fontWeight:'bold'}} onClick={() => navigate('/')}>CD</Button>
                        </Typography>
                        <ButtonGroup  size='medium' variant='text'>
                            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                            <Button color="inherit" onClick={() => navigate('/about')}>Story</Button>
                            <Button color="inherit" onClick={() => navigate('/work')}>Roadmap</Button>
                            <Button color="inherit" onClick={() => navigate('/contact')}>Team</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    );
};

export default Header;
