import React from "react";

import Banner from "../Carousel/Banner";
import BgColorExample from "../Cards/content";
import Ourprocess from "../Cards/Ourprocess";

import Baz from "../Cards/Weserve";
import Content1 from "../Features/Content1";
import Content2 from "../Features/Content2";
import Conten3 from "../Features/Conten3";
import Content4 from "../Features/Content4";
import Contact from "../ContactUs/Contact";
import Offer from "../Cards/offer";


const Home = () => {
  return (
    <div>
      <Banner />
      <BgColorExample />
      <Ourprocess/>
<Offer/>
      {/* <Weserve/> */}
      <Baz/>
      <Content1/>
      <Content2/>
      <Conten3/>
      <Content4/>
      <Contact/>
  </div>
  );
};

export default Home;
