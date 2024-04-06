import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function Together() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
         Is there any problem with living together?
      
  <div className='buttondiv'>
  
     <Link to="/violence" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">It's fantastic</Link> 
     <Link to="/violence" state={{
          value: location.state.value +2
        }}className="btn btn-primary custombutton">It's ok</Link>
         
     </div>
     
     </div>
     
 );
 
}
