import React, { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Table from "./Table";
import Button from "../Components/Addphone/Button";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import BackDrop from "../Components/common/BackDrop";
import NewPhone from "./AddPhone";
import EditPhone from "./EditPhone";
import { Modal } from "react-bootstrap";
const Admin = () => {
  const [visible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [Modal,setModal]=useState(false)
  const editHandler = () => {
    setModal(true);
  };
  
    
  return (
    <>
      {showModal && <BackDrop onClick={() => setShowModal(false)}></BackDrop>}
      {showModal && <NewPhone></NewPhone>}
      {Modal && <BackDrop onClick={() => setModal(false)}></BackDrop>}
      {Modal && <EditPhone></EditPhone>}

      <div className={showModal && "h-[100vh] overflow-hidden"}>
        <div>
          <h1>
            <div class=" text-[Nunito] font-semibold text-teal-500 text-center text-4xl ">
              Admin Panel
            </div>
          </h1>
          <button class="bg-[#155579] text-white mx-[5%] text-2xl px-12 py-2 font-semibold rounded-md my-10">
            Back
          </button>
        </div>
        <div className="flex justify-between my-4 mx-[5%]">
          {visible && (
            <div className=" flex bg-teal-200 w-[40%] items-center py-1 ">
              <div class="font-[Nunito] font-semibold px-3  text-lg  w-[90%]">
                Note: You can edit the phone information here you like.
              </div>
              <span
                className="text-gray-500 text-lg w-[10%] cursor-pointer"
                onClick={() => setVisible(false)}
              >
                X
              </span>
            </div>
          )}
          <button
            className="bg-[#113448] text-white  text-xl px-3 py-2.5 font-semibold rounded-md flex items-baseline "
            onClick={() => setShowModal(true)}
          >
            <span className="mr-2">+</span> Add New Phone
          </button>
        </div>
        <div className="ml-[5%] my-10">
          <Table editHandler={editHandler} />
        </div>
      </div>
    </>
  );
};
export default Admin;
