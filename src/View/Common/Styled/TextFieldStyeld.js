import styled, { css } from "styled-components";

export const TextFieldStyeld = styled.input`
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  padding: 8px;
  border-radius: 3px;
  border: none;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};

  ${(props) =>
    props.size == "large"
      ? css`
          font-family: "Pretendard";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
        `
      : props.size == "medium"
      ? css``
      : css``}

  ${(props) =>
    props.variant == "basic"
      ? css`
          background: #ffffff;
          border: 1px solid #dddddd;
        `
      : props.variant == "total"
      ? css`
          background: #e2f4ff;
          border: 1px solid #e2f4ff;
        `
      : props.variant == "disabled"
      ? css`
          background: #dddddd;
        `
      : props.variant == "gray"
      ? css`
          background: #ededed;
        `
      : props.variant == "basic-none"
      ? css`
          background: #ffffff;
        `
      : css`
          background: #f5f5f5;
        `};
  ${(props) =>
    !props.autocomplete
      ? css`
          :focus {
            outline: 1px solid #007aff;
          }

          :focus + label {
            color: #007aff;
          }

          .textfieldLabel {
            display: inline-block;
          }
        `
      : css`
          outline: none;
        `}
`;
