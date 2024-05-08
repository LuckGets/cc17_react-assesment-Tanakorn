import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../APIs/Axios";

function LoginPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await login(userName, password).then((res) => res.data);
      if (response.status == "success") {
        alert("Login success! Redirecting you to Home Page.");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      alert("Username or password is invalid. Please try again");
    }
  };

  return (
    <Box
      sx={{ paddingInline: "50px" }}
      justifyContent="center"
      width="90vw"
      height="80vh"
      display="flex"
      flexDirection="column"
    >
      <Box sx={{}}>
        <Typography sx={{ color: "#9494b8", fontSize: "0.6rem" }} variant="p">
          Titles & Notes
        </Typography>
        <Typography sx={{margin : {marginBottom: "40px"}}} variant="h1">Welcome</Typography>
      </Box>
      <Box
        sx={{ marginBottom: "100px" }}
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <TextField
          sx={{
            input: { color: "#9494b8", fontSize: "2rem" },
            label: { color: "#9494b8", fontSize: "2rem" },
            border: {border: "none", borderBottom: "5px solid #29292f"},
            margin : {marginBlock: "20px"}
          }}
          className="login__input"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          label="E-mail or Mobile"
          variant="outlined"
        ></TextField>
        <TextField
          sx={{
            input: { color: "#9494b8", fontSize: "2rem" },
            label: { color: "#9494b8", fontSize: "2rem" },
            border: {border: "none", borderBottom: "5px solid #29292f"},
            margin : {marginBlock: "20px"}
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="password"
          type="password"
          variant="outlined"
        ></TextField>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          type="button"
          onClick={handleLogin}
          variant="contained"
          sx={{
            width: "100%",
            paddingBlock: "40px",
            borderRadius: "25px",
            fontSize: "2rem",
            backgroundColor: "#29292f"
          }}
        >
          LOG IN
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
