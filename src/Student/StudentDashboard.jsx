import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Common/Nav'

function StudentDashboard() {
  return (
    <div>
        <Nav links={["Home", "Quize", "Result"]} role="student"/>
        <Outlet/>
      
    </div>
  )
}

export default StudentDashboard
