import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ContainerLayout} from "./globalStyle";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";

function App() {
  return (

      <ContainerLayout>
        <BrowserRouter>
    <SideBar/>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/:ola" element={<h1>ola</h1>} />
     </Routes>
    </BrowserRouter>
      </ContainerLayout>
  );
}

export default App;
