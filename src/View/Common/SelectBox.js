import React from "react";
import { SelectBoxStyled } from "./Styled/SelectBoxStyled";
import { fixNullString } from "./Common";

const SelectBox = ({ children, value, testRef, className, ...rest }) => {
  return (
    <SelectBoxStyled>
      <div className="selectDiv">
        <select
          className={`select ${className}`}
          id="selectBox"
          value={fixNullString(value, "")}
          ref={testRef}
          {...rest}
        >
          {children}
        </select>
      </div>
    </SelectBoxStyled>
  );
};

export default SelectBox;
