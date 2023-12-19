// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/pages/Home";
import Whoweare from "./components/pages/Whoweare";
import Whatwedo from "./components/pages/Whatwedo";
import Contactus from "./components/pages/Contactus";
import Notfound from "./components/pages/Notfound";
import Footer from "./components/Footer/Footer";
import News from "./components/pages/News";

// import {Switch} from 'react-dom'
function App() {
  return (
    <Router>

    <>
      <Navbar />
 
      </>


      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Whoweare" Component={Whoweare} />
        <Route path="/Whatwedo" Component={Whatwedo} />
        <Route path="/News" Component={News} />

        <Route path="/contactus" Component={Contactus} />
        <Route Component={Notfound} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

