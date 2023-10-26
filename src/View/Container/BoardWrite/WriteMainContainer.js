import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { WriteMainStyled } from "../Styled/WriteMainStyled";
import WriteMainContents from "../../Component/BoardWrite/WriteMainContents";
import Message from "../../Common/Message";

const WriteMainContainer = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [message, setMessage] = useState({
    title: "",
    contents: <></>,
    flag: "",
    idx: "",
  });
  const initData = {
    writeId: "",
    writeNm: "",
    workType: "",
    target: "",
    title: "",
    content: "",
    file: [],
    smsFlag: false,
  };
  const [writeData, setWriteData] = useState({
    writeId: "",
    writeNm: "",
    workType: "",
    target: "",
    title: "",
    content: "",
    file: [],
    smsFlag: false,
  });
  const titleRef = useRef(null);
  const handleWrite = (key, value) => {
    if (key === "deleteFile") {
      setWriteData({
        ...writeData,
        file: writeData.file.filter((item, idx) => idx != value),
      });
    } else {
      setWriteData({
        ...writeData,
        [key]: value,
      });
    }
  };
  const openMessage = (flag, idx) => {
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
      idx: idx,
    });
    setModal(true);
  };
  return (
    <WriteMainStyled>
      <WriteMainContents
        {...{
          openMessage,
          editValue,
          setEditValue,
          handleWrite,
          writeData,
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
            message.flag == "파일삭제"
              ? handleWrite("deleteFile", message.idx)
              : message.flag == "취소"
              ? history.push("/")
              : history.push("/");
            setModal(false);
          }}
        />
      )}
    </WriteMainStyled>
  );
};

export default WriteMainContainer;
