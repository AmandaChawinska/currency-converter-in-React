import React, { useState } from 'react';
import Container from './container';
import Header from './Header';
import Form from './Form';
import { useRatesData } from './Form/useRatesData';


function App() {
  const [result, setResult] = useState("");
  const ratesData = useRatesData();


  const calculateResult = (changeFrom, changeOn, amount) => {
    const result = (amount * ratesData.rates[changeOn]) / ratesData.rates[changeFrom];


    setResult(`${result.toFixed(2)}`);
  };

  return (
    <>
      <Container>

        <Header title="Internetowy przelicznik walut &Prime;ItakCięNieStać&Prime;😈" />
        <Form calculateResult={calculateResult} setResult={setResult}
          result={result} />
      

      </Container >
    </>

  );
}

export default App;
