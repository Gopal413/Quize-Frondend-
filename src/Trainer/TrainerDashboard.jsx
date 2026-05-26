import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Common/Nav'

function TrainerDashboard() {
  return (
    <div>
        <Nav links={["Home", "Test", "QuizeResult"]} role="trainer"/>
        <Outlet/>
      
    </div>
  )
}

export default TrainerDashboard
