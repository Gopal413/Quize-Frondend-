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
import { useNavigate } from "react-router-dom";

function VerifyEmail() {

    const [data, setData] = useState({
    email: "",
    otp: "",
  });

  const navigate = useNavigate();

  const HandleText = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleForm = async(e) => {
    e.preventDefault();
   
    try {
      let res =await axios.post("http://localhost:5000/user/verify-email",data
      );
      console.log("res :", res.data)
      if(res.data.message !== "Email Verified Successfully")
      {
        alert("Failed To Verify Email")
      }
      // localStorage.setItem("token",res.data.token) 

      alert("Successfully Verified Email")
       setData((prev)=>(
        {
    email: "",
    otp: "",
      }))
    
    
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
        <Typography variant="h4">Verify Email</Typography>

       <TextField
                 id="standard-basic"
                 label="Email"
                 fullWidth
                 type="email"
                 name="email"
                 value={data.email}
                 onChange={HandleText}
                 variant="standard"
                 autoComplete="Enter the Email"
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
          label="OTP"
          fullWidth
          type="text"
          name="otp"
           value={data.otp}
          onChange={HandleText}
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
      
        {/* <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            fontSize: "20px",
            backgroundColor: "black",
    color: "white",
            "&:hover": {
      backgroundColor: "#9a670a",
      color: "white",
    },
          }}
        >
          Submit
        </Button> */}
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

export default VerifyEmail
