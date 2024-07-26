"use client"
import { Button, Typography } from '@mui/material'
import React,{useState} from 'react'
import {LoginWrapper} from "./login.style"
import { SectionWrapper } from '@src/theme/Global.styles'
import { MuiTelInput } from 'mui-tel-input'
import OTPButton from '@src/components/common/modal/OTPModal'
const login = () => {
  const [value, setValue] = useState('')
 
  const handleChange = (newValue : string) => {
    setValue(newValue)
  }


  return (
    <LoginWrapper>

    <Typography className="heading"  >Login with OTP</Typography>
    <Typography  className="subheading" >Enter your log in details</Typography>
    <MuiTelInput value={value} onChange={handleChange}  defaultCountry='IN' sx={{width : "400px"}} placeholder='Phone Number'/>
   <OTPButton value={value}/>
    </LoginWrapper>
  )
}

export default login