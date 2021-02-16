import styled from "styled-components";

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
`;
export const Input = styled.input`
  background-color: #000000;
  width: 80%;
  padding: 20px;
  color: #ff8906;
`;
export const Content = styled.div``;
export const Form = styled.form``;
export const Label = styled.label``;

export const SubmitBtn = styled.button`
background-color: #E53170;
padding: 20px;
color: white;
font-size: 20px;
`;
