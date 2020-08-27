import React, { useState } from 'react';
import Container from './container';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Result from './Result';
import { Clock } from './Clock';



function App() {
  const [result, setResult] = useState("");

  const rates = {
    PLN: 1,
    EUR: 4.4532,
    USD: 3.9395,
    GBP: 4.9256,
  };
  const calculateResult = (changeFrom, changeOn, amount) => {
     const result = (amount * rates[changeFrom]) / rates[changeOn];

    
    setResult(`${result.toFixed(2)}`);
  };

  return (
    <>
      <Container>

        <Header title="Internetowy przelicznik walut &Prime;ItakCięNieStać&Prime;😈" />
        <div>
          <Clock />
          <Form calculateResult={calculateResult} setResult={setResult}
          />
          <Result result={result} />
        </div>

        <Footer title="Pole oznaczone * jest obowiązkowe. 
      Kurs walut z dnia 25.06.2020 r."></Footer>

      </Container >
    </>

  );
}

export default App;
