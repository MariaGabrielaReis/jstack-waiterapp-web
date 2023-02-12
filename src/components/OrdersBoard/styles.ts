import styled from "styled-components";

export const Board = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  header {
    padding: 8px;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background: #ffffff;
    height: 128px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-size: 18px;
      font-weight: 500;
    }

    span {
      font-size: 16px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
