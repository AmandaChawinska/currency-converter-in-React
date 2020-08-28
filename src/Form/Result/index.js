import React from "react";
import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <>
        <StyledResult> Otrzymana kwota: {result}</StyledResult>
    </>

);

export default Result;