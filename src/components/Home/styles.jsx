import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    max-width: 1200px;
    gap: 40px;
    padding: 40px;
    justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;

export const MyImg = styled.img`
    width: 300px;
    border-radius: 1rem;
`;