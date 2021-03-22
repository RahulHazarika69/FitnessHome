import React from 'react';
import './App.css';
import styled from 'styled-components';


import { infos } from './info';

const App = () => {
  return (
    <Cards>
      {infos.map((info) => (
        <>
          <Container>
            <img key={info.image} src={info.image} alt=''/>
            <h3>{info.title}</h3>
            <p>{info.info}</p>
            <h5>Know More</h5>
          </Container>
        </>
      ))}
    </Cards>
  );
};

const Cards = styled.div`

  padding: 10px 16px;
  background-image:url(https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080);
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`

  border-radius: 10px;
  background: rgba(0,0,0,0.8);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.5s;
  min-width: 20rem;
  border: none;
  font-size:1.5rem;
  padding: 0.8rem;
  margin: 0 2rem;
  font-family: roboto;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
  }
  img{
    width:100%;
    border-radius: 5px 5px 0 0;
  }
  h3 { 
    
    padding: 0.5rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    font-family: Times;
    font-size: 1rem;
    color: #c0c0c0;
  }
  h5{
    font-size: 0.8rem;
    color: lightgreen;
    text-align: right;
    margin: 1rem;
  }
`;

export default App;
