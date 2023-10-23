import React from "react";
import SearchBox from "../../Common/SearchBox";
import iconSrc from "../../../Image/payday_common_icon16_search_gray0.svg";
import TableSection from "./TableSection";

const ConfirmMainContents = ({ date, setDate, boardReqList }) => {
  const onSearch = () => {
    const startDate = date.startDate.replaceAll("-", "");
    const endDate = date.endDate.replaceAll("-", "");

    if (endDate < startDate || startDate == "" || endDate == "")
      alertMessage("검색기간을 확인하세요.", "error");
    else {
      setReload(Math.random());
    }
    console.log("startDate", startDate);
    console.log("endDate", endDate);
  };
  return (
    <div className="displayFlexColumn" style={{ gap: "30px" }}>
      <SearchBox
        {...{
          date,
          setDate,
          onSearch,
          btnName: "검색",
          iconSrc: iconSrc,
          placeholder: "검색어 입력",
          inputWidth: "843px",
          variant: "basic",
        }}
      />
      <TableSection boardReqList={boardReqList} />
    </div>
  );
};

export default ConfirmMainContents;
