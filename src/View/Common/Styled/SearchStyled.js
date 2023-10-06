import Styled from "styled-components";
import selectBackground from "../../../Image/payday_common_icon20_arrow4_down_gray600.svg";

export const SearchStyled = Styled.div`
    display: flex;
    width: 1200px;
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    background: var(--gray-scale-100, #F5F5F5);

    .monthRow {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
    .calendarRow {
        display: flex;
        flex-direction: row;
        gap: 3px;
        align-items: center;
    }
    .searchRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: stretch;
    }
    .searchRow02 {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .monthBtn {
        padding: 4px 12px;
        justify-content: center;
        align-items: center;
        color: #999999;
        border: 1px solid #F5F5F5;
        background: #F5F5F5;
        &:hover, &:focus {
            border-radius: 8px;
            background: var(--gray-scale-300, #E9E9E9);
            border: 1px solid #E9E9E9;
            transition : 0.3s;
            color: #999999;
        }
        &:active {
            border-radius: 8px;
            background: var(--gray-scale-400, #DDD);
            border: 1px solid #DDD;
            transition : 0.3s;
            color: #333333;
        }
    }
    .monthBtn02 {
        padding: 4px 12px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: var(--gray-scale-400, #DDD);
        border: 1px solid #DDD;
        color: #333333;
    }
    select {
    -webkit-appearance: none; /* for chrome */
    -moz-appearance: none; /*for firefox*/
    appearance: none;
    }
    select {
    background: url(${selectBackground}) no-repeat 97% 50%/24px auto;
    }
    select::-ms-expand {
        display: none; /*for IE10,11*/
    }
    .selectLabel {
        display: inline-block;
    }
    .selectDiv {
        background: #ffffff;
        :hover {
        /* background: #f5f5f5; */
        }
    }
    .select {
        width: 200px;
        padding: 8px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        // height: 34px;
        box-sizing: border-box;
        cursor: pointer;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
    .select:focus {
        outline: 1px solid #007aff;
    }
    .select:disabled {
        background-color: #f5f5f5;
        border: 1px solid #cccccc;
    }
`;
