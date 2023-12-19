import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    // <div class="p-3  bg-secondary text-white">
<div className="footer">
    <div ClassName="main-footer">
        <div className='container'>
            <div className='row'>
                {/* column 1 */}
                <div className="col-md-3 col-sm-6">
                    {/* <h4>Lorem Ipsum</h4> */}
                    <ul className='list-unstyled1'>
                        <h5 className='head5'><i class="fa-solid fa-ellipsis-vertical"></i>Services</h5>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Design</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Development</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Branding</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Marketing</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>SEO</li>
                    </ul>
                    <ul className='list-unstyled2'> 
                <h5 className='head5'><i class="fa-solid fa-ellipsis-vertical"></i>Useful links</h5>
                <li><i class="fa-solid fa-mars-stroke-right"></i>About</li>
                <li><i class="fa-solid fa-mars-stroke-right"></i>Services</li>
                <li><i class="fa-solid fa-mars-stroke-right"></i>Project</li>
                <li><i class="fa-solid fa-mars-stroke-right"></i>News</li>
                <li><i class="fa-solid fa-mars-stroke-right"></i>Contact US</li>
                </ul>

            </div>
            
             {/* column 2 */}
             <div className="col-md-3 col-sm-6">
                    <h5 className='head5'><i class="fa-solid fa-ellipsis-vertical"></i>Software</h5>
                    <ul className='list-unstyled'>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Billing Software</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Website Design</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Web Application</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Anroid Application</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Digital Marketing</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>E-Commerce</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>School/College Management Software </li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Hospital Management Software</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Payroll Management Software</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Parking Mangaement Software</li>

                    </ul>

            </div>
             {/* column 3 */}
                <div className="col-md-3 col-sm-6">
                    <h5 className='head5'><i class="fa-solid fa-ellipsis-vertical"></i>Hardware</h5>
                    <ul className='list-unstyled'>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>CCTV Camera</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Biometric Device</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Billing Machine</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Billing Papers</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Barcode Stickers</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Printers</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Laptop/Desktop Sales & Services</li>
                    </ul>

                    <h5 className='head6'><i class="fa-solid fa-ellipsis-vertical"></i>FOR TEAMS</h5>
                    <ul className='list-unstyled'>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Digital Marketing</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Business Analyst</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Customer Support</li>
                        
                    </ul>
            </div>
            
             {/* column 4 */}
                <div className="col-md-3 col-sm-6">
                    <h5 className='head5'><i class="fa-solid fa-ellipsis-vertical"></i>Intenship & Training</h5>
                    <ul className='list-unstyled'>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Branded & Corporate Training</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Live Project Experience</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Direct Client Interaction Experience</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Multiple Technology Experience</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Monlthy Wise Review and grade</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Due to Performance grade, Candidate will be placed in Team.</li>
                    </ul>
                    {/* <div className="col-md-3 col-sm-6"> */}
                    <h5 className='head6'><i class="fa-solid fa-ellipsis-vertical"></i>FOR TEAMS</h5>
                    <ul className='list-unstyled'>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Business Development Execute</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Marketing</li>
                        <li><i class="fa-solid fa-mars-stroke-right"></i>Graphic Design</li>
                        
                    </ul>

            {/* </div> */}
            </div>
           
        </div>
        {/* footer Bottom */}
        <div className='copyright'>
            <div>
        <ul className='policy'>
            <li className='terms'>Terms</li>
            <li className='privacy'>Privacy</li>
        </ul>
        </div>
            {/* &copy;{new Date().getFullYear()} */}
            <div className='end-foot'>
             Copyright ©2022 Hello technologies. All rights reserved.
             </div>
        
    
    </div>
    </div>
    </div>
    
    </div>
  );
}

export default Footer;
