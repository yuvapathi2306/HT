import React from 'react'
// import Card from 'react-bootstrap/Card';
import "./Ourprocess.css"

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


 function Ourprocess() {
  return (
    <div className='div'>
     <p className='head'> OUR PROCESS</p>
     <div className='bg-Overlay'>
    <MDBContainer>
  
      <MDBRow >
        <MDBCol order='last'>
        <MDBRow className='edit1'><center><i class="fa-regular fa-4"></i></center></MDBRow> 
          <MDBRow className='edit2'>EXECUTION</MDBRow> 
          <MDBRow className='paras'>With our best product </MDBRow>
          <MDBRow className='para'>execution process,your </MDBRow>
          <MDBRow className='para'>project will be finished on </MDBRow>
          <MDBRow className='para'>time, within budget,and with </MDBRow>
          <MDBRow className='way'>premier quality.</MDBRow>        
          </MDBCol>

        <MDBCol className='border-right'> 
          <MDBRow className='edit1'><center><i class="fa-regular fa-2"></i></center></MDBRow> 
          <MDBRow className='edit2'>IDEA</MDBRow> 
          <MDBRow className='para'></MDBRow>
          <MDBRow className='paras'>Our Ideas and solution, Which  </MDBRow>
          <MDBRow className='para'>give focus toyour business  </MDBRow>
          <MDBRow className='para'>solutions and define it's in a  </MDBRow>
          <MDBRow className='way'>Practical way.</MDBRow></MDBCol>
          
        {/* <div className='first-col'> */}
        <MDBCol order='first' className='border-right'>
          <MDBRow className='edit1'><center><i class="fa-regular fa-1"></i></center></MDBRow> 
          <MDBRow className='edit2'>CONCEPT</MDBRow> 
          <MDBRow className='paras'>An innovation is the idea of </MDBRow>
          <MDBRow className='para'>creating something that </MDBRow>
          <MDBRow className='para'>solves a consumer's problems </MDBRow>
          <MDBRow className='para'>or improves their lives in some </MDBRow>
          <MDBRow className='way'>way.</MDBRow>
        </MDBCol>
        
        {/* </div> */}
        <MDBCol order='Second' className='border-right'>
        <MDBRow className='edit1'><center><i class="fa-regular fa-3"></i></center></MDBRow> 
          <MDBRow className='edit2'>DESIGN</MDBRow> 
          <MDBRow className='paras'>Our Work design is includes an </MDBRow>
          <MDBRow className='para'>area of research amd practice </MDBRow>
          <MDBRow className='para'>in industrial and </MDBRow>
          {/* <MDBRow className='paras'>that is concerned with our </MDBRow> */}
          <MDBRow className='para'>Organizational psychology </MDBRow>
          <MDBRow className='way'>Work flow.</MDBRow>      
            </MDBCol>
            
      
      </MDBRow>
    
      </MDBContainer>
    </div>
    </div>
  );
}

    

  

export default Ourprocess;


