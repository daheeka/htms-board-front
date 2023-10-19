import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SelectBox from "../../Common/SelectBox";
import TextField from "../../Common/TextField";
import Button from "../../Common/Button";
import { getFormatDate } from "../../Common/Common";
import Alert from "../../Common/Alert";
import Switch from "../../Common/Switch";
import deleteIcon from "../../../Image/delete.svg";

const WriteMainContents = ({ openMessage }) => {
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const reqArry = [
    { value: "writer", name: "PP공유" },
    { value: "", name: "전체공유" },
  ];
  const selectArry = [
    { value: "", name: "전체" },
    { value: "1", name: "월별인사변동자료" },
    { value: "2", name: "월별급여변동자료" },
    { value: "3", name: "원천신고자료관련" },
    { value: "4", name: "4대보험관련" },
    { value: "5", name: "급여확인작업" },
    { value: "6", name: "제증명관련" },
    { value: "7", name: "퇴직금관련" },
    { value: "8", name: "경조발생관련" },
    { value: "9", name: "연말정산관련" },
    { value: "10", name: "전표처리관련" },
    { value: "11", name: "퇴직금 중간신청" },
    { value: "12", name: "퇴직금 계산 완료" },
    { value: "99999999", name: "기타" },
  ];
  const fileRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const fileHandler = (e) => {
    let fileObj = e.target.files;
    let idx = 0;
    let file = [...fileList];
    fileUpload(fileObj, idx, file);
  };

  const fileUpload = (fileObj, idx, file) => {
    let _fileObj = { ...fileObj };
    if (_fileObj[idx] != undefined) {
      file.push({
        ...fileList,
        dataRealNm: _fileObj[idx].name,
        htmEditDate: getFormatDate(new Date(), "-", "minutes"),
        htm006: _fileObj[idx].name.split(".")[1],
        htmFileSize: Math.round((_fileObj[idx].size / 1024) * 10) / 10,
        fileObj: _fileObj[idx],
      });
      idx = idx + 1;
      fileUpload(fileObj, idx, file);
    } else {
      setFileList(file);
    }
  };
  const FileInput = () => (
    <input
      ref={fileRef}
      type="file"
      className="fileInput"
      value={""}
      onChange={(e) => fileHandler(e)}
      multiple
    />
  );
  const clickAddFile = (e) => {
    fileRef.current.click();
  };
  const deleteFile = (idx) => {
    // console.log("확인 : " + idx);
    openMessage("파일삭제");
  };
  const handleSubmit = () => {
    setAlert(true);
  };
  const handleMove = () => {
    history.push("/");
  };
  useEffect(() => {
    console.log("확인!!! : " + JSON.stringify(fileList));
  });
  return (
    <div className="contentGap">
      <div className="headGap">
        <p className="headText">요청자</p>
        <p className="headText" style={{ marginTop: "0px" }}>
          강다희
        </p>
      </div>
      <div className="headGap">
        <p className="headText">요청 형태</p>
        <SelectBox>
          {selectArry.map((v, i) => (
            <option value={v.value} key={i}>
              {v.name}
            </option>
          ))}
        </SelectBox>
      </div>
      <div className="headGap">
        <p className="headText">요청 받는 사람</p>
        <SelectBox>
          {reqArry.map((v, i) => (
            <option value={v.value} key={i}>
              {v.name}
            </option>
          ))}
        </SelectBox>
        <Switch label={"문자발송"} />
      </div>
      <div className="headGap">
        <p className="headText">요청 제목</p>
        <TextField variant="basic" height={"36px"} width={"100%"} />
      </div>
      <div className="headGap">
        <p className="headText">요청 내용</p>
      </div>
      <div className="headGap">
        <p className="headText"></p>
        <p className="body2Regular textError500" style={{ marginTop: "0px" }}>
          파일 첨부 시 파일 용량은 파일 전체 기준 10MB 이하만 가능합니다.
        </p>
      </div>
      <div className="fileFlowRow">
        <Button
          variant="file"
          size="small"
          width="fit-content"
          onClick={(e) => clickAddFile(e)}
        >
          파일첨부
        </Button>
        <FileInput />
        {fileList.map((item, idx) => (
          <div className="fileGap">
            <p className="body2Regular decoration_underline textGrayScale700">
              {item.dataRealNm}
            </p>
            <img src={deleteIcon} onClick={() => deleteFile(idx)} />
          </div>
        ))}
      </div>
      <p className="line" />
      <div className="buttonFlowRow">
        <Button width="fit-content" onClick={handleSubmit}>
          등록
        </Button>
        <Button
          width="fit-content"
          color="primary50"
          onClick={() => openMessage("취소")}
        >
          취소
        </Button>
      </div>
      {alert && (
        <Alert
          contents={"요청이 등록되었습니다."}
          clickCancleBtn={handleMove}
        />
      )}
    </div>
  );
};

export default WriteMainContents;
