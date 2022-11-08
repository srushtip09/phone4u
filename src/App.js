import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './pages/Table'
import { Route } from 'react-router-dom';
import EditPhone from './pages/EditPhone'
import AddPhone from './pages/AddPhone'
import Navbar from './Components/navbar'
import Admin from './pages/Admin'
import { Nav } from 'react-bootstrap';
const id = "635edd828bcb20d902fe4643";

function App() {

  
  return (

    <div>
     
       {/* <Route path="/Edit" exact>
        <EditPhone/>
      </Route>  */}
      {/* <Navbar/>
      <Admin/> */}
      <Navbar/>
      <EditPhone/>

    </div>

  );
}

export default App;
