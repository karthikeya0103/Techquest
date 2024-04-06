import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function Marital() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
         What is your marital status?
      
  <div className='buttondiv'>
  
     <Link to="/married" state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">Married</Link> 
     <Link to="/alone" state={{
          value: location.state.value +0
        }}className="btn btn-primary custombutton">Single</Link>
         <Link to="/alone" state={{
          value: location.state.value +0
        }}className="btn btn-primary custombutton">In relationship</Link>
     <Link to="/alone" state={{
          value: location.state.value +0
        }}className="btn btn-primary custombutton">Other</Link>
        
     </div>
     
     </div>
     
 );
 
}
