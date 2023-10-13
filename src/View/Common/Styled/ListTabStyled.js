import styled, { css } from "styled-components";

export const ListTabStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 8px 0px;
  cursor: pointer;
  color: #666666;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  &:hover,
  &:focus {
    border-bottom: 2px solid var(--primary-500, #0069ff);
    filter: invert(42%) sepia(99%) saturate(5704%) hue-rotate(209deg)
      brightness(100%) contrast(105%);
  }
  ${(props) =>
    props.active == true &&
    css`
      border-bottom: 2px solid var(--primary-500, #0069ff);
      filter: invert(42%) sepia(99%) saturate(5704%) hue-rotate(209deg)
        brightness(100%) contrast(105%);
    `};
`;
