import React, {useState} from 'react';
import { Link, useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Eating() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)

 return (
  <div className='App-header'>
Does your child have problems with eating?
      <div className='buttondiv'>
     <Link to="/phobias" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton" >No problems with eating </Link> 
     <Link to="/phobias" state={{
          value: location.state.value +2
        }} className="btn btn-primary custombutton"  >He/she doesn't eat much, but it's not terrible</Link>
     <Link to="/phobias"  state={{
          value: location.state.value +3
        }}className="btn btn-primary custombutton" >He/She doesn't eat at all</Link>
     </div>
 </div>

 
 );
}