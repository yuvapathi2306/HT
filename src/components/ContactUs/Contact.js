import React from 'react'
import "./Contact.css";
import { MDBInput,MDBBtn, MDBValidation, MDBValidationItem,MDBTextArea} from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div className='contacts'>
    <div>
      <div className="clients-section2">
     
    
     <h1 className="service2">INFORMAER</h1>
       <p className="Contactus">Contact Us</p>
       </div>
       </div>
      <div className='contact-detail'>
       <div >
        <h4 className='support'>Need Support</h4>
       </div>
       <div>
        <ul className='address'>
        <li>2nd Floor, Raja Rani Complex,</li>
        <li>No.1 Anna Main Street,</li>
        <li>Opposite to Guru Theatre,</li>
        <li>By Pass Road, Madurai - 625 016.</li>
        <li>Landmark- Upstairs to Pechiamman</li>
        <li>Sweets</li>

        </ul>
        <h5 className='phone'>Phone:</h5>
        <ul className='number'>
        <li>+91 88075 15122</li>
        <li>+91 99949 92264</li>
         </ul>
         <h5 className='Email'>Email:</h5>
        <ul className='id'>
        <li><a href='http://localhost:3000/'>info@hello.com</a></li>
         </ul>
       </div>
       {/* return ( */}
       <div className='details'> 
           <MDBValidation Validate id='form' className='no-outline' >
      {/* <h2>Contact us</h2> */}
    <div className='name-phone'>
      <MDBValidationItem invalid feedback='Please provide your name.'>
        <MDBInput type='text' placeholder='Name' v-model='name' Class='outline' required />
      </MDBValidationItem>
      <MDBValidationItem invalid feedback='Please provide your phonenumber.'>
        <MDBInput  type='number' placeholder='Phone' v-model='number' Class='outline' required />
      </MDBValidationItem>
      </div>
      <div className='company-email'> 

      <MDBValidationItem invalid feedback='Please provide your Company name.'>
        <MDBInput placeholder='Company' v-model='Company' Class='outline'
 required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide your email id.'>
        <MDBInput type='email' placeholder='Email address' v-model='email' Class='outline' required />
      </MDBValidationItem>

      
    </div>
    <div className='feedback'>
      <MDBValidationItem invalid feedback='Please provide a message text.'>
        <MDBTextArea className='outline' placeholder='Message' required />
      </MDBValidationItem>


      <MDBValidationItem feedback=''>
        {/* <MDBCheckbox wrapperClass='d-flex justify-content-center' 
        label='Send me copy' /> */}
      </MDBValidationItem>
      </div>

      <MDBBtn type='submit' color='primary' block className='my-4'>
        SUBMIT
      </MDBBtn>
    </MDBValidation>
  
  </div>
  </div>



       </div>
  )
}
export default Contact;