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
                <a className="links">Home</a>
                <a href='#roadmap' className="links">Roadmap </a>
                <a href='#token' className="links">Token</a>
                <a href='#team' className="links">Team</a>
                <a href='#staking' className="links">Staking</a>
            </div>
            <div className="icon-box">
                <a href="https://discord.com/invite/fQtARAKgKM" target='_blank'>
                    <img src={DiscordIcon} className='social-icon' alt="Discord Icon" />
                </a>
                <a href="https://twitter.com/hodlhammerheads" target='_blank'>
                    <img src={TwitterIcon} className='social-icon' alt="Discord Icon" />
                </a>
                <a href="">
                    <img src={Profile} className='social-icon' id='sharkProfile' alt="Discord Icon" />
                </a>
            </div>
        </nav>
    );
};

export default Header;
