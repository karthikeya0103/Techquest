import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Suicide() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)

 return (
  <div className='App-header'>
Does your child ever had thoughts about suicide?
      <div className='buttondiv'>
     <Link to="/concerns" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton" >I dont think so</Link> 
     <Link to="/concerns" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton"  >Yes</Link>

     </div>
 </div>

 
 );
}