import React from "react";
import styled from "styled-components";

export default function ModalContainer({ modalOn, setModalOn }) {
  //   const classNames = modalOn ? "display-block" : "display-none";

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

  const ModalInner = styled.div`
    background-color: white;
    width: 50%;
    left: 30%;
    bottom: 50%;
    position: fixed;
    border: 5px solid #E53170;
    box-sizing: border-box;
  `;

  return (
    <Modal>
      <ModalInner>
        <div>
          <div>Booking comfirmed!</div>
          <p>
            Thank you for trusting our services. Your booking has been added to
            your account. You can review it there.
          </p>
          <button>Check your account</button>
        </div>
        <button onClick={() => setModalOn(false)}>X</button>
      </ModalInner>
    </Modal>
  );
}
