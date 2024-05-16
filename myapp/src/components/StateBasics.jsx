import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'


const StateBasics = () => {
  var[name,fname]=useState("Adarshin")

  var[val,setval]=useState()
  var[sub,setsub]=useState()

  const handleInput=(e)=>{
    setval(e.target.value);
  }

  const submitHandler=()=>{
    console.log("clicked")
    setsub(val)
  }

  return (
    <div style={{margin:'70px'}}>
      <Typography varient='h6'>Welcome to {sub}</Typography>
      <br />
      <TextField variant="outlined"  onChange={handleInput}/>
      <Button variant='containeed' onClick={submitHandler}>submit</Button>
      
    </div>
  )
}

export default StateBasics
