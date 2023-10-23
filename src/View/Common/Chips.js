import React from "react";
import { DotChipsStyled } from "./Styled/DotChipsStyled";
import dotIcon from "../../Image/payday_common_statuschip_icon16_dot_gray800_notstarted.svg";
import { ChipsStyled } from "./Styled/ChipsStyled";
import { useEffect } from "react";
import { useState } from "react";

export const DotChips = ({ process, finish, time }) => {
  const [value, setValue] = useState("");
  const handleValue = (process) => {
    if (process === "1") {
      setValue("처리중");
    } else if (process === "2") {
      setValue("완료");
    } else {
      setValue("미처리");
    }
  };
  useEffect(() => {
    handleValue(process);
  }, [process]);
  return (
    <DotChipsStyled process={process} finish={finish}>
      {finish != true && <img src={dotIcon} className="iconImg" />}
      {finish != true ? <>{value}</> : <>{time}</>}
    </DotChipsStyled>
  );
};

export const Chips = ({ chipcolor, value }) => {
  return <ChipsStyled chipcolor={chipcolor}>{value}</ChipsStyled>;
};
