import React from "react";
import styled from "styled-components";
import tick from "../Icons/tick.png";
import { Link as ReachRouterLink } from "react-router-dom";

export default function ModalContainer({
  modalOn,
  setModalOn,
}) {
  const Modal = styled.div`
    z-index: auto;
    position: fixed;
    display: ${modalOn ? "block" : "none"};
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.8);
  `;

  return (
    <Modal>
      <ModalInner>
        <div>
          <Title>
            <img src={tick} />
            <h2>Booking comfirmed!</h2>
          </Title>
          <p>
            Thank you for trusting our services. Your booking has been added to
            your account. You can review it there.
          </p>
          <LinkToAccount to={`/myAccount`}>Check your account</LinkToAccount>
        </div>
        <CloseBtn onClick={() => setModalOn(false)}>X</CloseBtn>
      </ModalInner>
    </Modal>
  );
}

const ModalInner = styled.div`
  background-color: white;
  width: 50%;
  left: 30%;
  bottom: 10%;
  position: fixed;
  border: 5px solid #e53170;
  box-sizing: border-box;
  height: 400px;
  text-align: center;
  padding: 50px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    text-transform: uppercase;
  }
  ~ p {
    margin-bottom: 50px;
  }
`;

const LinkToAccount = styled(ReachRouterLink)`
  background-color: #e53170;
  padding: 16px;
  color: white;
`;
