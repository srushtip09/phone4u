
import { useState } from "react";

import Form from "../Components/common/Form";


const LoginForm = (props) => {
   const [isLogin,setisLogin]=useState(false)
  
  return (
    <div>
      
     <div className="px-5 py-2 rounded-t-2xl">
        <Form isLogin={isLogin}></Form>
     </div>
     <div>
        <button style={{display: 'inline-block',width:'auto',position: 'absolute',top: '84%',left:'48%'}}className="submit-button" ><span style={{  display: "flex", alignItems: "center", fontSize: "1.125rem", marginBottom: "0.5rem", fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: '400', lineHeight: '1.4', color: 'white', margin: '0'}}
>Sign in with Google</span></button>
     </div>
    
    </div>
    
  );
};
export default LoginForm
