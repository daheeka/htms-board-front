import Styled from "styled-components";

export const DepartmentStyled = Styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
.departmentBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    }
 .departmentLayout {
    display: flex;
    height: 600px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0; 
    border-radius: 10px;
    background: var(--gray-scale-100, #F5F5F5);
 }
 .scrollBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    -ms-overflow-style: none; // IE and Edge 
    scrollbar-width: none; //Firefox
 }
  .scrollBox::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
 }
 .departmentCard {
    display: flex;
    padding: 10px 15px;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid var(--gray-scale-200, #EDEDED);
    background: var(--gray-scale-0, #FFF);
    &:hover {
        border: 1px solid var(--primary-200, #B2D7FF);
        box-shadow: 0px 1px 10px 0px rgba(132, 132, 132, 0.15);
    }
 }
 .departmentCard_Active {
    display: flex;
    padding: 10px 15px;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    border-radius: 10px;
    border: 3px solid var(--primary-200, #B2D7FF);
    background: #FAFCFE;
 }
 .managerBox {
    display: flex;
    padding: 6px 0px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid var(--gray-scale-400, #DDD);
    background: var(--gray-scale-300, #E9E9E9);
 }
 .managerNone {
    display: flex;
    padding: 15px 20px; 
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid var(--gray-scale-400, #DDD);
 }
 .managerCard {

 }
 .chipText {
    display: flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: var(--gray-scale-200, #EDEDED);
    color: var(--gray-scale-800, #545454);
    font-family: "Pretendard";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
 }
 .chipText02 {
    display: flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #D6EAFF;
    color: #0063CF;
    font-family: "Pretendard";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
 }
 .deleteIcon {
    width:44px;
    height: 44px;
    padding: 12px;
    &:hover {
        border-radius: 8px;
        background: var(--gray-scale-100, #F5F5F5);
        cursor: pointer;
    }
 }

`;
