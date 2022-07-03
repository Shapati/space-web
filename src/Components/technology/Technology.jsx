import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import './Technology.css'
export default function Technology() {
  return (
    <div className='tech' >
      <div className="generalh1">
        <h1><span>03</span> SPACE LAUNCH 101</h1>
      </div>
      
      <div className="techs">
        <div className="techlinks">

        
        <button> <NavLink to='launch' >1</NavLink></button>
        <button><NavLink to='spaceport' >2</NavLink></button>
        <button><NavLink to='spacecapsule' >3</NavLink></button>
        </div>
      
          <Outlet/>
      </div>
    </div>
  )
}
