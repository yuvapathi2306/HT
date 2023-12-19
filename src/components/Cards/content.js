import Card from "react-bootstrap/Card";
import "./content.css";
// import Ourprocess from "./Ourprocess";

function BgColorExample() {
  return (
    <div className="textcard">

   <h1>Who we are</h1>
    <div className="para">
   
    <p className="content">HELLO TECHNOLOGIES is a fast growing Software Development company. We are providing complete Software Solution and also Hardware solution. We are located in Madurai, Tamil Nadu. Having started the business as a small level company, our best services are now available to more clients. For the last years, we've been giving our best services in the areas of application development, web development and web designing. HELLO TECHNOLOGIES moving forward year after year.Despite intense competition, HELLO TECHNOLOGIES has been successful in keeping its clients and has continued to win the trust of new clients around the world.
   <h4 className="Read more" button type="button" onClick={onprogress}>Read more<i class="fa fa-angle-double-right" aria-hidden="true"></i></h4></p>
    </div>
    {/* {[
        //  'Primary',
        // 'Secondary',
        // 'Success',
        // 'Danger',
        // 'Warning',
         'Info',
        // 'Light',
        // "Dark",
      ].map((variant) => ( */}

        <div className="card-container">
        {/* <div className="cards"> */}
  
        <Card

        //   bg={variant.toLowerCase()}
        //   key={variant}
        //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", alignItems: "screenLeft",backgroundColor:"Info" }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>{variant} Card Title </Card.Title> */}
            <Card.Text className="text">7+ Years of Excellence</Card.Text>
          </Card.Body>
        
        </Card>
        <Card
        //   bg={variant.toLowerCase()}
        //   key={variant}
        //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", alignItems: "screenLeft" }}
        // style={{width:"18rem", alignItems:"stretch"}}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>{variant} Card Title </Card.Title> */}
            <Card.Text className="text">Well Experienced Professionals</Card.Text>
          </Card.Body>
        </Card>
        <Card
        //   bg={variant.toLowerCase()}
        //   key={variant}
        //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", alignItems: "screenLeft" }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>{variant} Card Title </Card.Title> */}
            <Card.Text className="text">Expetise You Can Trust</Card.Text>
          </Card.Body>
        </Card>
        <Card
        //   bg={variant.toLowerCase()}
        //   key={variant}
        //   text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem", alignItems: "screenLeft" }}
          className="mb-2"
        >
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            {/* <Card.Title>{variant} Card Title </Card.Title> */}
            <Card.Text className="text">Committed to Quality</Card.Text>
          </Card.Body>
        </Card>
        
        {/* </div> */}

        </div>
      {/* ))} */}
  
    </div>

  );
  


      }
      
export default BgColorExample;
