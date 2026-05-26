import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import BackgroundWrapper from '../Components/Images/BackgroundImage'

function LandingPage() {

     let image = "./sunrise.jpg";
    //let image ="https://www.bing.com/spotlight?spotlightid=DS_KaaawaHawaii&setlang=en-in&mkt=en-in&q=Ka%27a%27awa,%20Hawaii&carindexpill=0&carindeximg=0&textorimgcar=img&isfullscreen=false&carscrlimgv2=0&form=SLVFUL&ssid=b6f01eaf-aecf-44f6-b64d-1f6e982365c3&trsid=NONE&chevclk=false"

  return (
    <div>
       <BackgroundWrapper  image={image}>
          <Nav links={["Home", "Login", "Register"]} role=""/>
        <Outlet/>
       </BackgroundWrapper>
      
      
    </div>
  )
}

export default LandingPage
