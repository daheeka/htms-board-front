import styled, { css } from "styled-components";

export const AlertStyled = styled.button`
  display: flex;
  width: 450px;
  height: 184px;
  padding: 40px 30px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray-scale-400, #ddd);
  background: var(--gray-scale-0, #fff);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .alertText {
    padding: 8px 0px;
  }
  .alertBox {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .alertImg {
    width: 44px;
    height: 44px;
  }
  .closeImg {
    position: absolute;
    right: 10px;
    top: 10px;
    :hover {
      cursor: pointer;
    }
  }
`;
