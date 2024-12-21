import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./components/Page";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/signin" element={<Signin />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
