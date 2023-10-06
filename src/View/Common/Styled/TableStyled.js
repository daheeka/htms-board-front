import Styled, { css } from "styled-components";

export const TableTrStyled = Styled.div`
    display: flex;
    /* flex-direction: row; */
    width: 100%;
    border-bottom: 1px solid var(--gray-scale-400, #DDD);
    ${(props) =>
      props.border &&
      css`
        border-top: 1px solid #dddddd;
      `}
      ${(props) =>
        props.check &&
        css`
          background: #eff7ff;
        `}
      &:hover {
        background: #EFF7FF;
        transition: 0.3s;
      }

`;

export const TableTdStyled = Styled.div`
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-left: ${(props) =>
      props.first ? "0px" : "1px solid var(--gray-scale-400, #DDD)"};
    ${(props) =>
      props.head &&
      css`
        background: #f5f5f5;
        color: #666666;
      `}
    ${(props) =>
      props.last &&
      css`
        justify-content: center;
      `}
    ${(props) =>
      props.check &&
      css`
        justify-content: center;
      `}
      .tableHeadText { 
        color: #999999;
        font-family: "Pretendard";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
      .tableText {
        color: var(--gray-scale-900, #333);
        font-family: "Pretendard";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
      }

      .chipText {
        display: flex;
        padding: 0px 4px;
        justify-content: center;
        align-items: center;
        color: var(--gray-scale-0, #FFF);
        font-family: "Pretendard";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        background : ${(props) =>
          props.chipColor === "red" ? "#FB7185" : "#545454"};
      }

      input[type='checkbox']:checked {
        background:#0069FF;
        /* background:url(check); */
      }
`;
