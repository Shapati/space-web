import React from 'react'
import Moonimg from '../../assets/destination/image-moon.png'
import '../Destination.css'
export default function Moon() {
  return (
    <div className='dest' >
      <div className='desti'>
      <div className="desti-left">
          <h1><span>01</span> PICK YOUR DESTINANTION</h1>
        <div className='desti-img'>
          <img src={Moonimg} alt="" />
        </div>
      </div>

      <div className="desti-right">
        <h1>MOON</h1>
        <p>See our planet as you’ve never seen it before. A perfect <br /> relaxing trip away to help regain perspective and come <br /> back refreshed. While you’re there, take in some history <br /> by visiting the Luna 2 and Apollo 11 landing sites.</p>

        <div className="linedesti"></div>

        <div className="desti-below">
          <div className="desti-below-box">
            <h3>AVG. DISTANCE  </h3>
            <h2>384,400 KM</h2>
          </div>
          <div className="desti-below-box">
          <h3>EST. TRAVLE TIME  </h3>
            <h2>3 DAYS</h2>
          </div>
        </div>
      </div>

    

      
    </div>
    </div>
  )
}
