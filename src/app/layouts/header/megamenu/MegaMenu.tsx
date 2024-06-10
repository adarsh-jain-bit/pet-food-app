import { Paper, Typography } from '@mui/material';
import React from 'react'
import MultipleMenu from "./MultipleMenu"
import {style} from "./MegaMenu.style";

interface MegaMenuProps {
  page: string;
}
const menuTopPositions = {
  birds: "29%", 
  "Fishes & turtle": "35%", 
  Learn: "44%",
};
const MegaMenu: React.FC<MegaMenuProps>  = ({page}) => {
    console.log(page)
    if(page == "Retail Store"){
      return "page not found"
    }
  return (
    <Paper elevation={12} style={(page === "birds" || page === "Learn" || page === "Fishes & turtle") ? { ...style.smallContainer, left: menuTopPositions[page] }: style.container}>
      <MultipleMenu page={page}/>
      </Paper>
  )
}

export default MegaMenu