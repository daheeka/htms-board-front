import Styled from "styled-components";

export const HeaderStyled = Styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    height: 96px;
    z-index: 999;
    display: flex;
    .headerContent {
        min-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
    }
    .headerNav {
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
    }
    .headerNav02 {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
    }
    .headerLine {
        width: 2px;
        height: 14px;
        background: #DDD;
    }
    .headerBtn {
        display: flex;
        padding: 4px 12px;
        justify-content: center;
        align-items: center;
        color: #999999;
        background: #FFF;
        border: 1px solid #FFF;
        &:hover, &:focus {
            border-radius: 8px;
            background: var(--gray-scale-100, #F5F5F5);
            border: 1px solid #F5F5F5;
            transition : 0.3s;
            color: #333333;
        }
    }
    .headerText {
        color: #999999;
        cursor: pointer;
        padding: 8px 16px 8px 16px;
        &:hover, &:focus {
            padding: 8px 16px 8px 16px;
            background: #EDEDED;
            color: #8F32A8;
            border-radius: 8px;
            transition : 0.3s;
        }
    } 
    .headerText.hovered {
        cursor: pointer;
        padding: 8px 16px 8px 16px;
        background: #EDEDED;
        color: #8F32A8;
        border-radius: 8px;
    }
    /* .headerGap {
        width: fit-content;
        display: flex;
        gap: 10px;
        cursor: pointer;
        padding: 8px;
        border-radius: 20px;
        &:hover, &:focus {
            background: #EDEDED;
            border-radius: 20px;
            transition : 0.3s;
        }
    } */
    .headerIcon {
        color: #999999;
    }
`;
