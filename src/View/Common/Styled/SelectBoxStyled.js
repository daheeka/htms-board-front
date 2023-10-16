import styled, { css } from "styled-components";
import selectBackground from "../../../Image/payday_common_icon20_arrow4_down_gray600.svg";

export const SelectBoxStyled = styled.div`
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
