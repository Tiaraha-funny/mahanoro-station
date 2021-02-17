import styled from "styled-components";

export const Container = styled.section`
width: 80%;
margin: auto;
`;

export const Title = styled.h2`
color: #E53170;
text-decoration: uppercase;
`;

export const LinkButtonNum = styled.button`
background-color: #E53170;
color: #ffffff;
padding: 20px;
font-weight: 600px;
font-size: 25px;
`;


export const LinkButtonNone = styled.button`
    background-color: #E53170;
    color: #ffffff;
    padding: 20px;
    font-weight: 600px;
    opacity: 0.5;
    font-size: 25px;
    cursor: not-allowed;
`;

export const Group = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;


export const GroupTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

img {
    width: 200px;
    margin-right: 50px;
}

& h2 {
font-size: 54px;
line-height: 76px;
}
`;

export const SubGroup = styled.div`
margin-bottom: 20px;
font-size: 36px;
line-height: 43px;
`;
export const Date = styled.div`
color: #FF8906;
`;
export const Time = styled.div``;
export const SeatBnt = styled.div``;
export const Icons = styled.img`
width: 100px;
`;

export const BusIcon = styled.img`
width: 70px;
`;