import React from "react";
import { useState } from "react";
import layoutBoardIcon from "../../../Image/payday_common_icon20_layoutboard_gray700.svg";
import layoutTableIcon from "../../../Image/payday_common_icon20_layouttable_gray700.svg";
import plusIcon from "../../../Image/payday_common_icon16_plus_primary500.svg";
import Button from "../../Common/Button";
import { TableTd, TableTr } from "../../Common/Table";

const SelectTableSection = () => {
  const [modal, setModal] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]); // 체크 항목 arr
  const [checkItems, setCheckItems] = useState([]); // 체크 항목 number
  const [totalPageCount, setTotalPageCount] = useState(1); // 받아온 전체 페이지 수 저장
  const [totalItemCount, setTotalItemCount] = useState(0); // 전체 아이템 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 (기본 1 페이지)
  const [cntPage, setCntPage] = useState("15"); // 페이지 당 아이템 개수 (기본 15개)
  const [pageSize, setPageSize] = useState("10"); // 화면 하단 페이지 개수 (10개 고정)
  const [userDataList, setUserDataList] = useState([]);
  const [userSliceList, setUserSliceList] = useState([]);
  const [numberSlice, setNumberSlice] = useState([]);
  const [cntSlice, setCntSlice] = useState([]);
  return (
    <div>
      <div className="chkFlowRow">
        <div className="chkFlowRow">
          <div className="chkRow">
            <input type="checkbox" id="allCheckbox" />
            <label className="body2Regular" htmlFor="allCheckbox">
              항목 전체 선택
            </label>
          </div>
          <p className="line" />
          <div className="layoutGap">
            <div className="layoutRow">
              <img src={layoutBoardIcon} />
              <p className="body2Regular chipText">카드 리스트</p>
            </div>
            <div className="layoutRow">
              <img src={layoutTableIcon} />
              <p className="body2Regular chipText">표 리스트</p>
            </div>
          </div>
        </div>
        <div className="btnRow">
          <Button
            children="게시글추가"
            color="primary50"
            // onClick={onClick}
            // color={btnColor}
            iconSrc={plusIcon}
          />
          <Button
            children="선택항목완료"
            color="primary50"
            // onClick={onClick}
            // color={btnColor}
          />
        </div>
      </div>
      <TableTr>
        <TableTd></TableTd>
      </TableTr>
    </div>
  );
};

export default SelectTableSection;
