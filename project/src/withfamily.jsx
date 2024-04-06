import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Withfamily() {
    const location = useLocation();
 return (
    <div className='App-header'>
        How often do you see each other?
  <div className='buttondiv'>
 
     <Link to="/medications" state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">All the time</Link> 
     <Link to="/medications" state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">Once a month</Link>
     <Link to="/medications" state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">Once a year</Link>
     </div>
     </div>
 );
}