import React from "react";
import TextField from "../../Common/TextField";
import Button from "../../Common/Button";

const ReplySection = () => {
  return (
    <div className="replyContent">
      <div className="replyBox">
        <TextField
          placeholder={"댓글을 입력하세요."}
          width={"100%"}
          variant="basic-none"
          size="large"
        />
        <div className="">
          <p>문자발송라디오버튼</p>
          <Button width="fit-content" variant="file">
            댓글등록
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplySection;
