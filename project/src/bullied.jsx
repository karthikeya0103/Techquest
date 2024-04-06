import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Bullied() {
  const location = useLocation();

  return (
    <div className='App-header'>
      Have you ever been bullied?
      <div className='buttondiv'>
        <Link to="/grades" state={{ value: location.state.value + 2 }} className="btn btn-primary custombutton">Yes</Link> 
        <Link to="/grades" state={{ value: location.state.value + 1 }} className="btn btn-primary custombutton">No</Link>
      </div>
    </div>
  );
}
