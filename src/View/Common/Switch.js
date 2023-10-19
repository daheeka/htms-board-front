import React from "react";
import { SwitchStyled } from "./Styled/SwitchStyled";

const Switch = ({ label, value }) => {
  return (
    <SwitchStyled>
      <div class="toggle">
        <label htmlFor="toggle1">
          <input type="checkbox" name="toggle1" id="toggle1" value={value} />
          <span></span>
        </label>
      </div>
      <label htmlFor="toggle1">{label}</label>
    </SwitchStyled>
  );
};

export default Switch;
