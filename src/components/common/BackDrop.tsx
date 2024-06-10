import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';

interface SimpleBackdropProps {
    children: React.ReactNode;
    open : boolean;
    handleClose : () => void;
  }
export default function SimpleBackdrop({children , open , handleClose}:SimpleBackdropProps) {

  return (
    <div>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
        onClick={handleClose}
      >
    {children}
      </Backdrop>
    </div>
  );
}
