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
`;


export const LinkButtonNone = styled.button`
background-color: #E53170;
color: #ffffff;
padding: 20px;
font-weight: 600px;
opacity: 0.5;
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
`;
export const Date = styled.div``;
export const Time = styled.div``;
export const SeatBnt = styled.div``;
export const Icons = styled.img`
width: 100px;
`;

export const BusIcon = styled.img`
width: 50px;
`;