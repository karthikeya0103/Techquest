import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function CRelationship() {
    const location = useLocation();
 
    console.log(location.state.value)
 return (
    <div className='App-header'>
        Are you in relationship?
  <div className='buttondiv'>
 
     <Link to="/descrelationship"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">Yes</Link> 
     <Link to="/haveyoueverr"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">No</Link>
     <Link to="/haveyoueverr" state={{
          value: location.state.value +2
        }}className="btn btn-primary custombutton">Just friends</Link>
     </div>
     </div>
 );
}