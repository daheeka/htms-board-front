import React from "react";
import { TableTdStyled, TableTrStyled } from "./Styled/TableStyled";

export const TableTr = ({
  children,
  border = false,
  check = false,
  first = false,
  table = false,
  answer = false,
}) => {
  return (
    <TableTrStyled
      border={border}
      check={check}
      first={first}
      table={table}
      answer={answer}
    >
      {children}
    </TableTrStyled>
  );
};

export const TableTd = ({
  children,
  check = false,
  width = false,
  table = false,
  style,
  chipcolor,
  process,
  onClick,
}) => {
  return (
    <TableTdStyled
      check={check}
      style={style}
      width={width}
      table={table}
      chipcolor={chipcolor}
      process={process}
      onClick={onClick}
    >
      {children}
    </TableTdStyled>
  );
};
