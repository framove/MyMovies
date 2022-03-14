import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
`;

export const SearchInput = styled.input`
    border: none;
    width: 40%;
    height: 40px;
    text-align: left;
    padding-left: 1rem;
    &:focus {
        outline: none;
    }
`;

export const SearchBtn = styled.button`
    background-color: white;
    border: none;
`;