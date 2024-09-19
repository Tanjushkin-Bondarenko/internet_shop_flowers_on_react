import React from 'react'; 
import "./article.css"
import {Typography,createTheme, Box,ThemeProvider, Paper } from "@mui/material"

const theme = createTheme();
    theme.typography.h5 = {
    fontSize: "2rem",
    color: "primary.light",
    paddingBottom: "0.5rem",
    fontFamily: " ",
    '@media (max-width: 800px)':{
        fontSize: "1.5rem"
    }
}

export const Article = () => {
  return (
    <Box sx={{width: '77vw'}} className='article'>
       <Box sx={{textAlign:"center", pt:"20px"}}>
       <Typography variant='h3'>More information about flowers</Typography>
       </Box>
        <Box sx={{p: "50px" }}>
        <ThemeProvider theme={theme}>
          <Typography sx={{textAlign:"center"}} variant='h5'>Summer flowers</Typography>
          </ThemeProvider>
      <Paper sx={{p: "20px"}}>
      In summers, there is nothing so relaxing than spending time in your garden that is having astonishing flowers in it. So let’s take a look at flowers that we can grow to get colorful blossoms in baking hot summers.
Marigolds, lilies, roses, zinnias, daisies, morning glory, phlox, hibiscus, cosmos, gomphrena are some of the summer flowering plants that you can sow between march to april. Some of these flowers tend to flower immediately after 2-3 months of sowing while you have to wait for a few more days/months to enjoy the beauty of other flowers. Besides producing fascinating flowers, they also provide various amazing benefits to us and to our garden as well. So let’s take a short look into them.
Benefits of marigolds:
    Act as a trap crops.
    Easy to care for and maintain.
    Roots of marigolds produce chemicals that are effective in killing nematodes in the garden.
    Attracts pollinators and predatory insects.
    Its oil helps in treating sunburns, acne, insect bites, etc.
    You can intercrop vegetables with marigolds to keep the pest populations in control.
Benefits of roses:
    Flowers are also edible.
    Widely used in beauty products.
    Acts as an air freshener in gardens.
    Rosewater/ rose oil contains a good number of antioxidants.
    Also contains anti-inflammatory properties.
Benefits of lillies:
    Lilies are perennials, that return year after year.
    Easy to divide and transplant.
    Roots and bulbs of lilies are known to use for medicinal purposes.
Benefits of hibiscus: hibiscus, native to warm climates is packed with a lot of shocking health benefits.
    The anthocyanin pigment which is responsible for the red color of the petals has numerous health benefits.
    Petals of hibiscus contains a huge number of anti-oxidants that can be used in making tea. This tea helps in treating high blood pleasures.
    Helps in lowering blood cholesterol levels.
    Leaves and flowers of hibiscus are also used in treating problems of skin and hair.
      </Paper>
      </Box>
      <Box sx={{p: "50px"}}>
      <ThemeProvider theme={theme}>
          <Typography sx={{textAlign:"center"}} variant='h5' >Winter-flowers</Typography>
          </ThemeProvider>
          <Paper sx={{p: "20px"}}>There are many flowers that particularly bloom in winters. Out of those cineraria, clarkia, calceolaria, petunia, impatiens, sweet williams, alyssum, hollyhock, salvia, and pansies are some of the highly recommended winter flowers as these flowers are absolutely beautiful and can give a vibrant and radiant look to your garden. 
              All these are seasonal plants, that are annuals/biennials. For long-lasting flowerings or all-time good-looking gardens, you can go for embracing perennial flowers in your gardens. It is nothing surprising that few flowers (shrubs/trees) also live for many years. As these plants live for three/more years we call them perennial plants. These plants either flower in a particular season every year or some may bloom continuously irrespective of the season. </Paper>
           </Box>
           <Box sx={{p: "50px"}}>
           <ThemeProvider theme={theme}>
          <Typography sx={{textAlign:"center"}} variant='h5'>Benefits of growing flowers as hedges:</Typography>
          </ThemeProvider>
          <Paper sx={{p: "20px"}}>Ixora plants as hedge.
They protect the plants from strong winds and can also act as windbreaks.
Protect plants from animal grazing when grown in borders.
Can train these plants to give particular shape for added descent look in your garden.
These can make flawless partitions in your garden.
Attract pollinators.
Hedges play important role in landscaping as well.
Flowering plants as trees:
Flowers like oleander, tecoma, and plumeria can be grown as trees. As the trees grow heights they can attract more pollinators with both their fragrance and colorful flowers. 
plumeria tree in gardenoleander tree in garden
Plumeria and Oleander trees in gardens.
Additional benefits of having flowering trees:
These flowers are definitely attention-stealing that we can’t take off our eyes from them easily.
Provide shade to sit and enjoy under them even in summers.
Attract birds that aid in pollination and pest controlling in our garden.
</Paper>
</Box>
    </Box>
  )
}
