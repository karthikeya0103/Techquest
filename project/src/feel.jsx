import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Feel() {
    const location = useLocation();
   console.log(location.state.value)
 return (
    <div className='App-header'>
        How do you feel today?
        
  <div className='buttondiv'>
     <Link to="/whatmadeyou"state={{
          value: location.state.value +1
        }}  className="btn btn-primary custombutton">Very good</Link> 
     <Link to="/whatmadeyou" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">Normal</Link>
     <Link to="/whatmadeyou" state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">Bad</Link>
     </div>
     </div>
 );
}