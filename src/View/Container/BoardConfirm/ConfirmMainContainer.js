import React from "react";
import { ConfirmMainStyled } from "../Styled/ConfirmMainStyled";
import ConfirmMainContents from "../../Component/BoardConfirm/ConfirmMainContents";
import { useState } from "react";
import { getFormatDate } from "../../Common/Common";

const ConfirmMainContainer = () => {
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
  return (
    <ConfirmMainStyled>
      <ConfirmMainContents {...{ date, setDate, boardReqList }} />
    </ConfirmMainStyled>
  );
};

export default ConfirmMainContainer;
