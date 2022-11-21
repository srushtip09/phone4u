
import { useState } from "react";

import Form from "../Components/common/Form";


const LoginForm = (props) => {
   const [isLogin,setisLogin]=useState(false)
  
  return (
    <div className="container"style={{width:'100%'}}>
            <div className='form-title' style={{padingBottom:'0px'}}><h2>ADMIN LOGIN</h2></div>

      <div className="flex justify-around mt-2 bg-slate-100 rounded-t-md "style={{backgroundColor:'#113448',width:'44%',marginLeft:'28%'}}>
        <span className={!isLogin?`py-3 font-bold cursor-pointer `:`py-3 font-bold cursor-pointer`} style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0'}} onClick={()=>{setisLogin(false)}} >Sign-Up</span>
        <span className={isLogin?`py-3 font-bold cursor-pointer`:`py-3 font-bold cursor-pointer`}style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0'}} onClick={()=>setisLogin(true)}>Sign-In</span>
      </div>
     <div className="px-5 py-2 rounded-t-2xl">
        <Form isLogin={isLogin}></Form>
     </div>
     <div>
     </div>

    </div>
    
  );
};
export default LoginForm
