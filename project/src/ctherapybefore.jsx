import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CTherapybefore() {
  const [value] = useState(0);
  console.log("value" + value);
  const location = useLocation();
  console.log(location.state.value);
  
  return (
    <div className='App-header'>
      Has your child ever been in therapy before?
      <div className='buttondiv'>
        <Link to="/mental" state={{ value: location.state.value + 1 }} className="btn btn-primary custombutton">No</Link> 
        <Link to="/mental" state={{ value: location.state.value + 2 }} className="btn btn-primary custombutton">Once</Link>
        <Link to="/mental" state={{ value: location.state.value + 3 }} className="btn btn-primary custombutton">Many times</Link>
      </div>
    </div>
  );
}
