import { Box, Typography, TextField, Button } from '@mui/material'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../APIs/Axios';

function LoginPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await login(userName, password).then((res) => res.data);
      if (response.status == "success") {
        alert("Login success! Redirecting you to Home Page.")
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      alert("Username or password is invalid. Please try again");
    }
  };

  return (
    <Box sx={{paddingInline:"50px"}} justifyContent="center" width="90vw" height="80vh" display="flex" flexDirection="column" border="4px solid red" >
      <Box sx={{}}>
        <Typography variant='h1'>Welcome</Typography>
      </Box>
      <Box sx={{marginBottom: "100px"}} display="flex" flexDirection="column" gap="10px">
        <TextField onChange={e => setUserName(e.target.value)} value={userName} label='E-mail or Mobile' variant='outlined'></TextField>
        <TextField onChange={e => setPassword(e.target.value)} value={password} label='password' variant='outlined'></TextField>
      </Box>
      <Box display="flex" justifyContent='center'>
        <Button type="button" onClick={handleLogin} variant="contained" sx={{width: 0.8, paddingBlock: "20px", borderRadius:"25px", fontSize: "1.1rem"}}>LOG IN</Button>
      </Box>
    </Box>
  )
}

export default LoginPage