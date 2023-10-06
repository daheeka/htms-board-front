import React from "react";
import { TextFieldStyeld } from "./Styled/TextFieldStyeld";

const TextField = ({
  value,
  onChange,
  width,
  variant = "default",
  placeholder,
  height,
  fontSize,
  onKeyUp = () => {},
  setFocus,
  autocomplete,
  useRef,
  ...rest
}) => {
  return (
    <TextFieldStyeld
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      variant={variant}
      placeholder={placeholder}
      fontSize={fontSize}
      ref={useRef}
      autocomplete
      onKeyUp={(e) => {
        if (e.key == "Enter") onKeyUp();
      }}
      onFocus={() => autocomplete && setFocus(true)}
      onBlur={() => autocomplete && setFocus(false)}
      {...rest}
    ></TextFieldStyeld>
  );
};

export default TextField;
