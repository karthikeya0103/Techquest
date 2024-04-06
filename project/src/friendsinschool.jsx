import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Friendsinschool() {
  const location = useLocation();
 
  console.log(location.state.value)
 return (
    <div className='App-header'>
      How many friends did you have in the school times ?
  <div className='buttondiv'>
 
     <Link to="/bullied"state={{
          value: location.state.value +3
        }}  className="btn btn-primary custombutton">0</Link> 
     <Link to="/bullied"state={{
          value: location.state.value +2
        }}  className="btn btn-primary custombutton">1</Link>
     <Link to="/liked"state={{
          value: location.state.value +1
        }}  className="btn btn-primary custombutton">2+</Link>
     </div>
     </div>
 );
}