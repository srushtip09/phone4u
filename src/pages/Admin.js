import React from "react";
import Alert from "react-bootstrap/Alert";
import Table from "./Table";
import Button from "../Components/Addphone/Button";
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.css';

const Admin = () => {
  return (
    <div>
      <div>
        <h1><div class="adminpanel">Admin Panel</div></h1>
        <button class="button1">Back</button>
      </div>
      <div className="mb-5">
        <Alert class="alertstyle" variant="success">
          <div class="alertstylecontent">Note: You can edit the phone information here you like.</div>
        </Alert>
        
      </div>

      <Table />
    </div>
  );
};
export default Admin;
