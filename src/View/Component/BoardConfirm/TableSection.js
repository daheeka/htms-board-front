import React, { useState, useEffect } from "react";
import ListTab from "../../Common/ListTab";
import { TableTd, TableTr } from "../../Common/Table";
import CardListSection from "./CardListSection";
import TableListSection from "./TableListSection";
import { Pagination } from "../../Common/Pagination";
import Icon from "../../../Image/payday_common_icon20_infoincircle_primary500.svg";

const TableSection = ({ boardReqList }) => {
  const [boardDataList, setBoardDataList] = useState([]);
  const [cardState, setCardState] = useState("1");
  const [totalPageCount, setTotalPageCount] = useState(1); // 받아온 전체 페이지 수 저장
  const [totalItemCount, setTotalItemCount] = useState(0); // 전체 아이템 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 (기본 1 페이지)
  const [cntPage, setCntPage] = useState("15"); // 페이지 당 아이템 개수 (기본 15개)
  const [pageSize, setPageSize] = useState("10"); // 화면 하단 페이지 개수 (10개 고정)
  const [userSliceList, setUserSliceList] = useState([]);
  const [numberSlice, setNumberSlice] = useState([]);
  const [cntSlice, setCntSlice] = useState([]);
  const handleCard = (state) => {
    if (state === "1") {
      setCardState("1");
    } else if (state === "2") {
      setCardState("2");
    }
  };
  useEffect(() => {
    setBoardDataList(boardReqList);
  }, [boardReqList]);
  return (
    <div className="displayFlexColumn" style={{ gap: "10px" }}>
      <div className="displayFlexBetween">
        <div className="layoutGap">
          <ListTab
            value={"카드리스트"}
            active={cardState === "1"}
            no="1"
            onClick={() => handleCard("1")}
          />
          <ListTab
            value={"표 리스트"}
            active={cardState === "2"}
            no="2"
            onClick={() => handleCard("2")}
          />
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <img src={Icon} />
          <p className="body2Regular pointColor">
            평균 업무처리경과 시간 : 103일 7시간
          </p>
        </div>
      </div>
      <div>
        <TableTr border={true} first={true}>
          <TableTd chipcolor="red">
            <p className="chipText">공지사항</p>
            <p className="body2Regular" style={{ marginTop: "0px" }}>
              연말정산 추가서류 접수방법(메뉴얼) 안내
            </p>
          </TableTd>
        </TableTr>
        <TableTr first={true}>
          <TableTd chipcolor="red">
            <p className="chipText">공지사항</p>
            <p className="body2Regular" style={{ marginTop: "0px" }}>
              2019 연말정산 운영(변경) 안내
            </p>
          </TableTd>
        </TableTr>
        {boardReqList.length === 0 ? (
          <></>
        ) : boardReqList.length !== 0 && cardState === "1" ? (
          <CardListSection boardReqList={boardDataList} />
        ) : (
          <TableListSection page={currentPage} boardReqList={boardDataList} />
        )}
        <Pagination
          {...{ currentPage, totalPageCount, pageSize, setCurrentPage }}
        />
      </div>
    </div>
  );
};

export default TableSection;
