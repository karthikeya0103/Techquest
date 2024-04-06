import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Concerns() {
  const [value] = useState(0);
  const location = useLocation();

  return (
    <div className='App-header'>
      Do you have concerns about your child in any of these issues?
      <div className='buttondiv'>
        <Link to="/concerns2" state={{ value: location.state.value + 3 }} className="btn btn-primary custombutton">Relationship with family</Link> 
        <Link to="/concerns2" state={{ value: location.state.value + 3 }} className="btn btn-primary custombutton">Relationship with peer</Link>
        <Link to="/concerns2" state={{ value: location.state.value + 3 }} className="btn btn-primary custombutton">Sexuality related issues</Link>
        <Link to="/concerns2" state={{ value: location.state.value + 0 }} className="btn btn-primary custombutton">None of that</Link>
      </div>
    </div>
  );
}
