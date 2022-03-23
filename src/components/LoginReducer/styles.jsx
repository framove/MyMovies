import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    margin-top: -70px;
    
`;

export const MyForm = styled.form`

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    gap: 20px;
`;

export const Title = styled.h1`
    text-align: center;
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

export const Span = styled.span`
    color: #00abb5;
`;