import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function Whatled() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
        What led you to search for therapy?
      
  <div className='buttondiv'>
  
     <Link to="/expectations" state={{
          value: location.state.value +3
        }} className="btn btn-primary custombutton">I'm very worried </Link> 
     <Link to="/expectations" state={{
          value: location.state.value +1
        }}className="btn btn-primary custombutton">Just checking options</Link>
         <Link to="/expectations" state={{
          value: location.state.value +2
        }}className="btn btn-primary custombutton">My friend suggested me that</Link>
     </div>
     
     </div>
     
 );
 
}
