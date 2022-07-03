import React from 'react'
import Titanimg from '../../assets/destination/image-titan.png'
export default function Titan() {
  return (
    <div className='dest' >
    <div className='desti'>
    <div className="desti-left">
        <h1><span>01</span> PICK YOUR DESTINANTION</h1>
      <div className='desti-img'>
        <img src={Titanimg} alt="" />
      </div>
    </div>

    <div className="desti-right">
      <h1>TITAN</h1>
      <p>The only moon known to have a dense atmosphere other <br /> than Earth, Titan is a home away from home (just a few <br /> hundred degrees colder!). As a bonus, you get striking <br /> views of the Rings of Saturn.</p>

      <div className="linedesti"></div>

      <div className="desti-below">
        <div className="desti-below-box">
          <h3>AVG. DISTANCE  </h3>
          <h2>1.6 BIL. KM</h2>
        </div>
        <div className="desti-below-box">
        <h3>EST. TRAVLE TIME  </h3>
          <h2>7 YEARS</h2>
        </div>
      </div>
    </div>

  

    
  </div>
  </div>
  )
}
