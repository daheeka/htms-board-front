import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../Common/Button";
import { TableTd, TableTr } from "../../Common/Table";
import { Pagination } from "../../Common/Pagination";
import CardListSection from "./CardListSection";
import TableListSection from "./TableListSection";
import ListTab from "../../Common/ListTab";
import plusIcon from "../../../Image/payday_common_icon16_plus_primary500.svg";

const SelectTableSection = ({ boardReqList }) => {
  const [modal, setModal] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]); // 체크 항목 arr
  const [checkItems, setCheckItems] = useState([]); // 체크 항목 number
  const [totalPageCount, setTotalPageCount] = useState(1); // 받아온 전체 페이지 수 저장
  const [totalItemCount, setTotalItemCount] = useState(0); // 전체 아이템 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 (기본 1 페이지)
  const [cntPage, setCntPage] = useState("15"); // 페이지 당 아이템 개수 (기본 15개)
  const [pageSize, setPageSize] = useState("10"); // 화면 하단 페이지 개수 (10개 고정)
  const [boardDataList, setBoardDataList] = useState([]);
  const [userSliceList, setUserSliceList] = useState([]);
  const [numberSlice, setNumberSlice] = useState([]);
  const [cntSlice, setCntSlice] = useState([]);
  const [cardState, setCardState] = useState("1");
  const history = useHistory();
  useEffect(() => {
    setBoardDataList(boardReqList);
  }, [boardReqList]);
  const handleCard = (state) => {
    if (state === "1") {
      setCardState("1");
    } else if (state === "2") {
      setCardState("2");
    }
  };
  // 체크박스 전체 선택
  const handleCheckAll = (checked) => {
    if (checked) {
      const checkArray = [];
      const allCheckedList = []; // 모든 데이터 담는 빈 배열
      // 전체 체크 박스 체크
      boardReqList.forEach((el) => checkArray.push(el.boardSeq));
      boardReqList.forEach((el) => allCheckedList.push(el));
      setCheckItems(checkArray);
      setCheckedArr(allCheckedList);
    }
    // 전체 체크 해제
    else {
      setCheckItems([]);
      setCheckedArr([]);
    }
  };
  const handleMove = () => {
    history.push("/boardWrite");
  };
  return (
    <div>
      <div className="chkFlowRow">
        <div className="chkFlowRow">
          <div className="chkRow">
            <input
              type="checkbox"
              id="allCheckbox"
              onChange={(e) => handleCheckAll(e.target.checked)}
              checked={
                checkItems.length === boardReqList.length &&
                boardReqList.length !== 0
                  ? true
                  : false
              }
            />
            <label className="body2Regular" htmlFor="allCheckbox">
              항목 전체 선택
            </label>
          </div>
          <p className="line" />
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
        </div>
        <div className="btnRow">
          <Button
            children="게시글추가"
            color="primary50"
            onClick={handleMove}
            iconSrc={plusIcon}
          />
          <Button
            children="선택항목완료"
            color="primary50"
            // onClick={onClick}
          />
        </div>
      </div>
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
        <CardListSection
          boardReqList={boardDataList}
          checkList={setCheckItems}
          setCheckList={checkItems}
        />
      ) : (
        <TableListSection
          page={currentPage}
          boardReqList={boardDataList}
          checkList={setCheckItems}
          setCheckList={checkItems}
        />
      )}
      <Pagination
        {...{ currentPage, totalPageCount, pageSize, setCurrentPage }}
      />
    </div>
  );
};

export default SelectTableSection;
