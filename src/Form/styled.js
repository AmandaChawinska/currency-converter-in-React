import styled from "styled-components";

export const StyledFieldset = styled.fieldset `
    border-color: ${({ theme }) => theme.color.yellow};
    border-radius: 25px;
    width: 50%;
    display: inline-block;

`;

export const StyledLegend = styled.legend `
      border: 2px dashed;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.lemon};
    color: ${({ theme }) => theme.color.black};
    font-size: 20px;
    padding: 10px;
`;

export const StyledLabelText = styled.span `
    font-size: 18px;
    font-style: italic;
    margin: 0px 2px;

`;

export const StyledButton = styled.button ` 
    cursor: pointer;
    border-radius: 20px;
    padding: 15px;
    border: none;
    background-color: ${({ theme }) => theme.color.lemon};
    margin: 30px;
    line-height: 1.5;
    text-transform: uppercase;
    font-weight: bold;
    

    &:hover {
        filter: brightness(110%);
    }

`;