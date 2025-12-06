import React from 'react';
import './head.css';
import { Link  } from "react-router-dom";
import { Box, ThemeProvider,  Typography,createTheme } from '@mui/material';


const nameTheme = createTheme();
nameTheme.typography.h2={
paddingLeft: "15vw",
marginBottom:"20px",
marginTop:"20px",
letterSpacing: "0.2em", 
textShadow: "8px 6px rgb(221, 193, 249)",
fontSize: '3rem'
}

export const Head = () => {
  return (
      <Box sx={{backgroundColor: 'rgb(247 244 250)',maxWidth:'100%'}} className='heder-container'>
      <Link to="/">
      <Box sx={{textTransform: "uppercase",  pl: "5vw" }}>
          <ThemeProvider theme={nameTheme}>
            <Typography variant='h2'> Flower shop</Typography>
            </ThemeProvider>
          <Typography sx={{pl: "5vw"}} 
          variant='h6'>Best flower shop in your city</Typography>
        </Box>
        <Box sx={{textAlign: "end", paddingRight: '90px'}}>
              <Typography >we work every day</Typography>
              <Typography >8:00 - 20:00</Typography>
      </Box>
      </Link>
    </Box>
  )
}
