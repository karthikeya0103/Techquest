import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Concentration() {
  const [value] = useState(0);
  const location = useLocation();

  return (
    <div className='App-header'>
      Does your child have a problem with concentration?
      <div className='buttondiv'>
        <Link to="/suicide" state={{ value: location.state.value + 1 }} className="btn btn-primary custombutton">No</Link> 
        <Link to="/suicide" state={{ value: location.state.value + 2 }} className="btn btn-primary custombutton">Sometimes</Link>
        <Link to="/suicide" state={{ value: location.state.value + 3 }} className="btn btn-primary custombutton">All the time</Link>
      </div>
    </div>
  );
}
