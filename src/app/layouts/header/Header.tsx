"use client"
import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styled from "styled-components";
import InputBase from '@mui/material/InputBase';
import { alpha, useTheme } from "@mui/material/styles";
import MegaMenu from "./megamenu/MegaMenu"
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import {styles } from "./header.style"
import { COLORS } from "../../../lib/constants/colors";
import {  FONT_WEIGHT } from '../../../lib/constants/typography';
import SimpleBackdrop from '@src/components/common/BackDrop';
const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [navLinkValue, setNavLinkValue] = useState<null | HTMLElement>(null);

const theme = useTheme()

const [open, setOpen] = useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleOpen = () => {
  setOpen(true);
};

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
  const pages = ['Dog', 'Cat', 'Small Animal' ,"birds" , "Fishes & turtle" , "Learn" , "Retail Store" ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event)
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; 
  
  const handleMenuClick = (page : String) => {
    setNavLinkValue(page)
    handleOpen()
  };


  return (  
  <>
   
    <AppBar  style={styles.container} sx={{zIndex : 12000}}>
    <Container maxWidth={theme.breakpoints.values.xl} >
      <Toolbar disableGutters>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '10%' }}>
    <Image 
        src={`/assets/mainlogo.png`} 
        layout="intrinsic"
        width={218}
        height={80} 
        priority 
        alt='logo'
        style={{ maxWidth: '100%', height: 'auto' }} // Add this line to maintain aspect ratio
    />
</Box>
       

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, px : "20px" , gap: 2}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => {handleCloseNavMenu;handleMenuClick }}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}  >
        <Image src={`/assets/petfoodlogo.png`} width={100} height={100}  priority alt='logo'/>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  px : "20px" , gap : 2 , width : "70%"  }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {handleCloseNavMenu;handleMenuClick(page) }}
              sx={{ my: 2, color: COLORS.PRIMARY.dark, display: 'block',fontWeight : FONT_WEIGHT.semiBold  }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0, display : "flex" , width: "30%" , justifyContent:"space-between"}}>
        <Search>
          <Box sx={{display  :"flex", alignItems : "center"}}>

            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          </Search>
      
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
          
        </Box>
      </Toolbar>
    </Container>

  </AppBar>

  {navLinkValue && <SimpleBackdrop open={open} handleClose={handleClose}> <MegaMenu page={navLinkValue}/>  </SimpleBackdrop>}
 
  </>
  )
}

export default Header

