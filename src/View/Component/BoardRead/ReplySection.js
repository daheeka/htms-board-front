import React from "react";
import TextField from "../../Common/TextField";
import Button from "../../Common/Button";
import deleteIcon from "../../../Image/payday_common_icon16_delete_primary500.svg";
import Switch from "../../Common/Switch";

const ReplySection = ({ openMessage, boardReadData }) => {
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
        <div className="reply">
          <div className="displayFlexBetween">
            <div className="detailFlowRow">
              <p className="captionRegular">강다희</p>
              <p
                className="captionRegular textGrayScale600"
                style={{ marginTop: "0px" }}
              >
                작성일 2023년 10월 18일 09:36:17
              </p>
            </div>
            {boardReadData[0].status !== "2" && (
              <img
                src={deleteIcon}
                className="deleteIcon"
                onClick={() => openMessage("댓글삭제")}
              />
            )}
          </div>
          <p className="body2Regular">댓글 테스트 1</p>
        </div>
      </div>
    </div>
  );
};

export default ReplySection;
