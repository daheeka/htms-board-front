import React from "react";
import { MenuTabStyled } from "./Styled/MenuTabStyled";

const MenuTab = ({ value, active, onClick }) => {
  return (
    <MenuTabStyled active={active} onClick={onClick}>
      {value}
    </MenuTabStyled>
  );
};

export default MenuTab;
