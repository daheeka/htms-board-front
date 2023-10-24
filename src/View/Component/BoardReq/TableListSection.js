import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { DotChips } from "../../Common/Chips";
import { TableTd, TableTr } from "../../Common/Table";
import fileIcon from "../../../Image/payday_icon_file_gray700.svg";

const TableListSection = ({ page, boardReqList, checkList, setCheckList }) => {
  const history = useHistory();
  const [checkedArr, setCheckedArr] = useState([]); // 체크 항목 arr
  const [checkItems, setCheckItems] = useState([]); // 체크 항목 number
  const tHeadList = [
    {
      title: (
        <input
          type="checkbox"
          onChange={(e) => handleCheckAll(e.target.checked)}
          checked={
            checkItems.length === boardReqList.length &&
            boardReqList.length !== 0
              ? true
              : false
          }
        />
      ),
      key: "check",
      width: "40px",
    },
    { title: "번호", key: "no", width: "60px" },
    { title: "형태", key: "workType", width: "150px" },
    { title: "제목", key: "title", width: "450px" },
    { title: "요청자", key: "writeNm", width: "120px" },
    { title: "수신자", key: "target", width: "120px" },
    { title: "요청일", key: "regdate", width: "100px" },
    { title: "조회수", key: "readCount", width: "60px" },
    { title: "처리상태", key: "status", width: "100px" },
  ];
  const [boardDataList, setBoardDataList] = useState([]);
  const [cntSlice, setCntSlice] = useState([]);
  const handleCnt = () => {
    const cntArray = [];
    const numbers = Array.from(
      { length: boardReqList.length },
      (_, i) => i + 1
    );
    for (let i = 0; i < numbers.length; i += 15) {
      const slicedArray = numbers.slice(i, i + 15);
      cntArray.push(slicedArray);
    }
    if (cntArray.length > 0) {
      const rowIndex = page - 1; // 배열의 인덱스
      const cntArr = [];
      for (let i = 0; i < cntArray[rowIndex].length; i++) {
        const cnt = cntArray[rowIndex][i];
        cntArr.push(cnt);
      }
      cntArr.reverse();
      setCntSlice(cntArr);
    }
  };
  // 체크박스 개별 선택
  const handleCheck = (checked, num, item) => {
    if (checked) {
      checkList([...checkItems, num]);
      setCheckItems([...checkItems, num]);
      setCheckedArr([...checkedArr, item]);
    } else {
      // 체크 해제
      checkList(checkItems.filter((el) => el !== num));
      setCheckItems(checkItems.filter((el) => el !== num));
      setCheckedArr(checkedArr.filter((el) => el !== item));
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
      checkList(checkArray);
    }
    // 전체 체크 해제
    else {
      setCheckItems([]);
      setCheckedArr([]);
      checkList([]);
    }
  };
  const handleReply = (num) => {
    const items = Array.from({ length: num - 1 }, (_, index) => (
      <p key={index}></p>
    ));
    return items;
  };
  useEffect(() => {
    setCheckItems(setCheckList);
    setBoardDataList(boardReqList);
    handleCnt();
  }, [page, boardReqList, setCheckList]);
  return (
    <>
      <TableTr table>
        {tHeadList.map((item, idex) => (
          <TableTd
            key={idex}
            head={true}
            style={{ width: item.width, height: "34px" }}
            first={idex === 0}
            check={idex === 0}
            table={idex !== 0}
          >
            <p className="tableHeadText">{item.title}</p>
          </TableTd>
        ))}
      </TableTr>
      {boardDataList.map((item, idx) => (
        <TableTr
          check={checkItems.includes(boardDataList[idx].boardSeq)}
          answer={item.pos !== "0"}
          table
        >
          {tHeadList.map((head, idex) => (
            <>
              {idex === 0 && (
                <TableTd
                  key={idx}
                  style={{
                    width: tHeadList[idex].width,
                    minHeight: "34px",
                  }}
                  first={idex === 0}
                  check={idex === 0}
                >
                  <input
                    type="checkbox"
                    id={`checkBox_${idx}`}
                    onChange={(e) =>
                      handleCheck(
                        e.target.checked,
                        boardDataList[idx].boardSeq,
                        item
                      )
                    }
                    checked={
                      checkItems.includes(boardDataList[idx].boardSeq)
                        ? true
                        : false
                    }
                  />
                </TableTd>
              )}
              {idex === 1 && (
                <TableTd
                  onClick={() => history.push("/boardDetail")}
                  key={idx}
                  style={{
                    width: tHeadList[idex].width,
                    minHeight: "34px",
                  }}
                  first={idex === 0}
                  check={idex === 0}
                  table
                >
                  <p className="body2Regular">{cntSlice[idx]}</p>
                </TableTd>
              )}
              {idex === 3 && (
                <TableTd
                  onClick={() => history.push("/boardDetail")}
                  key={idx}
                  style={{
                    width: tHeadList[idex].width,
                    minHeight: "34px",
                  }}
                  first={idex === 0}
                  check={idex === 0}
                  table
                >
                  <>
                    {item.pos === "0" ? (
                      <p className="body2Regular">{item[head.key]}</p>
                    ) : item.pos === "1" ? (
                      <div className="rowFlowGap02">
                        <div className="rowFlowGap02">
                          <p className="chipText">답변</p>
                          <p
                            className="body2Regular"
                            style={{ marginTop: "0px" }}
                          >
                            {item[head.key]}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="rowFlowGap02">
                        {handleReply(item.pos)}
                        <div className="rowFlowGap02">
                          <p className="chipText">답변</p>
                          <p
                            className="body2Regular"
                            style={{ marginTop: "0px" }}
                          >
                            {item[head.key]}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="rowFlowGap">
                      <p className="replyCnt captionBold">{item.reply}</p>
                      {item.file === true ? (
                        <>
                          <img src={fileIcon} className="file" />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                </TableTd>
              )}
              {idex === 5 && (
                <TableTd
                  key={idx}
                  style={{
                    width: tHeadList[idex].width,
                    minHeight: "34px",
                  }}
                  first={idex === 0}
                  check={idex === 0}
                  table
                  onClick={() => history.push("/boardDetail")}
                >
                  {item.target === "" ? (
                    <>
                      <p className="body2Regular" style={{ marginTop: "0px" }}>
                        전체담당자
                      </p>
                    </>
                  ) : item.target === item.writeId ? (
                    <>
                      <p className="body2Regular" style={{ marginTop: "0px" }}>
                        담당PP
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="body2Regular" style={{ marginTop: "0px" }}>
                        {item.target}
                      </p>
                    </>
                  )}
                </TableTd>
              )}
              {idex === tHeadList.length - 1 && (
                <TableTd
                  key={idx}
                  style={{
                    width: tHeadList[idex].width,
                    minHeight: "34px",
                  }}
                  first={idex === 0}
                  check={idex === 0}
                  process={boardDataList[idx].status}
                  table
                  onClick={() => history.push("/boardDetail")}
                >
                  <DotChips process={item.status} />
                </TableTd>
              )}
              {idex !== 0 &&
                idex !== 1 &&
                idex !== 3 &&
                idex !== 5 &&
                idex !== tHeadList.length - 1 && (
                  <TableTd
                    key={idx}
                    style={{
                      width: tHeadList[idex].width,
                      minHeight: "34px",
                    }}
                    first={idex === 0}
                    check={idex === 0}
                    table
                    onClick={() => history.push("/boardDetail")}
                  >
                    <p className="body2Regular">{item[head.key]}</p>
                  </TableTd>
                )}
            </>
          ))}
        </TableTr>
      ))}
    </>
  );
};

export default TableListSection;
