import React from "react";
import { HeaderStyled } from "./Styled/HeaderStyled";
import DepartmentHeaderContent from "../Component/DepartmentHeaderContent";

const DepartmentHeaderContainer = () => {
  return (
    <HeaderStyled>
      <DepartmentHeaderContent />
    </HeaderStyled>
  );
};

export default DepartmentHeaderContainer;
