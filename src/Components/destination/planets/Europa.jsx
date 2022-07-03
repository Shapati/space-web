import React from 'react'
import Europaimg from '../../assets/destination/image-europa.png'
export default function Europa() {
  return (
    <div className='dest' >
    <div className='desti'>
    <div className="desti-left">
        <h1><span>01</span> PICK YOUR DESTINANTION</h1>
      <div className='desti-img'>
        <img src={Europaimg} alt="" />
      </div>
    </div>

    <div className="desti-right">
      <h1>EUROPA</h1>
      <p>The smallest of the four Galilean moons orbiting Jupiter,  <br /> Europa is a winter lover’s dream. With an icy surface, it’s <br /> perfect for a bit of ice skating, curling, hockey, or simple <br /> relaxation in your snug wintery cabin.</p>

      <div className="linedesti"></div>

      <div className="desti-below">
        <div className="desti-below-box">
          <h3>AVG. DISTANCE  </h3>
          <h2>628 MILL. KM</h2>
        </div>
        <div className="desti-below-box">
        <h3>EST. TRAVLE TIME  </h3>
          <h2>3 YEARS</h2>
        </div>
      </div>
    </div>

  

    
  </div>
  </div>
  )
}
