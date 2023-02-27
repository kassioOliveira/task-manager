import React from "react";
import {Routes,Route} from "react-router-dom";

import PriveteRouteAuth from "./routes/PriveteRouteAuth";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Completed from "./pages/Completed/Completed";
import Important from "./pages/Important/Important";
import MyDay from "./pages/MyDay/MyDay";
import List from "./pages/List/List";


function App() {
  
  return (
<>
     <SideBar/>
     <Routes>
     <Route path="/" element={<PriveteRouteAuth><Home/></PriveteRouteAuth>}  />
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/completas" element={<PriveteRouteAuth><Completed/></PriveteRouteAuth>} />
     <Route path="/importante" element={<PriveteRouteAuth><Important/></PriveteRouteAuth>} />
     <Route path="/meudia" element={<PriveteRouteAuth><MyDay/></PriveteRouteAuth>} />
     <Route path="/listas" element={<PriveteRouteAuth><List/></PriveteRouteAuth>} />
     </Routes>
</>

  );
}

export default App;
