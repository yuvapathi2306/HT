import React from 'react'
import './Offer.css'
import Card from 'react-bootstrap/Card';


function Offer() {
  return (
    <div className='our-services'>
<p className='head1'>OUR SERVICES <i class="fa-sharp fa-regular fa-handshake"></i></p>

<h6 className='head2'>What We do offer</h6>
<div className='services'>
    <Card 
      style={{ width: "17rem", height: "9rem",alignItems: "screenLeft",backgroundColor:"transparent"}}
      className="mb-2"
    >
                <Card.Body >
                <Card.Text >
                  <div className='contain'><div className='icon'><i class="fa fa-laptop"></i></div>
                  <div><h4 class='single_service-heading'>web Design</h4></div>
                  </div>

              </Card.Text>
          </Card.Body>
        
        </Card>
        <Card
      style={{ width: "17rem", height: "9rem", alignItems: "screenLeft",backgroundColor:"transparent" }}
      className="mb-2"
    >
                <Card.Body>
                <Card.Text >
                <div className='contain'>
                   <div className='icon'><i class="fas fa-mobile"></i></div>
                  <div><h4 class='single_service-heading'>Android application</h4>
</div>
</div>
                </Card.Text>
          </Card.Body>
        
        </Card>
        <Card
      style={{ width: "17rem", height: "9rem", alignItems: "screenLeft",backgroundColor:"transparent" }}
      className="mb-2"
    >
                <Card.Body>
                <Card.Text >
                <div className='contain'>
                <div className='icon'><i class="fas fa-newspaper"></i></div>
                  <div><h4 class='single_service-heading'>web Application</h4></div>
                  </div>
                </Card.Text>
          </Card.Body>
        
        </Card>
        <Card
      style={{width: "17rem", height: "9rem", alignItems: "screenLeft",backgroundColor:"transparent" }}
      className="mb-2"
    >
                <Card.Body>
                <Card.Text >
                <div className='contain'>
                <div className='icon'><i class="fas fa-bullhorn"></i></div>
                  <div><h4 class='single_service-heading'>Digital Marketing</h4></div>
                  </div>
                </Card.Text>
          </Card.Body>
        
        </Card>
        <Card
      style={{ width: "17rem", height: "9rem", alignItems: "screenLeft",backgroundColor:"transparent" }}
      className="mb-2"
    >
                <Card.Body>
                <Card.Text >
                <div className='contain'>
                <div className='icon'><i class="fas fa-cart-arrow-down"></i></div>
                  <div><h4 class='single_service-heading'>E-commerce</h4></div>
                  </div>
                </Card.Text>
          </Card.Body>
        
        </Card>
        <Card
      style={{ width: "17rem", height: "9rem", alignItems: "screenLeft",backgroundColor:"transparent" }}
      className="mb-2"
    >
                <Card.Body>
                <Card.Text >
                <div className='contain'>
                <div className='icon'><i class="fas fa-address-card"></i></div>
                  <div><h4 class='single_service-heading'>Digital visiting Card</h4></div>
                  </div>
                </Card.Text>
          </Card.Body>
        
        </Card>
        <Card
      style={{ width: "17rem", height: "9rem", alignItems: "screenLeft",backgroundColor:"transparent" }}
      className="mb-2" 
    >
                <Card.Body>
                <Card.Text >
                <div className='contain'>
                <div className='icon'><i class="fas fa-file-invoice-dollar"></i></div>
                  <div><h4 class='single_service-heading'>Billing Software</h4></div>
                  </div>
                </Card.Text>
          </Card.Body>
        
        </Card>
        <Card
      style={{width: "17rem", height: "9rem", alignItems: "screenLeft",backgroundColor:"transparent" }}
      className="mb-2"
    >
                <Card.Body>
                <Card.Text>
                <div className='contain'>
                <div className='icon'><i class="fas fa-smile"></i></div>
                  <div><h4 class='single_service-heading'>Branding</h4></div>
                  </div>
                </Card.Text>
          </Card.Body>
        
        </Card>
        </div>
    </div>
  )
}
export default Offer;
