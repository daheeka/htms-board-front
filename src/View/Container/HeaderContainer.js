import React from "react";
import { HeaderStyled } from "./Styled/HeaderStyled";
import HeaderContents from "../Component/HeaderContents";

const HeaderContainer = () => {
  return (
    <HeaderStyled>
      <HeaderContents />
    </HeaderStyled>
  );
};

export default HeaderContainer;
