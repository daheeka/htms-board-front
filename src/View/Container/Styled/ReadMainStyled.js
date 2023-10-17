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
`;
