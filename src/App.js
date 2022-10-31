import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './pages/Table'
import { Route } from 'react-router-dom';
import EditPhone from './pages/EditPhone'
import AddPhone from './pages/AddPhone'
import Navbar from './Components/navbar'
const id = "635edd828bcb20d902fe4643";

function App() {

  
  return (

    <div>
     
       {/* <Route path="/Edit" exact>
        <EditPhone/>
      </Route>  */}
      <Table/>

    </div>

  );
}

export default App;
