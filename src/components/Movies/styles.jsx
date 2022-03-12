import styled from "styled-components";

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    gap: 40px;
    padding: 40px;
    justify-content: center;

    @media (max-width: 560px) {
    grid-template-columns: 100%;
  }

`;

export const Card = styled.li`
  list-style: none;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  
`;

export const MyImg = styled.img`
    border-radius: 1rem;
    background-color: azure;
    @media (max-width: 560px) {
    width: 90%;
    height: auto;
  }
`;