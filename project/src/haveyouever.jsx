import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function Rhaveyouever() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
         Have you ever been in therapy before?
      
  <div className='buttondiv'>
  
     <Link to="/whatled" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">It's my first time</Link> 
     <Link to="/whatled" state={{
          value: location.state.value +2
        }}className="btn btn-primary custombutton">I've been in therapy once or twice</Link>
       <Link to="/whatled" state={{
          value: location.state.value +3
        }}className="btn btn-primary custombutton">I've been many times</Link>
    
     </div>
     
     </div>
     
 );
 
}
