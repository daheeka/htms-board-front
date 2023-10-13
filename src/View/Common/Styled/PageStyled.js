import Styled from "styled-components";

export const PageStyled = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    padding: 30px 0px;
    align-items: center;
    .defaultIndex {
        width: fit-content;
        height : 32px;
        padding: 4px 11px;
        color: #999999;
        border: 1px solid #FFF;
        text-align: center;
        &:hover {
            color: #0B3F98;
            border-radius: 3px;
            border: 1px solid #B2D7FF;
            cursor: pointer;
        }
    }
    .selectIndex {
        cursor: pointer;
        text-align: center;
        width : fit-content;
        height : 32px;
        padding: 4px 11px;
        background-color : #EFF7FF;
        border: 1px solid #FFF;
        border-radius : 3px;
        color : #0069FF;
    }
`;
