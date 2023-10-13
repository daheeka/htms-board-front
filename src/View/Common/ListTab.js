import React from "react";
import { ListTabStyled } from "./Styled/ListTabStyled";
import layoutBoardIcon from "../../Image/payday_common_icon20_layoutboard_gray700.svg";
import layoutTableIcon from "../../Image/payday_common_icon20_layouttable_gray700.svg";
const ListTab = ({ active, value, onClick, no }) => {
  return (
    <ListTabStyled active={active} onClick={onClick}>
      {no === "1" && <img src={layoutBoardIcon} />}
      {no === "2" && <img src={layoutTableIcon} />}
      {value}
    </ListTabStyled>
  );
};

export default ListTab;
