import React from "react";
import {Routes,Route} from "react-router-dom";

import PriveteRouteAuth from "./routes/PriveteRouteAuth";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";



function App() {
  
  return (
<>
     <SideBar/>
     <Routes>
     <Route path="/" element={<PriveteRouteAuth><Home/></PriveteRouteAuth>}  />
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/login" element={<Login/>} />
     </Routes>
</>

  );
}

export default App;
