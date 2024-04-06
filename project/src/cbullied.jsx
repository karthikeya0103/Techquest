import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CBullied() {
  const [value] = useState(0);
  const location = useLocation();

  return (
    <div className='App-header'>
      Was your child ever bullied?
      <div className='buttondiv'>
        <Link to="/ctherapybefore" state={{ value: location.state.value + 1 }} className="btn btn-primary custombutton">No, he has a lot of friends</Link> 
        <Link to="/ctherapybefore" state={{ value: location.state.value + 2 }} className="btn btn-primary custombutton">No, I don't think so</Link>
        <Link to="/ctherapybefore" state={{ value: location.state.value + 3 }} className="btn btn-primary custombutton">Yes</Link>
      </div>
    </div>
  );
}
