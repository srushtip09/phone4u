
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
        
        
       
     </div>
    
    </div>
    
  );
};
export default LoginForm
