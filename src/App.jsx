import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from './Common/LandingPage'
import Register from './Common/Register'
import Login from './Common/Login'
import Home from './Common/Home'
import AdminDashBoard from './Admin/AdminDashBoard'
import AdminHome from './Admin/AdminHome'
import AdminTrainer from './Admin/AdminTrainer'
import TrainerForm from './Admin/TrainerForm'
import AdminStudent from './Admin/AdminStudent'
import StudentForm from './Admin/StudentForm'
import VerifyEmail from './Common/VerifyEmail'
import ForgetPassword from './Common/ForgetPassword'
import ResetPassword from './Common/ResetPassword'
import StudentDashboard from './Student/StudentDashboard'
import StudentHome from './Student/StudentHome'
import Quize from './Student/Quize'
import Result from './Student/Result'
import TrainerDashboard from './Trainer/TrainerDashboard'
import TrainerHome from './Trainer/TrainerHome'
import Test from './Trainer/Test'
import QuizeResult from './Trainer/QuizeResult'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/verify-email' element={<VerifyEmail/>} />
        <Route path='/forget-password' element={<ForgetPassword/>} />
        <Route path='/reset-password/:token' element={<ResetPassword/>} />
        <Route path='/login' element={<Login/>} />
        </Route>

        <Route path="/admin" element={<AdminDashBoard/>}>
          <Route index element={<AdminHome/>}/>
          <Route path='/admin/home' element={<AdminHome/>}/>
          <Route path='/admin/trainers' element={<AdminTrainer/>}/>
          <Route path='/admin/students' element={<AdminStudent/>}/>
          <Route path='/admin/trainerform' element={<TrainerForm/>}/>
          <Route path='/admin/studentform' element={<StudentForm/>}/>
        </Route>

        <Route path="/student" element={<StudentDashboard/>}>
          <Route index element={<StudentHome/>}/>
          <Route path='/student/home' element={<StudentHome/>}/>
          <Route path='/student/quize' element={<Quize/>}/>
          <Route path='/student/result' element={<Result/>}/>
        </Route>

        <Route path="/trainer" element={<TrainerDashboard/>}>
          <Route index element={<TrainerHome/>}/>
          <Route path='/trainer/home' element={<TrainerHome/>}/>
          <Route path='/trainer/test' element={<Test/>}/>
          <Route path='/trainer/quizeresult' element={<QuizeResult/>}/>
        </Route>


      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
