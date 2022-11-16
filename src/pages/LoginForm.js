
import { useState } from "react";

import Form from "../Components/common/Form";


const LoginForm = (props) => {
   const [isLogin,setisLogin]=useState(false)
  
  return (
    <div className="rounded-md shadow-lg bg-white w-[70%] ">
      <div className="flex justify-around mt-2 bg-slate-100 rounded-t-md ">
        <span className={!isLogin?`py-3 font-bold cursor-pointer `:`py-3 font-bold cursor-pointer`} onClick={()=>{setisLogin(false)}} >Sign-Up</span>
        <span className={isLogin?`py-3 font-bold cursor-pointer`:`py-3 font-bold cursor-pointer`} onClick={()=>setisLogin(true)}>Sign-In</span>
      </div>
     <div className="px-5 py-2 rounded-t-2xl">
        <Form isLogin={isLogin}></Form>
     </div>
     <div>
        <button className="font-semibold text-sm border border-slate-400 text-slate-500 py-1 px-1 ml-[20%] my-1 flex space-x-1 items-center" ><img src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png" className="h-7 w-7 "/><span className="px-2">Sign in with Google</span></button>
     </div>
     {!isLogin && <p className="text-blue-400 font-semibold text-sm mt-1 mb-3 ml-[25%] font-sans w-full cursor-pointer" onClick={()=>setisLogin(true)}>Already have an Account ?</p>}
     {isLogin && <p className="text-blue-400 font-semibold text-sm mt-1 mb-3 ml-[25%] font-sans w-full cursor-pointer" onClick={()=>setisLogin(false)}>Dont have an Account ?</p>}
    </div>
  );
};
export default LoginForm
