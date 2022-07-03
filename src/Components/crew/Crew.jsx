import React from 'react'
import { Outlet,useNavigate,NavLink } from 'react-router-dom'
import circle from '../assets/crew/circle.svg'
import './Crew.css'
export default function Crew() {
  const navigate = useNavigate()
  return (
    <div className='crew'>
      {/* <button onClick={()=>navigate('/crew/douglas')} >hh</button>
      <button onClick={()=>navigate('/crew/mark')} >hh</button>
      <button onClick={()=>navigate('/crew/victor')} >hh</button>
      <button onClick={()=>navigate('/crew/ansari')} >hh</button> */}
 
      <div className="crewlinks">

      

      <NavLink exact to='douglas' ><button></button></NavLink>
      <NavLink to='mark' ><button></button></NavLink>
      <NavLink to='victor' ><button></button></NavLink>
      <NavLink to='ansari' ><button></button></NavLink>
     
      
      </div>
      <Outlet />
     
    
    </div>
  )
}
