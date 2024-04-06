import React from 'react';
import { Link, useLocation} from "react-router-dom";
  
export default function Expectations() {

   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
       What are your expectiations from therapy?
      
  <div className='buttondiv'>
  
     <Link to="/othergender" state={{
          value: location.state.value +0
        }} className="btn btn-primary custombutton">Find problems and solve them</Link> 
     <Link to="/othergender" state={{
          value: location.state.value +0
        }}className="btn btn-primary custombutton">Make relation healthier</Link>
        <Link to="/othergender" state={{
          value: location.state.value +0
        }}className="btn btn-primary custombutton">I don't know</Link>
    
     </div>
     
     </div>
     
 );
 
}
