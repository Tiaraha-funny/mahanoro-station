import styled from "styled-components";

export const Container = styled.section`
width: 80%;
margin: auto;
`;

export const Group = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;    
`;

export const SubGroup = styled.div``;

export const SubTitle = styled.h1`
color: #000000;
`;

export const Seats = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`;

export const Title = styled.h2`
color: #E53170;
text-decoration: uppercase;
`;
export const PickSeat = styled.div``;
export const InfoContent = styled.div`
button {
    background-color:  #E53170;
    padding: 16px;
    color: white;
}
`;
export const Info = styled.div``; 