import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function Married() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
         Do you live with your partner?
      
  <div className='buttondiv'>
  
     <Link to="/together" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">Yes</Link> 
     <Link to="/ntogether" state={{
          value: location.state.value +2
        }}className="btn btn-primary custombutton">No</Link>
    
     </div>
     
     </div>
     
 );
 
}
