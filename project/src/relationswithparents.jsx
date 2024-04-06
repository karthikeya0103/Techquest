import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Relationswithparents() {
    
   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
        What are your relations with parents?
  <div className='buttondiv'>
 
     <Link to="/withfamily"state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton">OK</Link> 
     <Link to="/siblings"state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">I hate them</Link>
     <Link to="/siblings"state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">I don't have parents</Link>
     </div>
     </div>
 );
}