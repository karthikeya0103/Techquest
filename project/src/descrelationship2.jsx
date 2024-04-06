import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Descrelationship2() {
  const location = useLocation();
  console.log(location.state.value);

  return (
    <div className='App-header'>
      Are you happy?
      <div className='buttondiv'>
        <Link to="/descrelationship3" state={{ value: location.state.value + 1 }} className="btn btn-primary custombutton">Yes</Link> 
        <Link to="/descrelationship3" state={{ value: location.state.value + 2 }} className="btn btn-primary custombutton">No</Link>
      </div>
    </div>
  );
}
