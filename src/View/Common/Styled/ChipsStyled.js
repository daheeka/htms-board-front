import styled from "styled-components";

export const ChipsStyled = styled.div`
  display: flex;
  padding: 0px 4px;
  justify-content: center;
  align-items: center;
  color: var(--gray-scale-0, #fff);
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  border-radius: 3px;
  height: 16px;
  background: ${(props) => (props.chipcolor === "red" ? "#FB7185" : "#545454")};
`;
