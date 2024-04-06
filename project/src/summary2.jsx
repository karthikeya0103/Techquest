import React, { useState} from 'react';
import { useLocation} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//wersja dla relacji
const AppHeader = document.querySelector('.AppHeader')
export default function Summary2() {
  const [value] = useState(0)
  console.log("value"+value)
  const location = useLocation();
  console.log(location.state.value)
  const points = location.state.value
  let result = '';
  const image2 = 'https://images.herzindagi.info/image/2021/Oct/main-27.jpg';
  const image1 = 'https://cdn.pixabay.com/photo/2023/01/14/11/24/counseling-7717987_640.png';
 let toggleImg = `${image1}`
 
  //const Photo = document.querySelector('.Photo')
  async function check(){
    
    if(points > 7){
        result = 'Our system calculated that You should see the specialist'
        toggleImg = `${image1}`;
        AppHeader.style.backgroundColor = `${"#ff5252"}`
       
      }else{
        
        result = "Our system calculated that You don't have to see the specialist"
        toggleImg = `${image2}`;
        AppHeader.style.backgroundColor = `${"#eeeeee"}`
       
      }
}

   check();
 return (
  <div className='AppHeader'>
   
<div className='result'>Congratulations you finished the test<br></br>
    {result}<br></br>
    </div>
 <div className='Photo'>
    <img src={toggleImg} alt='missing-img'/>
    </div>
 </div> 
 );
 
}


























































































































































