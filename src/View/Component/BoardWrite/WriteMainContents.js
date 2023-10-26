import React, { useEffect, useMemo, useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import JoditEditor from "jodit-pro-react";
import SelectBox from "../../Common/SelectBox";
import TextField from "../../Common/TextField";
import Button from "../../Common/Button";
import { getFormatDate } from "../../Common/Common";
import AlertContext from "../../../AlertContext";
import Switch from "../../Common/Switch";
import deleteIcon from "../../../Image/delete.svg";
import { useSelector } from "react-redux";

const editorConfig = {
  // buttons: LineButton,
  extraPlugins: ["pasteCode"],
  toolbarSticky: false,
  height: 400,
  toolbarButtonSize: "small",
  // autofocus: true,
  placeholder: "내용을 입력하세요.",
  allowResizeX: false,
  allowResizeY: false,
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  uploader: {
    insertImageAsBase64URI: true,
    imagesExtensions: ["jpg", "png", "jpeg", "gif"],
    url: "",
    // url: "https://xdsoft.net/jodit/finder/?action=fileUpload",
  },

  // 드래그앤 드롭 막음
  enableDragAndDropFileToEditor: false,

  processPasteHTML: false,

  /*테이블 옵션 지우는거 */
  // toolbarInline: false,
  // toolbarInlineDisableFor: ["table"],
  toolbarInlineDisabledButtons: ["addcolumn", "addrow"],
  /* toolbar 지정하는거*/
  buttons: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "eraser",
    "changeCase",
    "|",
    "font",
    "fontsize",
    "paragraph",
    "lineHeight",
    "|",
    "superscript",
    "subscript",
    "|",
    "spellcheck",
    "|",
    "cut",
    "copy",
    "paste",
    "selectall",
    "|",
    "hr",
    "table",
    "link",
    "symbols",
    "emoji",
    "|",
    "image",
    "|",
    "indent",
    "outdent",
    "left",
    "|",
    "brush",
    "|",
    "undo",
    "redo",
    "restore",
    "|",
    "find",
    "google",
    "|",
    "preview",
  ],

  toolbarAdaptive: false,
  readonly: false,
  // license: "A01BM-2/862-CTOML-RAL6Y", // localhost용
  // license: "174FE-0Q6K0-CDLNP-L11RZ", // developers.payday.co.kr
  // license: "6176S-0Q870-CDNO5-LMBAZ", //reqboard.payday.co.kr
};

const WriteMainContents = ({
  openMessage,
  editValue,
  setEditValue,
  handleWrite,
  writeData,
}) => {
  const history = useHistory();
  const { alertActions } = useContext(AlertContext);
  const { alertMessage } = alertActions;
  const editorConfigList = useMemo(() => editorConfig, []);
  const editor = useRef(null);
  const fileRef = useRef(null);
  const [view, setView] = useState(<></>);
  const reqArry = [
    { value: "1", name: "PP공유" },
    { value: "", name: "전체공유" },
  ];
  const boardData = useSelector((state) => state.BoardRedux);
  const selectArry = [
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

  const fileHandler = (e) => {
    let fileObj = e.target.files;
    let idx = 0;
    let file = [...writeData.file];
    fileUpload(fileObj, idx, file);
  };

  const fileUpload = (fileObj, idx, file) => {
    let _fileObj = { ...fileObj };
    if (_fileObj[idx] != undefined) {
      file.push({
        ...writeData.file,
        dataRealNm: _fileObj[idx].name,
        htmEditDate: getFormatDate(new Date(), "-", "minutes"),
        htm006: _fileObj[idx].name.split(".")[1],
        htmFileSize: Math.round((_fileObj[idx].size / 1024) * 10) / 10,
        fileObj: _fileObj[idx],
      });
      idx = idx + 1;
      fileUpload(fileObj, idx, file);
    } else {
      handleWrite("file", file);
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
    openMessage("파일삭제", idx);
  };

  const handleSubmit = () => {
    alertMessage("요청이 등록되었습니다.", "success");
  };
  useEffect(() => {
    const parsedContents = React.createElement("div", {
      dangerouslySetInnerHTML: { __html: editValue },
    });
    setView(parsedContents);
  }, [editValue]);
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
        <SelectBox
          value={writeData.workType}
          onChange={(e) => handleWrite("workType", e.target.value)}
        >
          {selectArry.map((v, i) => (
            <option value={v.value} key={i}>
              {v.name}
            </option>
          ))}
        </SelectBox>
      </div>
      <div className="headGap">
        <p className="headText">요청 받는 사람</p>
        <SelectBox
          value={writeData.target}
          onChange={(e) => handleWrite("target", e.target.value)}
        >
          {reqArry.map((v, i) => (
            <option value={v.value} key={i}>
              {v.name}
            </option>
          ))}
        </SelectBox>
        <Switch
          value={writeData.smsFlag}
          label={"문자발송"}
          onChange={(e) => {
            handleWrite("smsFlag", e.target.checked);
          }}
        />
      </div>
      <div className="headGap">
        <p className="headText">요청 제목</p>
        <TextField
          variant="basic"
          height={"36px"}
          width={"100%"}
          value={writeData.title}
          onChange={(e) => {
            handleWrite("title", e.target.value);
          }}
        />
      </div>
      <div className="headGap" style={{ alignItems: "flex-start" }}>
        <p className="headText">요청 내용</p>
        <JoditEditor
          config={editorConfigList}
          ref={editor}
          value={editValue}
          onBlur={(newContent) => {
            let _newContent = newContent
              .replaceAll("border: 1px solid black;", "")
              .replaceAll('td style="', 'td style="border: 1px solid black;')
              .replaceAll("color: rgb(51, 51, 51);", "")
              .replaceAll("font-size: 14px; font-style: normal;", "")
              .replaceAll("font-variant-ligatures: normal;", "")
              .replaceAll("text-align: start; text-indent: 0px;", "")
              .replaceAll("font-variant-caps: normal;", "")
              .replaceAll("font-weight: 400;", "")
              .replaceAll("text-transform: none; widows: 2;", "")
              .replaceAll(
                "font-family: &quot;Noto Sans KR&quot;, sans-serif;",
                ""
              );
            setEditValue(newContent);
          }}
        />
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
          style={{ minWidth: "100px" }}
        >
          파일첨부
        </Button>
        <div className="displayFlex" style={{ gap: "15px", flexFlow: "wrap" }}>
          <FileInput />
          {writeData.file.map((item, idx) => (
            <div className="fileGap">
              <p className="body2Regular decoration_underline textGrayScale700">
                {item.dataRealNm}
              </p>
              <img src={deleteIcon} onClick={() => deleteFile(idx)} />
            </div>
          ))}
        </div>
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
    </div>
  );
};

export default WriteMainContents;
