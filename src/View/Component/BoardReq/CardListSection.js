import React from "react";
import { useState } from "react";
import { TableTd, TableTr } from "../../Common/Table";
import fileIcon from "../../../Image/payday_icon_file_gray700.svg";
import allowIcon from "../../../Image/payday_icon16_arrow3_right_gray900.svg";
import dotIcom from "../../../Image/payday_common_statuschip_icon16_dot_gray800_notstarted.svg";
import { useEffect } from "react";
const CardListSection = ({ boardReqList, checkList, setCheckList }) => {
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
  useEffect(() => {
    setCheckItems(setCheckList);
    setBoardDataList(boardReqList);
  }, [boardReqList, setCheckList]);
  return (
    <>
      {boardDataList.map((item, idx) => (
        <TableTr check={checkItems.includes(boardDataList[idx].boardSeq)}>
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
            <div>
              <p className="captionRegular">{item.workType}</p>
              <p className="body1Regular" style={{ marginTop: "0px" }}>
                {item.title}
              </p>
            </div>
          </TableTd>
          <TableTd width process={boardDataList[idx].status}>
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
              <p className="captionRegular" style={{ marginTop: "0px" }}>
                {item.writeNm}
              </p>
              <img src={allowIcon} />
              {item.target === "" ? (
                <>
                  <p className="captionRegular" style={{ marginTop: "0px" }}>
                    전체담당자
                  </p>
                </>
              ) : item.target === item.writeId ? (
                <>
                  <p className="captionRegular" style={{ marginTop: "0px" }}>
                    담당PP
                  </p>
                </>
              ) : (
                <>
                  <p className="captionRegular" style={{ marginTop: "0px" }}>
                    {item.target}
                  </p>
                </>
              )}
            </div>
            <p className="captionRegular" style={{ marginTop: "0px" }}>
              조회수 {item.readCount}
            </p>
            <div>
              {item.status === "1" ? (
                <>
                  <p className="chipText02">
                    <img
                      src={dotIcom}
                      style={{
                        filter:
                          "invert(62%) sepia(90%) saturate(7489%) hue-rotate(208deg) brightness(100%) contrast(109%)",
                      }}
                    />
                    처리중
                  </p>
                </>
              ) : item.status === "2" ? (
                <>
                  <p className="chipText02">
                    <img
                      src={dotIcom}
                      style={{
                        filter:
                          "invert(38%) sepia(83%) saturate(3913%) hue-rotate(145deg) brightness(93%) contrast(96%)",
                      }}
                    />
                    완료
                  </p>
                </>
              ) : (
                <>
                  <p className="chipText02">
                    <img src={dotIcom} />
                    미처리
                  </p>
                </>
              )}
              <p className="captionRegular" style={{ marginTop: "0px" }}>
                {item.regdate}
              </p>
            </div>
          </TableTd>
        </TableTr>
      ))}
    </>
  );
};

export default CardListSection;
