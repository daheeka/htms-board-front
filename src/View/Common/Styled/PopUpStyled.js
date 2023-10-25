import styled from "styled-components";

export const PopUpStyled = styled.div`
  display: flex;
  width: 450px;
  height: 350px;
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
  gap: 10px;
  .popUpBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .popUpBox::-webkit-scrollbar {
    display: none;
  }
  .popUpContent {
    display: flex;
    padding: 10px 15px;
    align-items: center;
    align-self: stretch;
    border-radius: 10px;
    background: var(--gray-scale-100, #f5f5f5);
    border: 1px solid #fff;
    width: 390px;
    min-height: 64px;
    justify-content: space-between;
    &:hover {
      border: 1px solid var(--primary-200, #b2d7ff);
      background: var(--gray-scale-100, #f5f5f5);
      box-shadow: 0px 1px 10px 0px rgba(132, 132, 132, 0.15);
      transition: all 0.3s ease 0s;
    }
  }
  .closeImg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
  .deleteImg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
