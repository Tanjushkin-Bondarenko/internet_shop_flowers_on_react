import './homepage.css'
import { Box,createTheme, Paper, ThemeProvider, Typography } from '@mui/material';

const theme = createTheme();
    theme.typography.h4 = {
    fontSize: "1.6rem",
    color: "blueviolet",
    backgroundColor: "hwb(271deg 90.11% 3.31%)",
    padding: "1rem",
    fontFamily: " ",
    '@media (max-width: 800px)':{
        fontSize: "1.5rem"
    }
}

export const HomePage = () => {
  return (
      <Box sx={{p: 0, m:0, width: '770px'}} className='home'>
        <ThemeProvider theme={theme}>
        <Typography variant="h4"> Flowers are the best gift</Typography>
        </ThemeProvider>
        <Paper sx={{p:"2rem"}}>Don't know what gift to choose for this or that holiday?
              Or do you just want to tell your loved one about your feelings, but are wondering how to do it?
              Our online flower delivery store in Flower Shop is ready to help you in this difficult task.
              We specialize in services such as flower delivery in all cityes and regions of our country, the creation of author's flower arrangements, landscaping and floral decoration.
              With us you can place an order from anywhere in the world for the delivery of a wide variety of designer bouquets and compositions, which, with love in our hearts, are made by our florists from the freshest flowers.
        </Paper>
        <ThemeProvider theme={theme}>
        <Typography variant='h4'> Benefits of having flowers in your garden</Typography>
        </ThemeProvider>
        <Paper sx={{p:"2rem"}}>
               Generally in our garden, we plant flowers as a hobby, to give it a good look, or just because of that we love them. Some may also think that planting flowers is just a waste of our productive land or space. Besides all these conceptions and misconceptions, there are much deeper reasons why we should maintain flowers in our garden. Surprisingly they can act as pest controllers, weed controllers, fertilizers, ground covers, and this list goes on. Apart from benefiting our garden, they also benefit us in many ways. So let’s have a look in detail.
        </Paper>
        <ThemeProvider theme={theme}>
        <Typography variant='h4'> Benefits of flowers for mankind</Typography>
        </ThemeProvider>
        <Paper sx={{p:"2rem"}}>
               Flowers can improve our mood
               Planting flowers/any other plants can give us a good physical activity
               Having flowers in our garden can save and make money.
               Flowers are used in the composition of many beauty cosmetics:
               flowers usage in cosmetics
               Many flowers are used in making beauty products as they are having skin nourishing, whitening, refreshing, and repairing properties in them.
               Flowers like rose, lilies, lavender, jasmine, chamomile, are used in making many products like lotions, creams, serums, essential oils, perfumes, and deodorants. So you can grow some of these beneficial flowers to help your skin along with your garden.
               5. Flowers in medicinal uses:
               Many flowers have anti-bacterial, anti-inflammatory, antibiotic properties which make them fit to use in making medicines (ayurvedic, allopathic, and homeopathic). We can also make use of them right in our home by making teas or kashaya (water extract of flowers). Hibiscus, nasturtiums, rose, calendula are some of the flowers that hold medicinal properties in them.
               So this is all about the benefits of the flowers. So let’s get into some more useful information about flowers. Like fruits/vegetables, flowers also grow according to the seasons. Some flowers bloom in summers while some in winters. Flowers are classified into summer flowers and winter flowers based on the season they bloom.
        </Paper>
      
    </Box>
  )
}
