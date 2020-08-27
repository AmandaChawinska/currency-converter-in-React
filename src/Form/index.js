import React, { useState } from "react";
import Result from "./Result";
import { Clock } from '../Clock';
import {
  StyledFieldset,
  StyledLegend,
  StyledLabelText,
  StyledButton,
} from "./styled";


const Form = ({ calculateResult, setResult, result }) => {
  const [amount, setAmount] = useState("");
  const [changeFrom, setChangeFrom] = useState("PLN");
  const [changeOn, setChangeOn] = useState("EUR");

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
   
      <StyledFieldset>
      <Clock/>
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
              <option>PLN</option>
              <option>USD</option>
              <option>GBP</option>
              <option>EUR</option>

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
              <option>PLN</option>
              <option>USD</option>
              <option>GBP</option>
              <option>EUR</option>

            </select>
          </label>
        </p>

        <p>
          <StyledButton>Przelicz</StyledButton>
       
          <StyledButton type="reset">
            Od nowa
          </StyledButton>
        </p>
      
        <Result result={result}/>
      </StyledFieldset>

    </form>


  );
};

export default Form;
