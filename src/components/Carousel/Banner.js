import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap"; // Correct import statement
import './Banner.css'



const Banner = () => {
  return (
    <>
      <Container fluid>
        <Row  className="justify-content-center align-items-center">
          <Col lg={14} >
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("./bg1.jpg")}
                  alt="First slide"
             
                />
                <Carousel.Caption>
                  <h1>Web & Mobile</h1>
                  <p className="d-none d-sm-block">
                    <h6>Providing The Best Services & IT Solution</h6> 
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("./bg2.avif")}
                  alt="Second slide"
          
                />

                <Carousel.Caption>
                  <h5>WE DEVELOP SOFTWARE</h5>
                  <p className="d-none d-sm-block">
                    Our Mission is to Make the Bussiness Life of our Clients Better!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"

                  src={require("./new7.avif")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>We Are Crafted.</h3>
                  <p className="d-none d-sm-block">
                    Design & Development Service Provider.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="text-center">
          <h2 className="display-5 mt-7">Software Development Company in Madurai..</h2>
          {/* <p className="lead text-muted">
          That Great Combination of Logic and Art.
          </p> */}
        </div>
      </Container>
    </>
  );
};

export default Banner;
