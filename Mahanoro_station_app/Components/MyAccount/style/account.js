import styled from "styled-components";
import {Link as ReachRouterLink} from "react-router-dom";

export const Container = styled.section`
  width: 80%;
  margin: auto;
`;
export const Title = styled.div`
font-size: 36px;
  span {
    color: #e53170;
    text-decoration: uppercase;
  }
`;
export const Group = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 30px;
    margin-right: 30px;
}
`;
export const SubGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h3 {
    font-size: 30px;
  }
`;
export const Input = styled.input`
  background-color: #000000;
  width: 80%;
  padding: 20px;
  color: #ff8906;
  font-size: 20px;
`;
export const Content = styled.div``;
export const Form = styled.form``;
export const Label = styled.label`
font-size: 25px;
`;

export const SubmitBtn = styled(ReachRouterLink)`
background-color: #E53170;
padding: 20px;
color: white;
font-size: 20px;
`;

export const Info = styled.div`
font-weight: 500;
font-size: 24px;
color: #000000;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

div {
  margin-left: 20px;
  margin-right: 20px;
}
`;

export const Cancel = styled.button`
background-color: #FF8906;
font-size: 24px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
padding: 16px;
`;