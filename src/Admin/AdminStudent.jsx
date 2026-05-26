import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudent,
  getStudentDelete,
} from "../ReduxOperation/StudentSlice";
import { LinkButton } from "../Components/Styled/PrimaryButton";
import { useNavigate } from "react-router-dom";
import HanldeToken from "../TokenFolder/HandleToken";
import { Box, Typography } from "@mui/material";
import Tables from "./Tables";

function AdminStudent() {
  const [Students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const StudentData = useSelector((state) => state.student.StudentData);
  const dispatch = useDispatch();

  console.log("Student", StudentData);

  async function fetchStudents() {
    try {
      setLoading(true);
      // fetch Students from backend
      let res = await axios.get("http://localhost:5000/student", 
        HanldeToken(localStorage.getItem("token"))
    );
      console.log("res :", res.data);
      if (res.data.message !== "Students fetched successfully") {
        setLoading(false);
        alert("Failed To Fetch Students");
        return;
      }
      dispatch(getAllStudent(res.data.student));
      //setStudents(res.data.Students);
    } catch (error) {
      console.error("Error fetching Students:", error);
    } finally {
      setLoading(false);
    }
  }

  

  async function handleDelete(id) {
    try {
      if (!id) {
        alert("Invalid Student ID");
        return;
      }
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this Student?",
      );
      if (!confirmDelete) {
        return;
      }
      let res = await axios.delete(
        `http://localhost:5000/student/delete/${id}`,
         HanldeToken(localStorage.getItem("token")),
      );

      console.log("Delete Response :", res.data);
      if (res.data.message !== "Delete Student") {
        alert("Failed To Delete Student");
        return;
      }
      alert("Student Deleted Successfully");
      // Refresh the Student list after deletion
      dispatch(getStudentDelete(id));
    } catch (err) {
      console.log("Error Deleting Student :", err.message);
    }
  }

    function HandleUpdate(data){
      console.log("HandleUpdate")
        navigate("/admin/studentform", {
   state: data
})
    }  

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Box
    sx={{
      mt:5,
      display:"flex",
       flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}
    >

        <Typography variant="h2" sx={{m:2,textAlign:"center"}}>Student</Typography>
       <Tables Datas = {StudentData} HandleUpdate={HandleUpdate} handleDelete={handleDelete} />
    </Box>
  );
}

export default AdminStudent;
