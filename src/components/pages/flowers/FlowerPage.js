import { Link as RouterLink, useLoaderData } from 'react-router-dom';
import "./flower.css";
import { Box, Typography, Link, ImageListItem, Paper, Container } from '@mui/material';

export default function FlowerPage() {
  const flower = useLoaderData();
  console.log(flower)
  return (
    <Container className='flower-page'>
      <Box sx={{  width: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
         <Link component={RouterLink}
          variant='button' 
          sx={{ width:'fit-content', alignSelf:'end', textDecoration: 'none',
            p: '10px 7px',m:'20px'}}
          to="/flowers">Back to catalog</Link>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
         <ImageListItem  sx={{width: '200px', height: '200px', alignSelf:'center'}}>
              <img  
              alt='flowers' src={flower.img}>
              </img>
          </ImageListItem>
          <Paper sx={{p: '20px', gap: '10px'}}>
            <Typography variant='h3'>{ flower.name}</Typography>
            <Typography variant='h4'>Price: {flower.price}</Typography>
            <Typography>flower heigth: {flower.height}</Typography>
            <Typography>Period flowering: {flower.flowering_period }</Typography>
          </Paper>
      </Box>
      </Box>
      </Container> 
  )
}
