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
  margin-top: 50px;
`;

export const Title = styled.div`
  color: #e53170;
  text-decoration: uppercase;
`;

export const Wrapper = styled.div`
`;
export const Unavailable = styled.img`
cursor: not-allowed;
`

export const PickSeat = styled.div`
  margin: 0;
  margin-top: -185px;

  button {
    background-color: white;
    border: none;
    outline: none;
  }
`;

export const InfoContent = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background-color: #e53170;
    padding: 16px;
    color: white;
    font-size: 30px;
  }
`;

export const GroupTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 50%;
  margin: auto;

  font-weight: bold;
  font-size: 35px;

  img {
    margin-right: 50px;
  }
`;

export const Info = styled.div``;

export const SecondInfo = styled.div`
  margin-top: 86px;
`;

export const SubInfo = styled.div`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Span = styled.span`
  font-size: 48px;
  line-height: 57px;
  color: #ff8906;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #000000;
  margin-left: 20px;
`;

export const InfoContentTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #94989b;
`;
