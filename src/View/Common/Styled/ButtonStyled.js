import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) =>
    props.iconlocation == "right" ? "row-reverse" : "row"};
  width: ${(props) => props.width};
  // size
  ${(props) =>
    props.size == "small"
      ? css`
          padding: 10px 24px;
          border: none;
          border-radius: 8px;
          height: 36px;

          /* Btn/S */
          font-style: normal;
          font-weight: 800;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.28px;
        `
      : props.size == "medium"
      ? css`
          padding: 10px 32px;
          border: none;
          border-radius: 8px;
          /* Btn/M */
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
        `
      : props.size == "large"
      ? css`
          padding: 12px 32px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          /* Btn/L */
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
        `
      : css``}
  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    `}

  //   variant 
  ${(props) =>
    props.variant == "solid" && props.color == "primaryMain"
      ? css`
          color: #ffffff;
          background: #007aff;
          /* &:hover {
            transition: all 0.3s ease 0s;
            background: linear-gradient(90deg, #007aff 0%, #24b6d7 100%);
          } */
        `
      : props.variant == "solid" && props.color == "black"
      ? css`
          color: #ffffff;
          background: #5f5f5f;
        `
      : props.variant == "solid" && props.color == "subRed"
      ? css`
          color: #ffffff;
          background: #ff6d6a;
        `
      : props.variant == "solid" && props.color == "secondaryLight"
      ? css`
          background: #e2f4ff;
          color: #007aff;
          border: 1px solid #dddddd;
        `
      : props.variant == "solid" && props.color == "surfaceBlue"
      ? css`
          background: #e6f2ff;
          color: #007aff;
        `
      : props.variant == "solid" && props.color == "basic"
      ? css`
          border: 1px solid #dddddd;
          background: #ffffff;
          :hover {
            transition: all 0.3s ease 0s;
            background: #f5f5f5;
          }
        `
      : props.variant == "standard" && props.color == "basic"
      ? css`
          border: 1px solid #dddddd;
          background: #ffffff;
          :hover {
            transition: all 0.3s ease 0s;
            background: #f5f5f5;
          }
        `
      : props.variant == "outline" && props.color == "primaryMain"
      ? css`
          border: 1px solid #007aff;
          background: #ffffff;
          color: #007aff;
          :hover {
            transition: all 0.3s ease 0s;
            background: #f5f5f5;
          }
        `
      : props.color == "primary50"
      ? css`
          border: 1px solid #eff7ff;
          background: #eff7ff;
          color: #0069ff;
        `
      : props.variant == "file"
      ? css`
          border: 1px solid var(--primary-300, #81beff);
          background: var(--gray-scale-0, #fff);
          color: #0069ff;

          font-family: "Pretendard";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        `
      : css`
          .default {
            color: #ffffff;
          `}
`;

export const IconButtonStyled = styled.div`
  ${(props) =>
    props.variant == "subPoint"
      ? css`
          background: #ff6d6a;
        `
      : props.variant == "disabled"
      ? css`
          background: #ededed;
          div {
            color: #666666;
          }
        `
      : css`
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),
            #007aff;
          div {
            color: #ffffff;
          }
        `}
`;
