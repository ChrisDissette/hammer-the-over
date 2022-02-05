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
    appStyle: {
        height: 125,
    },
});


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
        color: trigger ? 'transparent' : 'secondary',
    });
}



const Header = (props) => {
    const classes = useStyles();
    return(
        <nav>
            <Box sx={{height:50}}>
                <ElevationScroll {...props} className={classes.appStyle}>
                    <AppBar className={classes.appStyle}>
                        <Toolbar className={classes.toolStyle} sx={{display:'flex', justifyContent:'space-around', width:'100%', height:'100%'}}>
                            <img src={ProfilePic} style={{width:'5%', height:'auto', borderRadius:'50%'}} />
                            <ButtonGroup size='large' variant='text'>
                                <Button className={classes.buttonTextStyle}>Home</Button>
                                <Button className={classes.buttonTextStyle}>Community</Button>
                                <Button className={classes.buttonTextStyle}>Roadmap</Button>
                                <Button className={classes.buttonTextStyle}>Token</Button>
                                <Button className={classes.buttonTextStyle}>Team</Button>
                            </ButtonGroup>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
            </Box>
        </nav>
    );
};

export default Header;
