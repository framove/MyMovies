import styled from "styled-components";

export const MyHeader = styled.header`
    margin: auto;
    padding: 16px 45px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.palette.light};
`;

export const Logo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
`;

