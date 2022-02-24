import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
import Home from './Home';

const mf1Host = process.env.REACT_APP_MF1_HOST;
const mf2Host = process.env.REACT_APP_MF2_HOST;

function Mf1() {
  return <MicroFrontend host={mf1Host} name="Mf1" />;
}

function Mf2() {
  return <MicroFrontend host={mf2Host} name="Mf2" />;
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
      <Mf1 />
      <Mf2 />
    </BrowserRouter>
  );
}

export default App;