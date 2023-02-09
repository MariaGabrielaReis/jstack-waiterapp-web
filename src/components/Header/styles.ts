import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  height: 198px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #ffffff;
      font-size: 32px;
    }

    h2 {
      color: #ffffff;
      font-weight: 400;
      font-size: 18px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
