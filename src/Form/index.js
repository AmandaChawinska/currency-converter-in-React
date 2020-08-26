import React, { useState } from "react";
import {
  StyledFieldset,
  StyledLegend,
  StyledLabelText,
  StyledButton,
} from "./styled";


const Form = ({ calculateResult, setResult }) => {
  const [amount, setAmount] = useState("");
  const [changeFrom, setchangeFrom] = useState("PLN");
  const [changeOn, setchangeOn] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(changeFrom, changeOn, amount);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setAmount("");
    setchangeFrom("PLN");
    setchangeOn("EUR");
    setResult("");
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset} >

      <StyledFieldset>
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
              onChange={({ target }) => setchangeFrom(target.value)}
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
              onChange={({ target }) => setchangeOn(target.value)}
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
        <p className="form__result">Otrzymbvbana kwota: <span className="form__result">N/A</span> </p>
      </StyledFieldset>

    </form>


  );
};

export default Form;
