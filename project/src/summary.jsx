import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components'; // Import styled from styled-components
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledAppHeader = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default function Summary() {
  const [value] = useState(0);
  console.log("value" + value);
  const location = useLocation();
  console.log(location.state.value);
  const points = location.state.value;
  let result = '';
  const image2 = 'https://images.herzindagi.info/image/2021/Oct/main-27.jpg';
  const image1 = 'https://cdn.pixabay.com/photo/2023/01/14/11/24/counseling-7717987_640.png';
  let toggleImg = `${image1}`;

  async function check() {
    if (points > 25) {
      result = 'Our system calculated that You should see the specialist';
      toggleImg = `${image1}`;
      // Set the background color dynamically
      StyledAppHeader.defaultProps = { bgColor: '#fff' };
    } else {
      result = "Our system calculated that You don't have to see the specialist";
      toggleImg = `${image2}`;
      // Set the background color dynamically
      StyledAppHeader.defaultProps = { bgColor: '#eeeeee' };
    }
  }

  check();

  return (
    <StyledAppHeader>
      <div className='result'>Congratulations you finished the test<br></br>
        {result}<br></br>
      </div>
      <div className='Photo'>
        <img src={toggleImg} alt='missing-img' />
      </div>
    </StyledAppHeader>
  );
}
