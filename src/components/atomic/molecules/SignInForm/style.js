import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
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

export const Title = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    animation: ${mobileAnimation} 2s;
    margin-bottom: 20px;
    justify-content: none;
  }
`;
