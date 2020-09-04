import React, { useState } from "react";
import Result from "./Result";
import { Clock } from '../Clock';
import {
  StyledFieldset,
  StyledLegend,
  StyledLabelText,
  StyledButton,
  Loading,
  Failure,
  Footer,
} from "./styled";

import { useRatesData } from "./useRatesData";



const Form = ({ calculateResult, setResult, result }) => {
  const [amount, setAmount] = useState("");
  const [changeFrom, setChangeFrom] = useState("PLN");
  const [changeOn, setChangeOn] = useState("EUR");
  const ratesData = useRatesData();

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(changeFrom, changeOn, amount);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setAmount("");
    setChangeFrom("PLN");
    setChangeOn("EUR");
    setResult("");
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset} >
      {ratesData.state === "loading"
        ? (
          <Loading>
            Trwa ładowanie kursów walut z Europejskiego Banku Centralnego. Proszę czekać...
          </Loading>
        )
        : (
          ratesData.state === "error" ? (
            
            <Failure>
              hmm..Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem.
            </Failure>
          ) : (
             
                <StyledFieldset>
                  <Clock />
                  <StyledLegend>Wymiana waluty</StyledLegend>

                  <p>
                    <label>
                      <StyledLabelText>Wybierz wartość*:</StyledLabelText>
                      <input
                        type="number"
                        name="amount"
                        min="0"
                        step="0.01"
                        required
                        autoFocus
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      <StyledLabelText>Posiadam walutę:</StyledLabelText>
                      <select
                        value={changeFrom}
                        onChange={({ target }) => setChangeFrom(target.value)}
                        required
                      >
                        {Object.keys(ratesData.rates).map(((changeFrom) => (
                          <option
                            key={changeFrom}
                            value={changeFrom}
                          >
                            {changeFrom}
                          </option>

                        )))}

                      </select>
                    </label>
                  </p>
                  <p>
                    <label>
                      <StyledLabelText>Chcę otrzymać:</StyledLabelText>
                      <select
                        value={changeOn}
                        onChange={({ target }) => setChangeOn(target.value)}
                        required
                      >
                        {Object.keys(ratesData.rates).map(((changeOn) => (
                          <option
                            key={changeOn}
                            value={changeOn}
                          >
                            {changeOn}
                          </option>

                        )))}



                      </select>
                    </label>
                  </p>

                  <p>
                    <StyledButton>Przelicz</StyledButton>

                    <StyledButton type="reset">
                      Od nowa
          </StyledButton>
                  </p>

                  <Result result={result} />
                  <Footer> Pole oznaczone * jest obowiązkowe.
      Kurs walut z dnia {ratesData.date}.</Footer>
                </StyledFieldset>
              
            )
        )}
        
    </form>


  );
};

export default Form;
