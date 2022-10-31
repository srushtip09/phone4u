import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import EditPhone from './pages/EditPhone'
import AddPhone from './pages/AddPhone'
import Navbar from './Components/navbar'



function App() {

  
  return (

    <div>
     
       {/* <Route path="/Edit" exact>
        <EditPhone/>
      </Route>  */}
      <EditPhone/>

    </div>

  );
}

export default App;
