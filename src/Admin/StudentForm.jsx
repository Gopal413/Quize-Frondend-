import {
  Box,
  Button,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import HanldeToken from "../TokenFolder/HandleToken";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getStudentPost, getStudentUpdate } from "../ReduxOperation/StudentSlice";

function StudentForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password:"",
    isVerified: false,
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const [status, setStatus] = useState(false);

  const HandleText = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   async function UpdateStudent(e) {
    e.preventDefault();
    try {
      console.log("update :",data)
      let id =location.state._id;
       let obj = {
        name: data.name,
        email: data.email,
        password: data.password,
        isVerified: data.isVerified,
        role: "student",
      };
      let response = await axios.put(
        `http://localhost:5000/student/update/${id}`,
        obj,
        HanldeToken(localStorage.getItem("token")),
      );
      console.log("res :", response.data.message);
      if (response.data.message !== "Update Student") {
        setLoading(false);
        alert("Failed To Update Students");
        return;
      }
      alert("Successfully Update Student");

      dispatch(getStudentUpdate({ id: id, data: data }));
     
      navigate("/admin/Students");
       setStatus(false);
    } catch (err) {
      console.error("Error fetching Students:", err.message);
    } finally {
      setLoading(false);
    }
  }


  const HandleForm =async(e)=>{
    e.preventDefault()

     setLoading(true)
    try {

      let obj = {
        name: data.name,
        email: data.email,
        password:data.password,
        isVerified: data.isVerified,
        role:"student"
      };
      console.log("obj :",obj)

      let response = await axios.post(
        `http://localhost:5000/student/add/`,
        obj,
        HanldeToken(localStorage.getItem("token"))
    )
    console.log("res :",response)
     if (response.data.message !== "Add Student") {
        setLoading(false);
        alert("Failed To Data Students");
        return;
      }
      alert("Successfully Add Student")

      dispatch(getStudentPost(response.data.result))

      navigate("/admin/Students")
      
    } catch (err) {
      console.error("Error fetching Students:", err.message);
    } finally {
      setLoading(false);
    }
  }

   useEffect(()=>{
      
      const state = location.state || "";
      console.log("location :", state);

      setData(pre=>({
        name:state.name,
        email:state.email,
        password:state.password,
        isVerified:state.isVerified
      }))
      if(state){
        setStatus(true)
      }
      
    },[location.state]);
console.log("status :",status)
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
        onSubmit={status ? UpdateStudent : HandleForm}
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
          borderRadius: "20px",
          // mt: 5,
          p: 2,
        }}
      >
        <Typography variant="h4">{status?"Update":"Add"} Student Form</Typography>
        <TextField
          label="Name"
          fullWidth
          type="text"
          name="name"
          value={data.name}
          onChange={HandleText}
          variant="standard"
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
                  label="Password"
                  fullWidth
                  type="password"
                  name="password"
                  value={data.password}
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
        {/* <TextField
          id="standard-basic"
          label="isVerified"
          fullWidth
          type="password"
          name="isVerified"
          value={data.isVerified}
          onChange={HandleText}
          variant="standard"
          autoComplete="current-isVerified"
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
        /> */}
        <TextField
          label="isVerified"
          fullWidth
          name="isVerified"
          select
          value={data.isVerified}
          onChange={HandleText}
          variant="outlined"
          autoComplete="current-isVerified"
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
        >
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </TextField>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            fontSize: "20px",

            background: "linear-gradient(135deg, #ff9966, #ff5e62, #f9d423)",

            color: "white",

            fontWeight: "bold",

            borderRadius: "12px",

            //padding: "12px",

            boxShadow: "0 4px 15px rgba(255, 140, 0, 0.4)",

            transition: "all 0.4s ease",

            textTransform: "none",

            "&:hover": {
              background: "linear-gradient(135deg, #f7971e, #ffd200, #ff512f)",

              transform: "translateY(-4px) scale(1.03)",

              boxShadow: "0 8px 25px rgba(255, 165, 0, 0.6)",

              color: "white",
            },

            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
           {status ? "Update" : "Add"}
        </Button>
      </Stack>
    </Box>
  );
}

export default StudentForm;
