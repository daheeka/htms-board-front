import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { WriteMainStyled } from "../Styled/WriteMainStyled";

const EditContainer = () => {
  const history = useHistory();
  const [boardContent, setBoardContent] = useState();
  const [modal, setModal] = useState(false);
  const [editValue, setEditValue] = useState("");
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
  useEffect(() => {
    // if()
  });
  return <WriteMainStyled></WriteMainStyled>;
};

export default EditContainer;
