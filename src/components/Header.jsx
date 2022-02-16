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
import DiscordIcon from '../assets/discord.png'
import TwitterIcon from '../assets/twitter.png'
import Profile from '../assets/profileshark.jpg'

const useStyles = makeStyles({
    buttonTextStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    
});


const Header = (props) => {
    const classes = useStyles();
    return(
        <nav className='navbar'>
            
            <div className="link-box">
                <p className="links">Home</p>
                <p className="links">Roadmap</p>
                <p className="links">Token</p>
                <p className="links">Team</p>
                <p className="links">Staking</p>
            </div>
            <div className="icon-box">
                <img src={DiscordIcon} className='social-icon' alt="Discord Icon" />
                <img src={TwitterIcon} className='social-icon' alt="Discord Icon" />
                <img src={Profile} className='social-icon' id='sharkProfile' alt="Discord Icon" />

            </div>
        </nav>
    );
};

export default Header;
