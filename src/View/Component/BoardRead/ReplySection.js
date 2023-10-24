import React, { useState } from "react";
import TextField from "../../Common/TextField";
import Button from "../../Common/Button";
import Switch from "../../Common/Switch";
import Reply from "../../Common/Reply";

const ReplySection = ({ openMessage, boardReadData }) => {
  const [replyContent, setReplyContent] = useState([
    {
      boardSeq: "1",
      writeId: "kdh",
      writeNm: "강다희",
      regdate: "2023년 10월 18일 09:36:17",
      content: "댓글 테스트 1",
    },
    {
      boardSeq: "1",
      writeId: "kdh",
      writeNm: "강다희",
      regdate: "2023년 10월 18일 09:36:17",
      content: "댓글 테스트 2",
    },
    {
      boardSeq: "1",
      writeId: "kdh",
      writeNm: "강다희",
      regdate: "2023년 10월 18일 09:36:17",
      content: "댓글 테스트 3",
    },
  ]);
  return (
    <div className="replyContent">
      {boardReadData[0].status !== "2" && (
        <div className="replyBox">
          <TextField
            placeholder={"댓글을 입력하세요."}
            width={"100%"}
            variant="basic-none"
            size="large"
          />
          <div className="detailFlowRow02">
            <Button width="fit-content" variant="file">
              댓글등록
            </Button>
            <Switch label={"문자발송"} />
          </div>
        </div>
      )}
      <div style={{ width: "100%" }}>
        {replyContent.map((item, idx) => (
          <Reply
            status={boardReadData[0].status}
            onClick={() => openMessage("댓글삭제")}
            content={item}
            border={idx === replyContent.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ReplySection;
