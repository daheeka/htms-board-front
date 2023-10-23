import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../Common/Button";
import ReplySection from "./ReplySection";
import { Chips, DotChips } from "../../Common/Chips";
import { useEffect } from "react";

const ReadMainContents = ({ openMessage, boardReadData }) => {
  const history = useHistory();
  useEffect(() => {
    console.log("확인 : " + JSON.stringify(boardReadData[0]));
  });
  return (
    <div className="detailFlowCol">
      <p className="line" style={{ marginTop: "20px" }} />
      <div>
        <div className="detailFlowRow">
          <p className="captionRegular textGrayScale600">
            {boardReadData[0].workType}
          </p>
          {boardReadData[0].pos !== "0" && <Chips value="답변" />}
        </div>
        <div className="detailFlowRow">
          <p className="titleText">{boardReadData[0].title}</p>
          <DotChips process={boardReadData[0].status} />
        </div>
        <div className="displayFlexBetween">
          <div className="detailFlowRow">
            <p className="captionRegular">{boardReadData[0].writeNm}</p>
            <p
              className="captionRegular textGrayScale600"
              style={{ marginTop: "0px" }}
            >
              조회 {boardReadData[0].readCount}
            </p>
            <p
              className="captionRegular textGrayScale600"
              style={{ marginTop: "0px" }}
            >
              작성일 2023년 10월 17일 09:36:17
            </p>
          </div>
          {boardReadData[0].status !== "2" && (
            <Button width="fit-content" variant="file">
              수정
            </Button>
          )}
        </div>
      </div>
      <p className="line" />
      <div className="displayFlexColumn" style={{ gap: "10px" }}>
        <p className="body2Regular textGrayScale900">
          {boardReadData[0].content}
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
      {boardReadData[0].status === "2" && (
        <p className="timeText captionRegular">
          완료일 2023년 02월 20일 09:36:17{" "}
        </p>
      )}
      <div className="btnFlowRow">
        {boardReadData[0].status !== "2" && (
          <Button width="fit-content">답변작성</Button>
        )}
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
          boardReadData,
        }}
      />
    </div>
  );
};

export default ReadMainContents;
