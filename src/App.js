import React from "react";
import './App.css';

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatIsGPT3,
  Header,
} from "./containers";
import { CTA, Brands, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <div className="gradient__bg">
          <Header />
        </div>
        <Brands />
        <WhatIsGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
