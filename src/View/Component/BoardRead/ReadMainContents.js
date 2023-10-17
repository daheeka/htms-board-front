import React from "react";
import Button from "../../Common/Button";
import ReplySection from "./ReplySection";

const ReadMainContents = () => {
  return (
    <div className="detailFlowCol">
      <p className="line" style={{ marginTop: "20px" }} />
      <div>
        <div className="detailFlowRow">
          <p>월별인사변동자료</p>
          <p style={{ marginTop: "0px" }}>답변</p>
        </div>
        <div className="detailFlowRow">
          <p>미수신테스트(거래처담당자)</p>
          <p style={{ marginTop: "0px" }}>미처리</p>
        </div>
        <div className="detailFlowRow">
          <p>강다희</p>
          <p style={{ marginTop: "0px" }}>조회 5</p>
          <p style={{ marginTop: "0px" }}>작성일 2023년 10월 17일 09:36:17</p>
        </div>
      </div>
      <p className="line" />
      <div className="displayFlexColumn" style={{ gap: "10px" }}>
        <p>컨텐츠 내용</p>
        <div className="fileBox"></div>
      </div>
      <div className="btnFlowRow">
        <Button width="fit-content">답변작성</Button>
        <Button width="fit-content" color="primary50">
          목록보기
        </Button>
      </div>
      <ReplySection />
    </div>
  );
};

export default ReadMainContents;
