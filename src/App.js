import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./pages/Table";
import { Route,Routes } from "react-router-dom";
import EditPhone from "./pages/EditPhone";
import AddPhone from "./pages/AddPhone";
import Navbar from "./Components/navbar";
import Admin from "./pages/Admin";
import LoginForm from "./pages/LoginForm";
import { Nav } from "react-bootstrap";

const id = "635edd828bcb20d902fe4643";


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LoginForm></LoginForm>}/>
      <Route path='/admin' element={<Admin></Admin>} />
    </Routes>
    </div>
  );
}

export default App;
