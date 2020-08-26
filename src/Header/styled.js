import styled from "styled-components";

export const StyledHeader = styled.header `
    background-color: ${({ theme }) => theme.color.red};
    border: 5px solid ${({ theme }) => theme.color.black};
    border-radius: 20px;
    padding: 20px 0;
    font-weight: unset;
    font-size: 30px;
`;