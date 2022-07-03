import React from 'react'
import './navbar.css'
import star from '../assets/home/star.svg'
import Home  from '../assets/home/Group.svg'
import { useRef } from 'react'

export default function Navbar({NavLink}) {
  const ham = useRef()
  const burger = useRef()
  
  const toggle = ()=>{
     burger.current.classList.toggle('show')
     burger.current.classList.toggle('slide-in-fwd-center')
     
  }

  return (
    <div className='navbar' >  
      <div className="imagenav">
         <img src={star} alt="" />
      </div>

      <div className="line"></div>
      
      <div className="ham" ref={ham} onClick={()=>toggle()}>
         <img src={Home} alt="" />
      </div>
      
      <div className="navlinks" ref={burger}>

   
     
        <NavLink exact to='/' >
         <span>00</span> HOME
        </NavLink> 
        <NavLink to='/destination' > <span>01</span> DESTINATION</NavLink>
        <NavLink to='/crew' ><span>02</span> CREW</NavLink>
        <NavLink to='/technology'><span>03</span> TECHNOLOGY</NavLink>
      </div>
      
    </div>
  )
}
