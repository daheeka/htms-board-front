import styled, { css } from "styled-components";

export const MenuTabStyled = styled.div`
  .headerLine {
    width: 2px;
    height: 14px;
    background: #ddd;
  }
  .headerBtn {
    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    color: #999999;
    background: #fff;
    border: 1px solid #fff;
    &:hover,
    &:focus {
      border-radius: 8px;
      background: var(--gray-scale-100, #f5f5f5);
      border: 1px solid #f5f5f5;
      transition: 0.3s;
      color: #333333;
    }
  }
  ${(props) =>
    props.active == true &&
    css`
      .headerBtn {
        border-radius: 8px;
        background: var(--gray-scale-100, #f5f5f5);
        border: 1px solid #f5f5f5;
        color: #333333;
      }
    `};
`;
