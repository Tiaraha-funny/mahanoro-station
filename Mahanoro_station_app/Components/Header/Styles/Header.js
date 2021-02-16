import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #0F0E17;
height: 100px;
padding: 20px;

a h2 {
    color:  #A7A9BE;
    font-size: 30px;
}
`;
export const Title = styled.h1`
color: #FFFFFE;
margin: 10px;
font-size: 36px;
display: flex;
align-items: center;

span {
    margin-left: 30px;
}
`;

export const BusIcon = styled.img`
width: 70px;
`;