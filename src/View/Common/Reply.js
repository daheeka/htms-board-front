import React from "react";
import { ReplyStyled } from "./Styled/ReplyStyled";
import deleteIcon from "../../Image/payday_common_icon16_delete_primary500.svg";

const Reply = ({ status, onClick, content, border }) => {
  return (
    <ReplyStyled border={border}>
      <div className="reply">
        <div className="displayFlexBetween">
          <div className="displayFlex" style={{ gap: "10px" }}>
            <p className="captionRegular">{content.writeNm}</p>
            <p
              className="captionRegular textGrayScale600"
              style={{ marginTop: "0px" }}
            >
              {content.regdate}
            </p>
          </div>
          {status !== "2" && (
            <img src={deleteIcon} className="deleteIcon" onClick={onClick} />
          )}
        </div>
        <p className="body2Regular">{content.content}</p>
      </div>
    </ReplyStyled>
  );
};

export default Reply;
