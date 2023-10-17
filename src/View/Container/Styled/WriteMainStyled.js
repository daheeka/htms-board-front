import Styled from "styled-components";

export const WriteMainStyled = Styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    .fileFlowRow {
        display: flex;
        flex-direction : row;
        gap: 15px;
        align-items: center;
    }
    .buttonFlowRow{
        display: flex;
        flex-direction : row;
        gap: 10px;
        align-items: center;
        flex-direction: row-reverse;
    }
    .fileGap {
        display: flex;
        flex-direction : row;
        gap: 5px;
    }
    .contentGap {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .headGap {
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;
    }
    .headText {
        font-family: "Pretendard";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        min-width: 100px;
    }
    .line {
        width: 1200px;
        height: 1px;
        background: #DDD; 
    }
`;
