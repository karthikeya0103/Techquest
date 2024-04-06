import React from 'react'
import { Link, useLocation} from "react-router-dom";
  
export default function Grades() {
   const location = useLocation();
 
   console.log(location.state.value)
 return (
    <div className='App-header'>
     Did you had good grades in school times ? 
  <div className='buttondiv'>
 
     <Link to="/studying" state={{
          value: location.state.value +1
        }} className="btn btn-primary custombutton">I had very good grades</Link> 
     <Link to="/studying"state={{
          value: location.state.value +2
        }}  className="btn btn-primary custombutton">Yes, there were ok</Link>
     <Link to="/studying"state={{
          value: location.state.value +3
        }}  className="btn btn-primary custombutton">No, i was teribble in shchool times</Link>
     </div>
     </div>
 );
}