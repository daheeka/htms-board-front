import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ReadMainStyled } from "../Styled/ReadMainStyled";
import ReadMainContents from "../../Component/BoardRead/ReadMainContents";
import Message from "../../Common/Message";

const ReadMainContainer = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({
    title: "",
    contents: <></>,
    flag: "",
  });
  const openMessage = (flag) => {
    let contents =
      flag == "댓글삭제" ? (
        <>등록된 댓글을 삭제하시겠습니까?</>
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
  return (
    <ReadMainStyled>
      <ReadMainContents
        {...{
          openMessage,
        }}
      />
      {modal && (
        <Message
          {...message}
          btn02Name={
            message.flag == "댓글삭제 "
              ? "삭제"
              : message.flag == "취소"
              ? "나가기"
              : undefined
          }
          clickCancleBtn={() => setModal(false)}
          onClick={() => {
            message.flag == "1"
              ? writeChange("", "", true)
              : message.flag == "취소"
              ? history.push("/")
              : history.push("/임시");
            setModal(false);
          }}
        />
      )}
    </ReadMainStyled>
  );
};

export default ReadMainContainer;
