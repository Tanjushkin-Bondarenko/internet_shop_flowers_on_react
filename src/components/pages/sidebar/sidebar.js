import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './sidebar.css'
import { Container, Box, Link, List,  } from '@mui/material';

function SidebarLink({children, to}){
  return <Link 
  component={RouterLink}
  variant="button"
  to={to}
  sx={{my:1, mx:1.5, textDecoration: 'none', fontWeight: ' 700', fontSize:'larger'}}>{children}</Link>
}
export const Sidebar = ()=> {
  return (
      <Box sx={{mt:'5vh', width: '17vw' }} className='sidebar'>
        <Container >
          <List sx={{display: 'flex', 
          flexDirection: 'column', 
          gap: "5vh", 
          alignItems: 'center',
          letterSpacing: '0.2em',
          
          }}>
              <SidebarLink  to="/flowers">Flowers</SidebarLink>
              <SidebarLink to="/article">Article</SidebarLink>
              <SidebarLink to="/contacts">Contacts</SidebarLink>
          </List>
        </Container>
    </Box>
  )
}
