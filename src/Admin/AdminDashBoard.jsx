import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Common/Nav'
import BackgroundWrapper from '../Components/Images/BackgroundImage';

function AdminDashBoard() {

  //let image = "./random.png";
  let image = "./sunrise.jpg";

  return (
    
       <BackgroundWrapper  image={image}>
      <Nav links={["Home", "Trainers", "Students"]} role="admin"/>
      <Outlet/>
      </BackgroundWrapper>
  
  )
}

export default AdminDashBoard
