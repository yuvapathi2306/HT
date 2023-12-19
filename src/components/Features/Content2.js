import React from 'react'
import Cont2 from './conte2.png';
import "./Content1.css"
import "./Content2.css"

function Content2() {
  return (
    <div className='Overall-Content2'>
    

    <div className='Feature2'>
        <div className='Heads'>
    <div className="service">DEVELOPMENT</div>
        <h1 className='Web-application'>Android application
</h1>
        </div>
        <p className='Web-feature'>Now a day the vast majority of businesses is online and sells their products and services to the entire world through their Android applications. With your Android App, almost anything can be sold anywhere on Earth. So don’t waste your time, making a mobile app for your business with us. Our development team creates one of the best application for your business whether you are a start-up, medium-sized business or a large company, we develop your own application as your need.</p>
        
    </div>
     <div className='Cont2'>
     <img src={Cont2} alt='content' height={450} width={1000}/>
   </div> 
    
    </div>
  )
}
export default Content2;