import styled, { keyframes } from "styled-components";

const desktopAnimationLeft = keyframes`
 from {
    opacity: 0;
    transform: translateX(-35%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }`;

const desktopAnimationRight = keyframes`
from {
  opacity: 0;
  transform: scale(0.9);
}
to {
  opacity: 1;
  transform: scale(1);
}`;

export const Main = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: #f2f2f2;
  height: 100vh;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: #ffff;

  width: 70%;
  height: 700px;

  border-radius: 40px;

  @media (max-width: 992px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  @media (max-height: 700px) {
    width: 100%;
  }
`;

export const Left = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  background-color: #2e64fe;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;

  color: #fff !important;

  h3 {
    animation-delay: 250ms;
    animation: ${desktopAnimationLeft} 300ms;
  }
  h4 {
    animation-delay: 400ms;
    animation: ${desktopAnimationLeft} 600ms;
  }
  p {
    animation-delay: 500ms;
    animation: ${desktopAnimationLeft} 900ms;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-height: 385px) {
    overflow-x: visible;
    overflow-y: scroll;
    height: 500px;
  }
`;

export const FormContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 90%;
  height: 50%;
`;

const mobileAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  @media (max-width: 992px) {
    animation: ${mobileAnimation} 2s;
  }
`;

export const TitleForm = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    animation: ${mobileAnimation} 2s;
    margin-bottom: 20px;
    justify-content: none;
  }
`;
