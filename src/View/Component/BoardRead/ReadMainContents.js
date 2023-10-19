import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../Common/Button";
import ReplySection from "./ReplySection";
import { Chips, DotChips } from "../../Common/Chips";

const ReadMainContents = ({ openMessage }) => {
  const history = useHistory();
  return (
    <div className="detailFlowCol">
      <p className="line" style={{ marginTop: "20px" }} />
      <div>
        <div className="detailFlowRow">
          <p className="captionRegular textGrayScale600">월별인사변동자료</p>
          <Chips value="답변" />
        </div>
        <div className="detailFlowRow">
          <p className="titleText">미수신테스트(거래처담당자)</p>
          <DotChips process="0" status="미처리" />
        </div>
        <div className="displayFlexBetween">
          <div className="detailFlowRow">
            <p className="captionRegular">강다희</p>
            <p
              className="captionRegular textGrayScale600"
              style={{ marginTop: "0px" }}
            >
              조회 5
            </p>
            <p
              className="captionRegular textGrayScale600"
              style={{ marginTop: "0px" }}
            >
              작성일 2023년 10월 17일 09:36:17
            </p>
          </div>
          <Button width="fit-content" variant="file">
            수정
          </Button>
        </div>
      </div>
      <p className="line" />
      <div className="displayFlexColumn" style={{ gap: "10px" }}>
        <p className="body2Regular textGrayScale900">
          테스트 입니다.
          <br />
          테스트 입니다.
          <br />
          테스트 입니다.
        </p>
        <div className="fileBox">
          <div className="displayFlex" style={{ gap: "10px" }}>
            <p className="body2Regular textPrimary900">
              컨셉제안_소득공제마법사 리뉴얼.zip
            </p>
            <p
              className="body2Regular textGrayScale600"
              style={{ marginTop: "0px" }}
            >
              10022KB
            </p>
          </div>
        </div>
      </div>
      <div className="btnFlowRow">
        <Button width="fit-content">답변작성</Button>
        <Button
          width="fit-content"
          color="primary50"
          onClick={() => history.push("/")}
        >
          목록보기
        </Button>
      </div>
      <ReplySection
        {...{
          openMessage,
        }}
      />
    </div>
  );
};

export default ReadMainContents;
