import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: auto;
`;
export const Title = styled.h1`
font-weight: bold;
font-size: 64px;
`;
export const LinkButton = styled.button`
  background-color: #0f0e17;
  color: #ffffff;
  width: 70%;
  padding: 20px;
  font-weight: 600px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const BtnGroup = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;
`;

export const BusIcon = styled.img`
width: 200px;
`;