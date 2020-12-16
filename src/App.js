import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 600px;
  height: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  background-color: #4048C9;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-family: arial;
  color: #D9D9D9;

`;

const Paragrafo = styled.p`
  margin-left: 90px;
  font-family: arial;
  color: #D9D9D9;
`;

const Input = styled.input`
  margin: auto;
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
`;

const Somar = styled.div`
  margin-left: 90px;
  margin-top: 10px;
  font-family: arial;
  color: #D9D9D9;

`;

function App() {

  const [pct, setPct] = useState(10);
  const [conta, setConta] = useState(0);

  return (
    <Container>
      <Title>Calculadora de Gorjetas</Title>

      <Paragrafo>Quanto deu a conta?</Paragrafo>
      <Input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))} />

      <Paragrafo>Qual a porcentagem de gorjeta?</Paragrafo>
      <Input type="number" value={pct} onChange={(e)=>setPct(parseFloat(e.target.value))} />

      { conta > 0 &&
        <Somar>
          <p>Sub-total: R$ { conta }</p>
          <p>Gorjeta ({pct}%): R$ {(pct/100) * conta}</p>
          <h3>Total: R$ {conta + ((pct/100) * conta)}</h3>
        </Somar>
      }

    </Container>
  );
}  

export default App;