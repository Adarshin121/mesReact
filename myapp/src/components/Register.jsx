import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br/><br/><br/><br/>
      <TextField  label="username" variant="outlined" /><br/><br/>
      <TextField  label="email" variant="outlined" /><br/><br/>
      <TextField  label="name" variant="outlined" /><br/><br/>
      <TextField  label="Password" variant="outlined" type="password" /><br/><br/>
      <Button variant="contained">Signup</Button>
          
    </div>
  )
}

export default Register
