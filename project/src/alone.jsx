import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Alone() {
  const location = useLocation();
 
  console.log(location.state.value);

  return (
    <div className='App-header'>
      Do you live alone?
      <div className='buttondiv'>
        <Link to="/pet" state={{ value: location.state.value + 2 }} className="btn btn-primary custombutton">Yes</Link> 
        <Link to="/pet" state={{ value: location.state.value + 1 }} className="btn btn-primary custombutton">No</Link>
      </div>
    </div>
  );
}
