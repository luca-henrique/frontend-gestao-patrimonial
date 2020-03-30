import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  border-radius: 10px;
  padding: 30px;

  background: #fff;

  @media (max-width: 991px) {
    width: 100%;
    border-radius: 0px;
  }
  @media (min-width: 991px) {
    width: 500px;
  }
`;
