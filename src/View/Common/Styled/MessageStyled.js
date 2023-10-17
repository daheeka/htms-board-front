import styled, { css } from "styled-components";

export const MessageStyled = styled.div`
  display: flex;
  width: 465px;
  padding: 40px;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid var(--gray-scale-400, #ddd);
  background: var(--gray-scale-0, #fff);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .closeImg {
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover {
      cursor: pointer;
    }
  }
  button {
    width: 50%;
  }
`;
