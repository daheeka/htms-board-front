import React from "react";
import { WriteMainStyled } from "../Styled/WriteMainStyled";
import WriteMainContents from "../../Component/BoardWrite/WriteMainContents";

const WriteMainContainer = () => {
  return (
    <WriteMainStyled>
      <WriteMainContents />
    </WriteMainStyled>
  );
};

export default WriteMainContainer;
