import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    if (true){
    navigate("/")
    }
    else return
  };

  return (
    <Box sx={{paddingInline:"50px"}} justifyContent="center" width="90vw" height="80vh" display="flex" flexDirection="column" border="4px solid red" >
      <Box sx={{}}>
        <Typography variant='h1'>Welcome</Typography>
      </Box>
      <Box sx={{marginBottom: "100px"}} display="flex" flexDirection="column" gap="10px">
        <TextField label='E-mail or Mobile' variant='outlined'></TextField>
        <TextField label='password' variant='outlined'></TextField>
      </Box>
      <Box display="flex" justifyContent='center'>
        <Button type="button" onClick={handleLogin} variant="contained" sx={{width: 0.8, paddingBlock: "20px", borderRadius:"25px", fontSize: "1.1rem"}}>LOG IN</Button>
      </Box>
    </Box>
  )
}

export default LoginPage