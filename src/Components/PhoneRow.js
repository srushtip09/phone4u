const PhoneRow=(props)=>{
    return(
    <div className="flex w-full justify-evenly  border-b-2 border-gray-200 ">
     <span className="w-[10%] text-center border-r-2 border-gray-200 py-3">{props.id}</span>
     <span  className="w-[15%] text-center  border-r-2 border-gray-200 py-3">{props.name}</span>
     <span  className="w-[15%] text-center  border-r-2 border-gray-200 py-3">{props.brand}</span>
     <span  className="w-[15%] text-center  border-r-2 border-gray-200 py-3">{props.image}</span>
     <span  className="w-[20%] text-center  border-r-2 border-gray-200 py-3">{props.portfolio}</span>
     <span className="w-[10%] text-center  border-r-2 border-gray-200 py-3">{props.price}</span>
     <span className=" flex space-x-4 text-sm justify-center w-[15%]  border-r-2 border-gray-200 py-3">
        <button className="rounded-md px-3 bg-blue-200 text-blue-500" onClick={props.editHandler}>Edit</button>
        <button className="rounded-md px-3 bg-red-200 text-red-500">Delete</button>
     </span>
    </div>)


}
export default PhoneRow