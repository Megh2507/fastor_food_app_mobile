import React from 'react'
import {CgProfile} from "react-icons/cg"
import "../styles/navbar.css"
function Navbar() {
  return (
    <div className='nav-bod'>
        <div className="nav-first" >
            <p>Pre Order From</p>
            <CgProfile size={20}/>
            
        </div>
        <div className="nav-second">
            <p>Connaught Place</p>
        </div>
    </div>
  )
}

export default Navbar