import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Wherechildlive() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)

 return (
  <div className='App-header'>
    Where does your child live?
      <div className='buttondiv'>
     <Link to="/save" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton" >With other parent</Link> 
     <Link to="/save" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton"  >With me</Link>
     
     </div>
 </div>

 
 );
}