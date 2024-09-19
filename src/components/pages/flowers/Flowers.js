import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import './flower.css';
import {Link, Typography,  Paper, Container } from "@mui/material"

function FlowerLink({children, to}){
  return <Link 
  component= {RouterLink}
  variant='button'
  to = {to}
  sx={{m: '10px', textDecoration: 'none', fontSize: 'large'}}
  >{children}</Link>
}

export const Flowers = () => {
  return (
 
    <Container sx={{textAlign: 'center',width: '77vw', m: '0 auto' }}className='flowers'>
      <Typography variant='h3'sx={{p: '10px'}}>Catalog</Typography>
       <Paper sx={{display: 'flex', flexDirection: 'column', alignItems:'start', p: '10px' }}>
            <FlowerLink to="/flowers/chrysanthemum">Chrysanthemum</FlowerLink>
            <FlowerLink to="/flowers/gerberas">Gerberas</FlowerLink>
            <FlowerLink to="/flowers/hydrangea">Gidrangea</FlowerLink>
            <FlowerLink to="/flowers/lavander">Lavander</FlowerLink>
            <FlowerLink to="/flowers/lily">Lily</FlowerLink>
            <FlowerLink to="/flowers/peony">Peony</FlowerLink>
            <FlowerLink to="/flowers/rose">Rose</FlowerLink>
        </Paper>
        </Container>
   
  )
}
