import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;