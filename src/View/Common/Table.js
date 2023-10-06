import React from "react";
import { TableTdStyled, TableTrStyled } from "./Styled/TableStyled";

export const TableTr = ({ children, border = false, check = false }) => {
  return (
    <TableTrStyled border={border} check={check}>
      {children}
    </TableTrStyled>
  );
};

export const TableTd = ({
  children,
  head = false,
  first = false,
  last = false,
  check = false,
  style,
}) => {
  return (
    <TableTdStyled
      head={head}
      first={first}
      last={last}
      check={check}
      style={style}
    >
      {children}
    </TableTdStyled>
  );
};
