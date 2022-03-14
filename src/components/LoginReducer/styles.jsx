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

export const Title2 = styled.h1`
    text-align: center;
    font-size: large;
`;

export const Welcome = styled.div`
    text-align: center;
    margin: auto 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-top: 1%;
`;

export const Button2 = styled.button`
    border-radius: 8px;
    border: none;
    width: 80px;
    height: 30px;
    background-color: ${({theme}) => theme.palette.primary};
    color:white;
`;

export const Span = styled.span`
    color: #00abb5;
`;