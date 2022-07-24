import React from "react";
import ZtekNavbar from "./components/ZtekNavbar/ZtekNavbar";
import Header from "./components/Header/Header";
import Zaloonen from "./components/Zaloonen/Zaloonen";
import Committees from "./components/Committees/committees"
import {Route, Routes } from "react-router-dom";
function App() {
  return (
      <React.Fragment>
        <ZtekNavbar />
        <Header/>
        <Routes>
          <Route exact path="/zaloonen" element={<Zaloonen/>}/>
          <Route exact path="/committees" element={<Committees/>}/>

        </Routes>
      </React.Fragment>
  );
}

export default App;
