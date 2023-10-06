import React from "react";
import { ButtonStyled } from "./Styled/ButtonStyled";

const Button = ({
  children,
  size = "small",
  variant = "solid",
  disabled,
  color = "primaryMain",
  iconSrc,
  iconAlt,
  onClick,
  iconlocation = "left",
  shadow,
  style,
  className,
}) => {
  return (
    <ButtonStyled
      size={size}
      variant={variant}
      disabled={disabled}
      color={color}
      iconlocation={iconlocation}
      onClick={onClick}
      style={style}
      shadow={shadow}
      className={className}
    >
      {iconSrc != undefined && (
        <img src={iconSrc} alt={iconAlt} className="btnIconImg" />
      )}
      {children}
    </ButtonStyled>
  );
};

export default Button;

export const IconButton = () => {
  return <div></div>;
};
