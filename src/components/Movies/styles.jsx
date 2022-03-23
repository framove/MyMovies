import styled from "styled-components";

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    gap: 40px;
    padding: 0 40px;
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

  &:hover {
    opacity: 0.8;
  }
  
`;

export const MyImg = styled.img`
    border-radius: 1rem;
    background-color: azure;
    @media (max-width: 560px) {
    width: 90%;
    height: auto;
  }
`;

export const Title = styled.h2`
    font-size: 2rem;
    text-align: center;
`;

export const Text = styled.p`
    font-size: 1rem;
    text-align: center;
    color: black;
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