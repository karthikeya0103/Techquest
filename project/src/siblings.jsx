import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Siblings() {
    
   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
        Do you have siblings?
  <div className='buttondiv'>
 
     <Link to="/medications"state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">No</Link> 
     <Link to="/medications"state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">Yes</Link>
     <Link to="/medications"state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">I don't have siblings</Link>
     </div>
     </div>
 );
}