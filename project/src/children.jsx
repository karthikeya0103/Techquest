import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Children() {
  const [value] = useState(0);

  return (
    <div className='App-header'>
      What is your child's gender?
      <div className='buttondiv'>
        <Link to="/cage" state={{ value: value + 0 }} className="btn btn-primary custombutton">Boy</Link> 
        <Link to="/cage" state={{ value: value + 0 }} className="btn btn-primary custombutton">Girl</Link>
      </div>
    </div>
  );
}
