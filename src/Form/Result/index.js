import React from "react";
import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <p>
        <StyledResult> Otrzymana kwota: {result}</StyledResult>
    </p>

);

export default Result;