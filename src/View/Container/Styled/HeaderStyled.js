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
    .headerIcon {
        color: #999999;
    }
`;
