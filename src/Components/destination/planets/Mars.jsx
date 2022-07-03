import React from 'react'
import '../Destination.css'
import Marsimg from '../../assets/destination/image-mars.png'

export default function Mars() {
  return (
    <div className='dest' >
      <div className='desti'>
      <div className="desti-left">
          <h1><span>01</span> PICK YOUR DESTINANTION</h1>
        <div className='desti-img'>
          <img src={Marsimg} alt="" />
        </div>
      </div>

      <div className="desti-right">
        <h1>MARS</h1>
        <p>Don’t forget to pack your hiking boots. You’ll need them to <br /> tackle Olympus Mons, the tallest planetary mountain in <br /> our solar system. It’s two and a half times the size of <br /> Everest!</p>

        <div className="linedesti"></div>

        <div className="desti-below">
          <div className="desti-below-box">
            <h3>AVG. DISTANCE  </h3>
            <h2>255 MILL. KM</h2>
          </div>
          <div className="desti-below-box">
          <h3>EST. TRAVLE TIME  </h3>
            <h2>9 MONTHS</h2>
          </div>
        </div>
      </div>

    

      
    </div>
    </div>
  )
}
