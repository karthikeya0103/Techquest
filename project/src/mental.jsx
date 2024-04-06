import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Mental() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)

 return (
  <div className='App-header'>
How do you rate your child's mental health?
      <div className='buttondiv'>
     <Link to="/sleeping" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton" >Very good</Link> 
     <Link to="/sleeping" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton"  >Ok</Link>
     <Link to="/sleeping"  state={{
          value: location.state.value +3
        }}className="btn btn-primary custombutton" >Bad</Link>
     </div>
 </div>

 
 );
}