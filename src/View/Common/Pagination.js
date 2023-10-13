import React, { useMemo } from "react";
import { PageStyled } from "./Styled/PageStyled";
import double_arrow_left from "../../Image/payday_common_pagination_icon24_doublearrow_left_gray600_default.svg";
import common_arrow_left from "../../Image/payday_common_pagination_icon24_arrow4_left_gray600_default.svg";
import common_arrow_right from "../../Image/payday_common_pagination_icon24_arrow4_right_gray600_default.svg";
import double_arrow_right from "../../Image/payday_common_pagination_icon24_doublearrow_right_gray600_default.svg";

export const Pagination = ({
  currentPage,
  totalPageCount,
  pageSize,
  setCurrentPage,
}) => {
  const lowerBound = useMemo(
    () => Math.floor((currentPage - 1) / pageSize) * pageSize + 1,
    [currentPage, pageSize]
  );

  const upperBound = useMemo(
    () =>
      Math.min(totalPageCount, Math.ceil(currentPage / pageSize) * pageSize),
    [currentPage, pageSize, totalPageCount]
  );
  return (
    <PageStyled>
      <img
        src={double_arrow_left}
        onClick={() => setCurrentPage(1)}
        style={{ cursor: "pointer" }}
      />
      <img
        src={common_arrow_left}
        onClick={() => setCurrentPage(Math.max(1, lowerBound - 1))}
        style={{ cursor: "pointer" }}
      />
      {[...Array(upperBound - lowerBound + 1).keys()].map((i) => {
        const index = i + lowerBound;
        const style =
          currentPage === index
            ? "body1Bold selectIndex"
            : "body1Bold defaultIndex";
        return (
          <span
            key={index}
            className={style}
            onClick={() => setCurrentPage(index)}
          >
            {index}
          </span>
        );
      })}
      <img
        src={common_arrow_right}
        onClick={() => setCurrentPage(Math.min(totalPageCount, upperBound + 1))}
        style={{ cursor: "pointer" }}
      />
      <img
        src={double_arrow_right}
        onClick={() => setCurrentPage(totalPageCount)}
        style={{ cursor: "pointer" }}
      />
    </PageStyled>
  );
};
