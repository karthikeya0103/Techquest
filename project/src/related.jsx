import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Related() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)

 return (
  <div className='App-header'>
      What are your relations with child?
      <div className='buttondiv'>
     <Link to="/parents" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton" >It's great</Link> 
     <Link to="/parents" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton"  >It's fine</Link>
     <Link to="/parents"  state={{
          value: location.state.value +3
        }}className="btn btn-primary custombutton" >It's terrible</Link>
     </div>
 </div>

 
 );
}