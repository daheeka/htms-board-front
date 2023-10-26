import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TableTd, TableTr } from "../../Common/Table";
import fileIcon from "../../../Image/payday_icon_file_gray700.svg";
import allowIcon from "../../../Image/payday_icon16_arrow3_right_gray900.svg";
import { DotChips } from "../../Common/Chips";

const CardListSection = ({ boardReqList }) => {
  const history = useHistory();
  const [boardDataList, setBoardDataList] = useState([]);
  const handleReply = (num) => {
    const items = Array.from({ length: num - 1 }, (_, index) => (
      <p key={index}></p>
    ));
    return items;
  };
  const handleMove = () => {
    history.push({
      pathname: "/boardDetail",
      state: { data: "2" },
    });
  };
  useEffect(() => {
    setBoardDataList(boardReqList);
  }, [boardReqList]);
  return (
    <>
      {boardDataList.map((item, idx) => (
        <TableTr answer={item.pos !== "0"}>
          <TableTd onClick={() => handleMove()}>
            <div className="displayFlexColumn">
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
          <TableTd>
            <div>
              <div
                className="displayFlex"
                style={{ gap: "10px", flexDirection: "row-reverse" }}
              >
                <DotChips
                  process={item.status}
                  finish={true}
                  time={"0일 0시간"}
                />
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
