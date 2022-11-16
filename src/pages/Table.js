import Table from "react-bootstrap/Table";
import "./Table.css";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import PhoneRow from "../Components/PhoneRow";
const phone=[
  {
    id:"01",
    name:"One Plus Nord",
    brand:"One Plus",
    image:"/url",
    portfolio:"One Plus Nord 5,128GB",
    price:"55000"
  },
  {
    id:"02",
    name:"One Plus Nord",
    brand:"One Plus",
    image:"/url",
    portfolio:"One Plus Nord 5,128GB",
    price:"55000"
  },
  {
    id:"03",
    name:"One Plus Nord",
    brand:"One Plus",
    image:"/url",
    portfolio:"One Plus Nord 5,128GB",
    price:"55000"
  },
  {
    id:"04",
    name:"One Plus Nord",
    brand:"One Plus",
    image:"/url",
    portfolio:"One Plus Nord 5,128GB",
    price:"55000"
  },
  {
    id:"05",
    name:"One Plus Nord",
    brand:"One Plus",
    image:"/url",
    portfolio:"One Plus Nord 5,128GB",
    price:"55000"
  }
]
function BasicExample(props) {
  return (
    <div className="flex flex-col justify-center items-center  w-[95%] my-10 rounded-tl-lg h-fit border-b-2 border-l-2 border-r-2 border-[#113448] rounded-br-2xl">
      <div className="p-0 w-full">
        <h2 className="text-white font-['Nunito'] text-3xl  bg-[#113448] px-3 py-4 w-full rounded-tl-lg p-0">
          All Phones
        </h2>
      </div>
      <div className="w-[80%] max-h-[450px]   flex flex-col  overflow-y-auto rounded-tl-lg rounded-br-lg border-l-2 border-gray-200 my-20">
        <div className=" w-full  text-white font-['Nunito'] text-2xl  bg-[#155579] rounded-t-lg relative ">
          <div className="flex w-[100%]  py-3">
            <div className="w-[10%] text-center ">Phone_id</div>
            <div className="w-[15%] text-center">Name</div>
            <div className="w-[15%] text-center">Brand</div>
            <div className="w-[15%] text-center">Image</div>
            <div className="w-[20%] text-center">Portfolio name</div>
            <div className="w-[10%] text-center">Price</div>
            <div className="w-[15%] text-center" >Actions</div>
          </div>
        </div>
        {phone.length>0 && phone.map((phone)=> <PhoneRow {...phone} editHandler={props.editHandler}></PhoneRow>)}

      </div>
    </div>
  );
}

export default BasicExample;
