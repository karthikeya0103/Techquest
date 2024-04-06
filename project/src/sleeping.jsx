import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Sleeping() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)

 return (
  <div className='App-header'>
Does your child have problems with sleeping?
      <div className='buttondiv'>
     <Link to="/eating" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton" >No</Link> 
     <Link to="/eating" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton"  >Sometimes</Link>
     <Link to="/eating"  state={{
          value: location.state.value +3
        }}className="btn btn-primary custombutton" >Very often</Link>
     </div>
 </div>

 
 );
}