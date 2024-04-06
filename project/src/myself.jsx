import React, {useState} from 'react';
import { Link} from "react-router-dom";





export default function Myself() {
  const [value] = useState(0)
  console.log(value)

 return (
  <div className='App-header'>
      What is your gender?
      <div className='buttondiv'>
     <Link to="/age" state={{
          value: value +0
        }} className="btn btn-primary custombutton" >Man</Link> 
     <Link to="/age" state={{
          value: value +0
        }} className="btn btn-primary custombutton"  >Woman</Link>
     <Link to="/age"  state={{
          value: value +0
        }}className="btn btn-primary custombutton" >Other</Link>
     </div>
 </div>

 
 );
}