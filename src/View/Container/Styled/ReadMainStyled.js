import Styled from "styled-components";

export const ReadMainStyled = Styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .detailFlowCol {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .detailFlowRow {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }
    .detailFlowRow02 {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        flex-direction: row-reverse;
    }
    .btnFlowRow {
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-direction: row-reverse;
    }
    .replyContent {
        display: flex;
        padding: 10px;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 10px;
        background: var(--gray-scale-100, #F5F5F5);
    }
    .replyBox {
        display: flex;
        padding: 12px;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid var(--surface-gray-dd, #DDD);
        background: var(--surface-white, #FFF);
        width: 100%;
    }
    .reply {
        padding: 10px;
        width: 100%;
        border-bottom: 1px solid var(--gray-scale-400, #DDD);
    }
    .fileBox {
        display: flex;
        padding: 15px 20px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 10px;
        background: var(--gray-scale-100, #F5F5F5);
    }
    .line {
        width: 1200px;
        height: 1px;
        background: #DDD;
    }
    .titleText {
        color: var(--text-black-33, #333);
        font-family: "Pretendard";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 27px;
    }
    .deleteIcon {
        display: flex;
        padding: 6px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--primary-300, #81BEFF);
        background: var(--gray-scale-0, #FFF);
        cursor: pointer;
    }
`;
