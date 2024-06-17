"use client"
import React from 'react'
import { Footer, Content , Top, RedLink } from './footer.styles'
import styled from "styled-components";
import { Grid, ListItem, ListItemText, Typography , List, Button , Box, TextField, Tooltip, IconButton } from '@mui/material';
import { COLORS } from "../../../lib/constants/colors";
import { Stack } from '@mui/system';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import theme from '@src/theme';
import Image from 'next/image';
import { SvgIconComponent } from '@mui/icons-material';
import { generateRandomKey } from '@src/utiles/KeyGenerater';
const footer = () => {
  interface Icon {
    id: number;
    icon: SvgIconComponent;
    title: string;
  }
  interface DemoItems {
    [x: string]: any;
    id : Number ,
    heading : String,
    pages : String[],
  }
  
  const demoItems : DemoItems[] = [
    {
      id : 1,
      heading: "Company",
      pages: ["Home", "About Us", "Contact Us", "Get Started"]
    },
    {
      id : 2,
      heading: "Services",
      pages: ["Consulting", "Development", "Design", "Marketing"]
    },
    {
      id : 3,
      heading: "Resources",
      pages: ["Blog", "Case Studies", "Ebooks", "Webinars"]
    },
    {
      id : 4,
      heading: "Support",
      pages: ["Help Center", "FAQs", "Community", "Contact Support"]
    }
  ];

  const icons: Icon[] = [
    { id: 1, icon: FacebookIcon, title: 'Facebook' },
    { id: 2, icon: InstagramIcon, title: 'Instagram' },
    { id: 3, icon: TwitterIcon, title: 'Twitter' },
    { id: 4, icon: WhatsAppIcon, title: 'WhatsApp' },
    { id: 5, icon: YouTubeIcon, title: 'YouTube' },
    { id: 6, icon: LinkedInIcon, title: 'LinkedIn' },
  ];
  
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: COLORS.GLOBAL.WHITE,
    },
   
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      'input': {
        padding: "10px",
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color: 'blue!important'
        }
      },
      '&:hover fieldset': {
        borderColor: COLORS.GLOBAL.WHITE,
      },
      '&.Mui-focused fieldset': {
        borderColor: COLORS.GLOBAL.WHITE,
      },
    },
  });
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  return (
    <div>
      <Footer>
    <Content >
      <Top >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '10%' }}>
    <Image 
        src={`/assets/mainlogo.png`} 
        layout="intrinsic"
        width={218}
        height={80} 
        priority 
        alt='logo'
        style={{ maxWidth: '100%', height: 'auto'  }} // Add this line to maintain aspect ratio
    />
</Box>
      </Top>
      <Grid container spacing={2}>
        {demoItems.map(({heading  , pages , id }: DemoItems) => (
       <>
          <Grid item xs={6} md={3} lg={2} key={String(id)}>
          <Typography variant="h4" color={COLORS.PRIMARY.main} sx={{paddingLeft : 2}} component="div">
          {heading}
          </Typography>
            <List >
            {pages.map((item ) => (
                  <ListItem key={generateRandomKey()}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
            </List>
        </Grid> 
       </>
        ))}
         <Grid item xs={6} md={3} lg={3} >
         <Typography variant="h4" color={COLORS.PRIMARY.main}  sx={{paddingLeft : 2}} component="div">
          Sign in
          </Typography> <Typography variant="h5" sx={{paddingLeft : 2 , paddingBottom : 2}} component="div">
          For us its all about the love for Pets! Subscribe to our Newsletter and receive special promotions and fun content!
          </Typography>
        <Box sx={{display :"flex" , justifyContent :"space-between", paddingBottom : 2}}>
    
 <CssTextField label="Enter the Email" id="custom-css-outlined-input" size='small' />
        <Button variant="outlined" sx={{borderColor : COLORS.GLOBAL.WHITE , color : COLORS.PRIMARY.main , "&:hover" : {borderColor :"red"} }}>Sign In</Button>
        </Box>
{icons.map(({id, title, icon :Icon} : Icon) => (
  <Tooltip title={title} key={id}>
  <IconButton >
   <Icon sx={{color : COLORS.GLOBAL.WHITE}}/>
  </IconButton>
</Tooltip>

))}
        
          </Grid>
        
      </Grid>
    
    </Content>
    <Stack display="flex" justifyContent="space-around" direction="row" padding={2} bgcolor={COLORS.GLOBAL.GRAY_50}>
    <Box>
        <span>Copyright © 2021 <Link href=""  style={{textDecoration : "none"}} ><RedLink>CodingLab.</RedLink></Link>All rights reserved</span>
    </Box>
    <Box>
          <Link href="" style={{textDecoration : "none"}} ><RedLink> Privacy policy</RedLink> </Link>
          <Link href=""  style={{textDecoration : "none"}} ><RedLink>Terms & condition</RedLink></Link>
    </Box>
    </Stack>
  </Footer>
    </div>
  )
}

export default footer