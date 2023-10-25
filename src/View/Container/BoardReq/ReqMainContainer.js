import React, { useState, useContext } from "react";
import { ReqMainStyled } from "../Styled/ReqMainStyled";
import { getFormatDate } from "../../Common/Common";
import ReqMainContents from "../../Component/BoardReq/ReqMainContents";
import Message from "../../Common/Message";
import AlertContext from "../../../AlertContext";

const ReqMainContainer = () => {
  let prevDate = new Date();
  prevDate.setMonth(prevDate.getMonth() - 3);
  const [date, setDate] = useState({
    startDate: getFormatDate(prevDate, "-"),
    endDate: getFormatDate(new Date(), "-"),
  });
  const [boardReqList, setBoardReqList] = useState([
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
      pos: "0", // 깊이
      child: "0", // 순서
    },
    {
      boardSeq: "2",
      title: "타이틀2",
      workType: "월별인사변동자료",
      readCount: "78",
      reply: "12",
      writeId: "aaa",
      writeNm: "테스트이름",
      target: "aaa",
      status: "2", // 0 : 미처리, 1 : 처리중, 2 : 처리완료
      file: false,
      regdate: "2023.03.10",
      pos: "1",
      child: "1",
    },
    {
      boardSeq: "3",
      title: "타이틀3",
      workType: "월별인사변동자료",
      readCount: "12",
      reply: "53",
      writeId: "aaa",
      writeNm: "테스트이름",
      target: "김담당",
      status: "2", // 0 : 미처리, 1 : 처리중, 2 : 처리완료
      file: true,
      regdate: "2023.04.15",
      pos: "2",
      child: "2",
    },
    {
      boardSeq: "4",
      title: "타이틀4",
      workType: "월별인사변동자료",
      readCount: "12",
      reply: "53",
      writeId: "aaa",
      writeNm: "테스트이름",
      target: "김담당",
      status: "2", // 0 : 미처리, 1 : 처리중, 2 : 처리완료
      file: true,
      regdate: "2023.04.15",
      pos: "3",
      child: "3",
    },
    {
      boardSeq: "5",
      title: "타이틀5",
      workType: "월별인사변동자료",
      readCount: "1",
      reply: "0",
      writeId: "aaa",
      writeNm: "테스트이름",
      target: "김담당",
      status: "0", // 0 : 미처리, 1 : 처리중, 2 : 처리완료
      file: false,
      regdate: "2023.07.15",
      pos: "0",
      child: "0",
    },
    {
      boardSeq: "6",
      title: "타이틀6",
      workType: "월별인사변동자료",
      readCount: "1",
      reply: "0",
      writeId: "aaa",
      writeNm: "테스트이름",
      target: "김담당",
      status: "0", // 0 : 미처리, 1 : 처리중, 2 : 처리완료
      file: false,
      regdate: "2023.07.15",
      pos: "1",
      child: "1",
    },
  ]);
  const [modal, setModal] = useState(false);
  const { alertActions } = useContext(AlertContext);
  const { alertMessage } = alertActions;
  const [message, setMessage] = useState({
    title: "",
    contents: <></>,
    flag: "",
  });
  const openMessage = (flag, cnt) => {
    let contents =
      flag == "선택항목완료" ? (
        <>항목을 {cnt}개 선택하셨습니다. 완료 처리하시겠습니까?</>
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
  const handleCheckEnd = () => {
    setModal(false);
    alertMessage("선택하신 요청이 모두 완료되었습니다.", "success");
  };

  return (
    <ReqMainStyled>
      <ReqMainContents {...{ date, setDate, boardReqList, openMessage }} />
      {modal && (
        <Message
          {...message}
          btn02Name={
            message.flag == "선택항목완료"
              ? "완료"
              : message.flag == "취소"
              ? "나가기"
              : undefined
          }
          clickCancleBtn={() => setModal(false)}
          onClick={() => {
            message.flag == "1"
              ? writeChange("", "", true)
              : message.flag == "선택항목완료"
              ? handleCheckEnd()
              : history.push("/ㅁㅁㅁ");
            setModal(false);
          }}
        />
      )}
    </ReqMainStyled>
  );
};

export default ReqMainContainer;
