import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";
import { ReadMainStyled } from "../Styled/ReadMainStyled";
import ReadMainContents from "../../Component/BoardRead/ReadMainContents";
import Message from "../../Common/Message";
import { useEffect } from "react";

const ReadMainContainer = () => {
  const history = useHistory();
  const loc = useLocation();
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({
    title: "",
    contents: <></>,
    flag: "",
  });
  const [boardReadData, setBoardReadData] = useState([
    {
      boardSeq: "1",
      title: "타이틀1",
      workType: "월별인사변동자료",
      readCount: "9",
      reply: "100",
      writeId: "aaa",
      writeNm: "공지메일테스트",
      target: "",
      status: "1", // 0 : 미처리, 1 : 처리중, 2 : 처리완료
      file: true,
      regdate: "2023.09.28",
      pos: "1", // 깊이
      child: "0", // 순서
      timeout: "0일 0시간",
      finishDate: "2023년 02일 20일 09:36:17",
      content: "테스트 입니다.",
    },
  ]);
  const openMessage = (flag) => {
    let contents =
      flag == "댓글삭제" ? (
        <>등록된 댓글을 삭제하시겠습니까?</>
      ) : flag == "취소" ? (
        <>
          입력한 내용이 저장되지 않았습니다.
          <br />
          저장하지 않고 나가시겠습니까?
        </>
      ) : undefined;
    setMessage({
      flag: flag,
      contents: contents,
    });

    setModal(true);
  };
  useEffect(() => {
    if (loc.state?.data === "2") {
      const updatedData = [...boardReadData];
      updatedData[0].status = "2";
      setBoardReadData(updatedData);
    }
  }, [loc]);
  return (
    <ReadMainStyled>
      <ReadMainContents
        {...{
          openMessage,
          boardReadData,
        }}
      />
      {modal && (
        <Message
          {...message}
          btn02Name={
            message.flag == "댓글삭제 "
              ? "삭제"
              : message.flag == "취소"
              ? "나가기"
              : undefined
          }
          clickCancleBtn={() => setModal(false)}
          onClick={() => {
            message.flag == "1"
              ? writeChange("", "", true)
              : message.flag == "취소"
              ? history.push("/")
              : history.push("/boardDetail");
            setModal(false);
          }}
        />
      )}
    </ReadMainStyled>
  );
};

export default ReadMainContainer;
