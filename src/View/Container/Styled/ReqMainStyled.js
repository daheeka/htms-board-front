import Styled from "styled-components";

export const ReqMainStyled = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    .chkRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }
    .chkFlowRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        height: 37px;
        justify-content: space-between;
    }
    .layoutRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
        padding: 8px 0px;
        cursor: pointer;
        &:hover, &:focus {
            border-bottom: 2px solid var(--primary-500, #0069FF);
            filter: invert(42%) sepia(99%) saturate(5704%) hue-rotate(209deg) brightness(100%) contrast(105%);
        }
    }
    .btnRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .layoutGap {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
    }
    .contentsCol {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .chipText {
        color: #666666;
    }
    .line {
        width: 1px;
        height: 20px;
        background: #DDD;
    }
`;
