import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MicroFrontend from "./MicroFrontend";
import Home from './Home';

// function Mf1() {
//   return <MicroFrontend host={mf1Host} name="Mf1" />;
// }

function App() {
  return (
    <BrowserRouter>
      {/* <Mf1 /> */}
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;