import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';
import './Destination.css'

export default function Destination() {
  return (
    <div className='destination'>
    
   
        <div className='destination-links'>

        
       
        
          <NavLink exact to='moon' >  MOON</NavLink>
          <NavLink  to='mars'>MARS</NavLink>
          <NavLink to='europa'>EUROPA</NavLink>
          <NavLink to='titan'>TITAN</NavLink>
        
        

       
        </div>
        <Outlet />

  
        
      
  
    </div>
  )
}
