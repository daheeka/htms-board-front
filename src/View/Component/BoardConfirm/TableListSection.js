import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TableTd, TableTr } from "../../Common/Table";
import fileIcon from "../../../Image/payday_icon_file_gray700.svg";
import { DotChips } from "../../Common/Chips";

const TableListSection = ({ page, boardReqList }) => {
  const tHeadList = [
    { title: "번호", key: "no", width: "60px" },
    { title: "형태", key: "workType", width: "150px" },
    { title: "제목", key: "title", width: "390px" },
    { title: "요청자", key: "writeNm", width: "120px" },
    { title: "수신자", key: "target", width: "120px" },
    { title: "요청일", key: "regdate", width: "100px" },
    { title: "조회수", key: "readCount", width: "60px" },
    { title: "처리상태", key: "status", width: "100px" },
    { title: "경과시간", key: "timeout", width: "100px" },
  ];
  const [boardDataList, setBoardDataList] = useState([]);
  const [cntSlice, setCntSlice] = useState([]);
  const history = useHistory();
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
  const handleReply = (num) => {
    const items = Array.from({ length: num - 1 }, (_, index) => (
      <p key={index}></p>
    ));
    return items;
  };
  useEffect(() => {
    setBoardDataList(boardReqList);
    handleCnt();
  }, [page, boardReqList]);

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
        <TableTr answer={item.pos !== "0"} table>
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
                  onClick={() =>
                    history.push({
                      pathname: "/boardDetail",
                      state: { data: "2" },
                    })
                  }
                >
                  <p className="body2Regular">{cntSlice[idx]}</p>
                </TableTd>
              )}
              {idex === 2 && (
                <TableTd
                  key={idx}
                  style={{
                    width: tHeadList[idex].width,
                    minHeight: "34px",
                  }}
                  first={idex === 0}
                  check={idex === 0}
                  table
                  onClick={() =>
                    history.push({
                      pathname: "/boardDetail",
                      state: { data: "2" },
                    })
                  }
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
              {idex === 4 && (
                <TableTd
                  key={idx}
                  style={{
                    width: tHeadList[idex].width,
                    minHeight: "34px",
                  }}
                  first={idex === 0}
                  check={idex === 0}
                  table
                  onClick={() =>
                    history.push({
                      pathname: "/boardDetail",
                      state: { data: "2" },
                    })
                  }
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
              {idex === tHeadList.length - 2 && (
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
                  onClick={() =>
                    history.push({
                      pathname: "/boardDetail",
                      state: { data: "2" },
                    })
                  }
                >
                  <DotChips process={item.status} />
                </TableTd>
              )}
              {idex !== 0 &&
                idex !== 2 &&
                idex !== 4 &&
                idex !== tHeadList.length - 2 && (
                  <TableTd
                    key={idx}
                    style={{
                      width: tHeadList[idex].width,
                      minHeight: "34px",
                    }}
                    first={idex === 0}
                    check={idex === 0}
                    table
                    onClick={() =>
                      history.push({
                        pathname: "/boardDetail",
                        state: { data: "2" },
                      })
                    }
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
