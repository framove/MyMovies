import styled from "styled-components";

export const MyForm = styled.form`

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-top: 30%;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Welcome = styled.div`
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 5%;
`;

export const Button = styled.button`
    border-radius: 8px;
    border: none;
    width: 150px;
    height: 40px;
    text-align: center;
    margin: auto;
    background-color: ${({theme}) => theme.palette.primary};
    color:white;
    margin-top: 20px;
`;

export const Input = styled.input`
    border-radius: 8px;
    border: none;
    width: 200px;
    height: 40px;
    text-align: center;
`;
