import Styled from "styled-components";

export const SwitchStyled = Styled.div`
    display: flex;  
    gap: 8px;
    align-items: center;
    .toggle {
        position: relative;
        display: inline-block;
    }
    .toggle input {
        display: none;
    }
    .toggle span {
        display: block;
        width: 32px;
        height: 20px;
    }
    .toggle span::before,
    .toggle span::after {
        content: "";
        display: block;
        position: absolute;
        cursor: pointer;
    }
    .toggle span::before { /* 배경 */
        width: 100%;
        height: 100%;
        background-color: #DDD;
        border-radius: 100px;
        -webkit-transition: background-color 0.25s ease;
        transition: background-color 0.25s ease;/* 배경색 애니메이션*/
    }
    .toggle span::after { /* 스위치 */
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        border-radius: 100px;
        background-color: #fff;
        -webkit-transition: left 0.25s ease;
        transition: left 0.25s ease; /* 스위치 이동 애니메이션 */
    }
    .toggle input:checked + span::before {
        background-color: #0069FF; /* on 배경색 */
    }
    .toggle input:checked + span::after { /* on 스위치 위치 */
        top:2px;
        left: 14px;
    }

`;
