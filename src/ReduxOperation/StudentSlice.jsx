
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    StudentData:[]

}

const StudentSlice = createSlice({
    name:"student",
    initialState,
    reducers:{
        getAllStudent:function(state,action){
            state.StudentData = action.payload;
        },
        getStudentPost:function(state,action){
            state.StudentData.push(action.payload)
           // state.StudentData =[...state.StudentData,action.payload]
        },
        getStudentUpdate:function(state,action){
         state.StudentData = state.StudentData.map((item)=>{
               //item._id === action.payload.id ? {...item,...action.payload.data}:item
               if(item._id === action.payload.id){
                return action.payload.data
               }
               return item
            })
        },
        getStudentDelete:function(state,action){
            state.StudentData = state.StudentData.filter((item)=>item._id !== action.payload);
        }
    }
})


export const {getAllStudent, getStudentPost ,getStudentDelete,getStudentUpdate} = StudentSlice.actions
export default StudentSlice
