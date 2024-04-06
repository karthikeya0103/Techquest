import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Haveyoueverr() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      Have you ever been in relationship?
  <div className='buttondiv'>
 
     <Link to="/wereyouhappy"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">yes</Link> 
     <Link to="/neverinrelation"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">no</Link>
     </div>
     </div>
 );
}