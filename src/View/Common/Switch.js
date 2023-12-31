import React from "react";
import { SwitchStyled } from "./Styled/SwitchStyled";

const Switch = ({ label, onChange, value }) => {
  return (
    <SwitchStyled>
      <div class="toggle">
        <label htmlFor="toggle1">
          <input
            type="checkbox"
            name="toggle1"
            id="toggle1"
            onChange={onChange}
            checked={value}
          />
          <span></span>
        </label>
      </div>
      <label htmlFor="toggle1">{label}</label>
    </SwitchStyled>
  );
};

export default Switch;
