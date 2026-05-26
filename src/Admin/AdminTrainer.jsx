import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTrainer,
  getTrainerDelete,
} from "../ReduxOperation/TrainerSlice";
import { LinkButton } from "../Components/Styled/PrimaryButton";
import { useNavigate } from "react-router-dom";
import HanldeToken from "../TokenFolder/HandleToken";
import { Box, Paper,Typography } from "@mui/material";
import Tables from "./Tables";

function AdminTrainer() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const trainerData = useSelector((state) => state.trainer.TrainerData);
  const dispatch = useDispatch();

  console.log("trainer", trainerData);

  async function fetchTrainers() {
    try {
      setLoading(true);
      // fetch trainers from backend
      let res = await axios.get("http://localhost:5000/trainer", 
        HanldeToken(localStorage.getItem("token"))
    );
      console.log("res :", res.data);
      if (res.data.message !== "Trainers fetched successfully") {
        setLoading(false);
        alert("Failed To Fetch Trainers");
        return;
      }
      dispatch(getAllTrainer(res.data.Trainers));
      //setTrainers(res.data.Trainers);
    } catch (error) {
      console.error("Error fetching trainers:", error);
    } finally {
      setLoading(false);
    }
  }

  

  async function handleDelete(id) {
    try {
      if (!id) {
        alert("Invalid Trainer ID");
        return;
      }
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this trainer?",
      );
      if (!confirmDelete) {
        return;
      }
      let res = await axios.delete(
        `http://localhost:5000/trainer/delete/${id}`,
         HanldeToken(localStorage.getItem("token")),
      );

      console.log("Delete Response :", res.data);
      if (res.data.message !== "Delete Trainer") {
        alert("Failed To Delete Trainer");
        return;
      }
      alert("Trainer Deleted Successfully");
      // Refresh the trainer list after deletion
      dispatch(getTrainerDelete(id));
    } catch (err) {
      console.log("Error Deleting Trainer :", err.message);
    }
  }

    function HandleUpdate(data){
        navigate("/admin/trainerform", {
   state: data
})
    }  

  useEffect(() => {
    fetchTrainers();
  }, []);

  return (
    <Box
    sx={{
      mt:2,
       display:"flex",
       flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}
    >

        <Typography variant="h2" sx={{m:2,textAlign:"center"}}>Trainer</Typography>
        <LinkButton onClick={()=>navigate("/admin/trainerform")}>Add Trainer</LinkButton>
       <Tables Datas = {trainerData}/>
    </Box>
  );
}

export default AdminTrainer;

//  <LinkButton
//       onClick={()=>navigate("/admin/trainerform")}
//       >
//       Add Trainer
//       </LinkButton>

{/* <table border={1} cellPadding={12} cellSpacing={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>isVerified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trainerData.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.isVerified ? "Verified" : "Not Verified"}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
                <button onClick={()=>HandleUpdate(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
