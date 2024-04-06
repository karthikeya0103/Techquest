import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function NTogether() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
         Did you ever lived together with your partner?
      
  <div className='buttondiv'>
  
     <Link to="/violence" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">Yes</Link> 
     <Link to="/violence" state={{
          value: location.state.value +2
        }}className="btn btn-primary custombutton">No</Link>
    
     </div>
     
     </div>
     
 );
 
}
