"use client"
// import { CartItemType } from "../App";
import { Button  , Box, Stack, Typography, Rating} from "@mui/material";
import { Wrapper } from "./Cart.styles";
import Image from "next/image";
import CustomButton from "./Button";


const Card = ({datax} : any) => {
  console.log(datax)
  return (
    <Wrapper>
     <Stack alignItems="Center">
     <Image src={datax.images[0]} alt={datax.title} height={100} width={200}  />
     </Stack>
      <Box mt={1}>
        <h5  >{datax.product_name}</h5>
        <p>{datax.product_brand}</p>
        <Typography variant="caption" display="flex" alignItems="center" my={2}><Rating name="disabled" value={3} readOnly size="small" />
        (3.0) | 3 reviews
        </Typography>
        <h3><span >${datax.product_oldprice}</span> <span>${datax.product_price}</span></h3>
      </Box>
    <CustomButton text="Add to Cart" variant="contained" size="medium" active={false}/>
    </Wrapper>
  );
};

export default Card;


