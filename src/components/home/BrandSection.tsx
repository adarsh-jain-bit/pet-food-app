import React, { useEffect, useState } from 'react'
import Card from "@src/components/common/Cart";
import { Button, Grid, Typography } from "@mui/material";
import { COLORS } from '@src/lib/constants/colors';

const BrandSection = () => {
  const [product , setProduct] = useState([])
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data.data)
      } catch (error) {
      }
    }

    fetchProducts();
  }, []);

   console.log(product)
  return (
   <>
   <Typography variant='h1' textAlign="center">Sheba: Irresistible Delights for Your Cat</Typography>
    <Grid container spacing={2} justifyContent="center" mt={1}>
   {product.slice(0, 5).map((item) => (
    <>
     <Grid item xs={2}>
     <Card datax={item}/>
   </Grid>
    </>
   ))}
   </Grid>
   <Button variant='outlined' color='error' size='large'  sx={{borderRadius : "30px",marginTop: 3, display  :"flex", marginX : "auto" , "&:hover" : {background : COLORS.PRIMARY.main , color : COLORS.GLOBAL.WHITE}}}>View More</Button>
   </>
  )
}

export default BrandSection