import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function Othergender() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
      Do you have any problems with speaking to other gender specialist?
      
  <div className='buttondiv'>
  
     <Link to="/summary2" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">Yes</Link> 
     <Link to="/summary2" state={{
          value: location.state.value +1
        }}className="btn btn-primary custombutton">No</Link>
   
     </div>
     
     </div>
     
 );
 
}
