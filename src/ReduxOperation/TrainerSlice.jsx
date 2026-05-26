
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    TrainerData:[]

}

const TrainerSlice = createSlice({
    name:"trainer",
    initialState,
    reducers:{
        getAllTrainer:function(state,action){
            state.TrainerData = action.payload;
        },
        getTrainerPost:function(state,action){
            state.TrainerData.push(action.payload)
           // state.TrainerData =[...state.TrainerData,action.payload]
        },
        getTrainerUpdate:function(state,action){
            state.TrainerData = state.TrainerData.map((item)=>{
              // item._id === action.payload.id ? {...item,...action.payload.data}:item
              if(item._id === action.payload.id){
                return action.payload;
              }
              return item
            })
        },
        getTrainerDelete:function(state,action){
            state.TrainerData = state.TrainerData.filter((item)=>item._id !== action.payload);
        }
    }
})


export const {getAllTrainer, getTrainerPost ,getTrainerDelete,getTrainerUpdate} = TrainerSlice.actions
export default TrainerSlice
