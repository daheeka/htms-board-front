import Styled, { css } from "styled-components";

export const TableTrStyled = Styled.div`
    display: flex;
    /* flex-direction: row; */
    width: 100%;
    gap: ${(props) => (props.table ? "0px;" : "20px;")};
    justify-content: space-between;
    max-width: 1200px;

    padding: ${(props) => (props.table ? "0px;" : "10px 20px;")};
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
    ${(props) =>
      props.first &&
      css`
        background: #f5f5f5;
        padding: 0px 12px;
        height: 34px;
      `}
      &:hover {
        background: #EFF7FF;
        transition: 0.3s;
      }

`;

export const TableTdStyled = Styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 746px;
    ${(props) =>
      props.table &&
      css`
        border-left: 1px solid var(--gray-scale-400, #ddd);
        padding: 0px 8px;
        justify-content: space-between;
      `}
    ${(props) =>
      props.check &&
      css`
        justify-content: center;
      `}
      ${(props) =>
        props.width &&
        css`
          min-width: fit-content;
        `}
      .tableHeadText {
        color: #545454;
        font-family: "Pretendard";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
      }
      .file {
        display: flex;
        width: 35px;
        height: 20px;
        padding: 2px 8px;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: var(--surface-gray-ed, #EDEDED);
      }
      .replyCnt{
        display: flex;
        height: 20px;
        padding: 2px 7px;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: var(--surface-gray-ed, #EDEDED);
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
        border-radius: 3px;
        background : ${(props) =>
          props.chipcolor === "red" ? "#FB7185" : "#545454"};
      }
      .chipText02 {
        display: flex;
        padding: 2px 8px 2px 6px;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        gap: 4px;
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
        font-family: "Pretendard";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; 
      }
      .rowFlowGap {
        display: flex;
        flex-direction: row;
        gap: 5px;
      }
      input[type='checkbox'] {
        min-width : 16px;
      }
      input[type='checkbox']:checked {
        background:#0069FF;
        /* background:url(check); */
      }
`;
