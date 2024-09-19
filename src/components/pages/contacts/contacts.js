import React from 'react';
import './contact.css'
import { Container,Paper, Typography } from '@mui/material';

export const Contacts = () => {
  return (
      <Container sx={{width: '77vw'}} className='contacts'>
      <Paper sx={{p: '50px', display:'flex', flexDirection:'column', gap: '20px'}}>
          <Typography variant='h3'>Our contacts:</Typography>
          <Typography>tel: +380 123 123 13</Typography>
          <Typography>email: flower_shop@email</Typography>
          <Typography>instagram: @flower_shop</Typography>
        </Paper>
    </Container>
  )
}
