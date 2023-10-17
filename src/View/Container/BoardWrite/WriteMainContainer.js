import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { WriteMainStyled } from "../Styled/WriteMainStyled";
import WriteMainContents from "../../Component/BoardWrite/WriteMainContents";
import Message from "../../Common/Message";

const WriteMainContainer = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({
    title: "",
    contents: <></>,
    flag: "",
  });
  const openMessage = (flag) => {
    let contents =
      flag == "파일삭제" ? (
        <>첨부파일을 삭제하시겠습니까?</>
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
    <WriteMainStyled>
      <WriteMainContents
        {...{
          openMessage,
        }}
      />
      {modal && (
        <Message
          {...message}
          btn02Name={
            message.flag == "파일삭제"
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
              : history.push("/ㅁㅁㅁ");
            setModal(false);
          }}
        />
      )}
    </WriteMainStyled>
  );
};

export default WriteMainContainer;