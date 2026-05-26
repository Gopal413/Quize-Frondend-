import { configureStore } from "@reduxjs/toolkit";
import TrainerSlice from "./TrainerSlice";
import StudentSlice from "./StudentSlice";

let store = configureStore({
    reducer:{
        trainer:TrainerSlice.reducer,
        student:StudentSlice.reducer
    }
})

export default store;