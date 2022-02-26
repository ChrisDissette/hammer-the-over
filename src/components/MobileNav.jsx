import DiscordIcon from '../assets/discord.png'
import TwitterIcon from '../assets/twitter.png'
import Profile from '../assets/profileshark.jpg'
import Box from '@mui/material/Box';
import {useState} from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const MobileNav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box height='5rem' display='flex' pt={3}>
        <Box width='30vw' display='flex' alignItems='center' justifyContent='center'>
            <IconButton>
                <MenuIcon id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} sx={{color:'white', fontSize:40}} 
                />
            </IconButton>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
      >
        <a href="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
        </a>
        <a href="#roadmap">
            <MenuItem onClick={handleClose}>Roadmap</MenuItem>
        </a>
        <a href="#token">
            <MenuItem onClick={handleClose}>Token</MenuItem>
        </a>
        <a href="#team">
            <MenuItem onClick={handleClose}>Team</MenuItem>
        </a>
        <a href="#staking">
            <MenuItem onClick={handleClose}>Staking</MenuItem>
        </a>
      </Menu>
        </Box>
        <Box width='70vw' display='flex' alignItems='center' justifyContent='space-around'>
        <a href="https://discord.com/invite/fQtARAKgKM" target='_blank'>
                <img src={DiscordIcon} className='social-icon' alt="Discord Icon" />
                </a>
                <a href="https://twitter.com/hodlhammerheads" target='_blank'>
                    <img src={TwitterIcon} className='social-icon' alt="Discord Icon" />
                </a>
                <a href="">
                    <img src={Profile} className='social-icon' id='sharkProfile' alt="Discord Icon" />
                </a>

        </Box>

    </Box>
)
}

export default MobileNav