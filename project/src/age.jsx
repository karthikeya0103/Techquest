import React from 'react';
import { Link, useLocation } from "react-router-dom";
  
export default function Age() {
  const location = useLocation();
  
  console.log(location.state.value);
  
  return (
    <div className='App-header'>
      How old are you?
      <div className='buttondiv'>
        <Link to="/feel" state={{ value: location.state.value + 0 }} className="btn btn-primary custombutton">12-18</Link> 
        <Link to="/feel" state={{ value: location.state.value + 0 }} className="btn btn-primary custombutton">18-30</Link>
        <Link to="/feel" state={{ value: location.state.value + 0 }} className="btn btn-primary custombutton">30+</Link>
      </div>
    </div>
  );
}
