import React from "react";
import { ReadMainStyled } from "../Styled/ReadMainStyled";
import ReadMainContents from "../../Component/BoardRead/ReadMainContents";

const ReadMainContainer = () => {
  return (
    <ReadMainStyled>
      <ReadMainContents />
    </ReadMainStyled>
  );
};

export default ReadMainContainer;
