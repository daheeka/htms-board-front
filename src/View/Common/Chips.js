import React from "react";
import { DotChipsStyled } from "./Styled/DotChipsStyled";
import dotIcon from "../../Image/payday_common_statuschip_icon16_dot_gray800_notstarted.svg";
import { ChipsStyled } from "./Styled/ChipsStyled";

export const DotChips = ({ process, status }) => {
  return (
    <DotChipsStyled process={process}>
      <img src={dotIcon} className="iconImg" />
      {status}
    </DotChipsStyled>
  );
};

export const Chips = ({ chipcolor, value }) => {
  return <ChipsStyled chipcolor={chipcolor}>{value}</ChipsStyled>;
};
