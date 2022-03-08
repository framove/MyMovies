import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin:30px auto;
    max-width: 1200px;
    gap: 20px;

    @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
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