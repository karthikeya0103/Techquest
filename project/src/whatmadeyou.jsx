import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Whatmadeyou() {
    const location = useLocation();
 
    console.log(location.state.value)
 return (
    <div className='App-header'>
        What made you to search for psychologist?
  <div className='buttondiv'>
 
     <Link to="/therapybefore" state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">My own thoughts</Link> 
     <Link to="/therapybefore" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">My friend suggested me that</Link>
     <Link to="/therapybefore" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">Just checking myself</Link>
     </div>
     </div>
 );
}