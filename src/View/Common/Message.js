import React from "react";
import { MessageStyled } from "./Styled/MessageStyled";
import closeIcon from "../../Image/pd_ccm_post_icon_close.svg";
import Button from "./Button";

const Message = ({
  clickCancleBtn,
  title = "확인해주세요!",
  contents = (
    <>
      입력한 내용이 저장되지 않았습니다.
      <br />
      저장하지 않고 나가시겠습니까?
    </>
  ),
  onClick,
  btn02Name = "삭제",
}) => {
  return (
    <div className="modalOverlay" style={{ zIndex: "2000" }}>
      <MessageStyled>
        <img
          src={closeIcon}
          alt=""
          className="closeImg"
          onClick={() => clickCancleBtn()}
        />
        <div className="subtitleBold">{title}</div>
        <div className="body2Regular" style={{ padding: "10px 0px" }}>
          {contents}
        </div>
        <div
          className="displayFlex"
          style={{ gap: "24px", paddingTop: "10px" }}
        >
          <Button
            variant="standard"
            color="basic"
            size="large"
            onClick={() => clickCancleBtn()}
          >
            취소
          </Button>
          <Button size="large" onClick={onClick}>
            {btn02Name}
          </Button>
        </div>
      </MessageStyled>
    </div>
  );
};

export default Message;
