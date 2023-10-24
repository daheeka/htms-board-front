import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TableTd, TableTr } from "../../Common/Table";
import { DotChips } from "../../Common/Chips";
import fileIcon from "../../../Image/payday_icon_file_gray700.svg";
import allowIcon from "../../../Image/payday_icon16_arrow3_right_gray900.svg";
const CardListSection = ({ boardReqList, checkList, setCheckList }) => {
  const history = useHistory();
  const [checkedArr, setCheckedArr] = useState([]); // 체크 항목 arr
  const [checkItems, setCheckItems] = useState([]); // 체크 항목 number
  const [boardDataList, setBoardDataList] = useState([]);
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
  const handleReply = (num) => {
    const items = Array.from({ length: num - 1 }, (_, index) => (
      <p key={index}></p>
    ));
    return items;
  };
  const handleMove = () => {
    history.push("/boardDetail");
  };
  useEffect(() => {
    setCheckItems(setCheckList);
    setBoardDataList(boardReqList);
  }, [boardReqList, setCheckList]);
  return (
    <>
      {boardDataList.map((item, idx) => (
        <TableTr
          answer={item.pos !== "0"}
          check={checkItems.includes(boardDataList[idx].boardSeq)}
        >
          <TableTd>
            <input
              type="checkbox"
              id={`checkBox_${idx}`}
              onChange={(e) =>
                handleCheck(e.target.checked, boardDataList[idx].boardSeq, item)
              }
              checked={
                checkItems.includes(boardDataList[idx].boardSeq) ? true : false
              }
            />
            <div className="displayFlexColumn" onClick={() => handleMove()}>
              <p className="captionRegular">{item.workType}</p>
              {item.pos === "0" ? (
                <p className="body1Regular" style={{ marginTop: "0px" }}>
                  {item.title}
                </p>
              ) : item.pos === "1" ? (
                <div className="rowFlowGap02">
                  <div className="rowFlowGap02">
                    <p className="chipText">답변</p>
                    <p className="body1Regular" style={{ marginTop: "0px" }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rowFlowGap02">
                  {handleReply(item.pos)}
                  <div className="rowFlowGap02">
                    <p className="chipText">답변</p>
                    <p className="body1Regular" style={{ marginTop: "0px" }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </TableTd>
          <TableTd
            width
            process={boardDataList[idx].status}
            onClick={() => handleMove()}
          >
            <div>
              <div
                className="displayFlex"
                style={{ gap: "10px", flexDirection: "row-reverse" }}
              >
                <DotChips process={item.status} />
              </div>
              <div className="displayFlex" style={{ gap: "20px" }}>
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
                <div className="rowFlowGap">
                  <p className="captionRegular">{item.writeNm}</p>
                  <img src={allowIcon} />
                  {item.target === "" ? (
                    <>
                      <p className="captionRegular">전체담당자</p>
                    </>
                  ) : item.target === item.writeId ? (
                    <>
                      <p className="captionRegular">담당PP</p>
                    </>
                  ) : (
                    <>
                      <p className="captionRegular">{item.target}</p>
                    </>
                  )}
                </div>
                <p className="captionRegular">조회수 {item.readCount}</p>
                <p className="captionRegular" style={{ marginTop: "0px" }}>
                  {item.regdate}
                </p>
              </div>
            </div>
          </TableTd>
        </TableTr>
      ))}
    </>
  );
};

export default CardListSection;
