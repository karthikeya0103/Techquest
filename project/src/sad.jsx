import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Sad() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)

 return (
  <div className='App-header'>
Does your child experiencing sadness or depression ?
      <div className='buttondiv'>
     <Link to="/anger" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton" >Yes</Link> 
     <Link to="/anger" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton"  >No</Link>
    
     </div>
 </div>

 
 );
}