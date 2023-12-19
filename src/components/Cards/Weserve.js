import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import { FaPlane,FaCamera,FaShopify,FaShoppingCart,FaHospital,FaCheese,FaStore,FaPiggyBank,FaBook} from 'react-icons/fa';
// import {  } from 'react-icons/fa';
import './Weserve.css';

  
    
      
  

        
  


const services = [
  { id: 1, title: "Travels", icon: <FaPlane size={70} /> },
  { id: 2, title: "Studio", icon: <FaCamera size={70} /> },
  { id: 4, title: "Retail", icon: <FaShopify size={70} /> },
  { id: 5, title: "Ecommerce", icon: <FaShoppingCart size={70} /> },
  { id: 6, title: "Health Care", icon: <FaHospital size={70} /> },
  { id: 7, title: "Restaurant", icon: <FaCheese size={70} /> },
  { id: 8, title: "Grocery", icon: <FaStore size={70} /> },
  { id: 9, title: "Finance", icon: <FaPiggyBank size={80} /> },
  { id: 10, title: "Education", icon: <FaBook size={80} /> },

  // Add more services as needed
];

const Baz = () => {
  const settings = {
    dots: true ,
    arrows: false,

    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false, // Set vertical to true for a column format
  };

  return (
    <>
    <div className="clients-section">
     
    
    <div className="service">WE SERVE</div>
      <div className="client">Industries We Serve</div>
      </div>
    <Slider {...settings}>
      {services.map((service) => (
        <div key={service.id}>
          <div className='cards1'>
          

          <Card 
            style={{
              width: "15rem",
              height: "9rem",
              alignItems: "center", // Center content vertically
              backgroundColor: "#FFF1F1",
              margin: "auto", // Center the slider
            }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Text>
                {/* <div className="new"> */}
                  <div className='contain1'>
                    <div className='icon1'>{service.icon}</div>
                    
                    {/* <div className='icon'><FaPlane /></div> */}

                    <div><h4 className='single_service-heading1'>{service.title}</h4></div>
                  </div>
                {/* </div> */}

                
              </Card.Text>
              
            </Card.Body>
          </Card>
          </div>
          </div>
          

        
        
      ))}
    </Slider>
    </>
  );
}
  

export default Baz;
