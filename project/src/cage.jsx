import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cage() {
  const [value] = useState(0);
  const location = useLocation();

  return (
    <div className='App-header'>
      How old is your child?
      <div className='buttondiv'>
        <Link to="/related" state={{ value: location.state.value + 0 }} className="btn btn-primary custombutton">less than 10</Link> 
        <Link to="/related" state={{ value: location.state.value + 0 }} className="btn btn-primary custombutton">10-15</Link>
        <Link to="/related" state={{ value: location.state.value + 0 }} className="btn btn-primary custombutton">15-20</Link>
      </div>
    </div>
  );
}
