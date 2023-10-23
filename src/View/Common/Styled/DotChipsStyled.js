import styled, { css } from "styled-components";

export const DotChipsStyled = styled.div`
  display: flex;
  padding: 2px 8px 2px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  gap: 4px;
  height: 20px;
  background: ${(props) =>
    props.process === "1"
      ? "#D6EAFF"
      : props.process === "2"
      ? "#D1FAE5"
      : "#E9E9E9"};
  color: ${(props) =>
    props.process === "1"
      ? "#0069FF"
      : props.process === "2"
      ? "#059669"
      : "#545454"};
  ${(props) =>
    props.process === "2" &&
    props.finish === true &&
    css`
      background: #ededed;
      color: #545454;
    `}
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  .iconImg {
    filter: ${(props) =>
      props.process === "1"
        ? "invert(62%) sepia(90%) saturate(7489%) hue-rotate(208deg) brightness(100%) contrast(109%)"
        : props.process === "2"
        ? "invert(38%) sepia(83%) saturate(3913%) hue-rotate(145deg) brightness(93%) contrast(96%)"
        : ""};
  }
`;
