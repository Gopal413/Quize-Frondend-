import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


function ResetPassword() {
   const [password, setPassword] = useState("");
   const [cpassword, setCPassword] = useState("");

  const navigate = useNavigate();
  const token = useParams()
  console.log("Token:", token.token); 

  const HandleForm = async(e) => {
    e.preventDefault();

     if (password !== cpassword) {
    alert("password and Confirm password not Match");
    return;
  } 
   
    try {
      let res =await axios.post("http://localhost:5000/user/reset-password",{ password },
        {
        headers:{
          "Authorization": `Bearer ${token.token}`
        }
      }
      );
      console.log("res :", res.data)
      if(res.data.message !== "Password Reset Successfully")
      {
        alert("Failed To Reset Password")
      }
      // localStorage.setItem("token",res.data.token) 

      alert("Successfully Reset Password")
       setPassword("");
       setCPassword("");    
      localStorage.clear();
    
        navigate("/login")
      
    } catch (err) {
      console.log("error :", err.message);
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        zIndex: "1",
        mt: 10,
      }}
    >
      <Stack
        component="form"
        onSubmit={HandleForm}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100%",
          width: { xs: "200px", sm: "300px", md: "400px" },
          gap: "20px",
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          borderRadius:"20px",
          // mt: 5,
          p: 2,
        }}
      >
        <Typography variant="h4">Reset Password</Typography>

       <TextField
                 id="standard-basic"
                 label="Password"
                 fullWidth
                 type="password"
                 name="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 variant="standard"
                 autoComplete="Enter the Password"
                 sx={{
                   "& input": {
                     fontSize: "20px",
                     color: "yellow",
                   },
                   "& label": {
                     fontSize: "20px",
                     // color: "white",
                   },
                   "& label.Mui-focused": {
                     color: "yellow",
                   },
                 }}
               />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          fullWidth
          type="password"
          name="cpassword"
          value={cpassword}
          onChange={(e) => setCPassword(e.target.value)}
          variant="standard"
          autoComplete="current-password"
          sx={{
            "& input": {
              fontSize: "20px",
              color: "yellow",
            },
            "& label": {
              fontSize: "20px",
              // color: "white",
            },
            "& label.Mui-focused": {
              color: "yellow",
            },
          }}
        />
      
        <Button
  fullWidth
  type="submit"
  variant="contained"
  sx={{
    fontSize: "20px",

    background:
      "linear-gradient(135deg, #ff9966, #ff5e62, #f9d423)",

    color: "white",

    fontWeight: "bold",

    borderRadius: "12px",

    //padding: "12px",

    boxShadow: "0 4px 15px rgba(255, 140, 0, 0.4)",

    transition: "all 0.4s ease",

    textTransform: "none",

    "&:hover": {

      background:
        "linear-gradient(135deg, #f7971e, #ffd200, #ff512f)",

      transform: "translateY(-4px) scale(1.03)",

      boxShadow: "0 8px 25px rgba(255, 165, 0, 0.6)",

      color: "white",
    },

    "&:active": {
      transform: "scale(0.98)",
    },
  }}
>
  Submit
</Button>

      </Stack>
    </Box>
  )
}

export default ResetPassword
