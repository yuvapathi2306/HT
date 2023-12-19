import React from 'react'
import "./Content1.css"
import Cont3 from "./CCont3.jpg"
import "./Conten3.css";
function Conten3() {
  return (
    
     <div className='Overall-Content3'>
    <div className='Cont3'>
      <img src={Cont3} alt='content' height={500} width={500}/>
      </div>
{/* <div className='contan'> */}
    <div className='Feature3'>
        <div className='Heads'>
    <div className="service">DESIGN</div>
        <h1 className='Web-application'>Digital visiting card

</h1>
        </div>
        <p className='Web-feature'>Now everything moves on digital, why still your visiting card as a physical card? Convert your visiting card into digital business card. We are design lot of digital visiting card with fully optimized for our clients as their requirements. You can share your Digital Business card globally almost anywhere, at your convenience.</p>
    </div>
    {/* </div> */}
    </div>
    
  )
}
export default Conten3;