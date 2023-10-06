import axios from "axios";

/* window 전역 변수에 sStorage 값을 설정 */
window.sStorage =
  window.sessionStorage ||
  (() => {
    // window.sStorage = (function() {
    let winObj = opener || window; //opener가 있으면 팝업창으로 열렸으므로 부모 창을 사용
    let data = JSON.parse(winObj.top.name || "{}");
    let fn = {
      length: Object.keys(data).length /* 요거 ie8 에서 안된다고 함 */,
      setItem: function (key, value) {
        data[key] = value + "";
        winObj.top.name = JSON.stringify(data);
        fn.length++;
      },
      getItem: function (key) {
        return data[key] || null;
      },
      key: function (idx) {
        return Object.keys(data)[idx] || null; //Object.keys() 는 IE9 이상을 지원하므로 IE8 이하 브라우저 환경에선 수정되어야함
      },
      removeItem: function (key) {
        delete data[key];
        winObj.top.name = JSON.stringify(data);
        fn.length--;
      },
      clear: function () {
        winObj.top.name = "{}";
        fn.length = 0;
      },
    };
    return fn;
  })();

/* 예외처리 */
export class UnexpectedApiResultError {
  constructor(resultCode) {
    this.resultCode = resultCode;
  }
}

/* async 처리를 위해 추가 */
export const asyncAPI = async (request, addParams) => {
  let params = {
    // default params
  };

  if (addParams) {
    params = { ...params, ...addParams };
  }
  const { data } = await axios({
    method: "POST",
    url: "http://localhost" + request,
    data: params /* request body로 전달 할때는 data 를 사용해야함 */,
    params: {},
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `${sessionId}`, // 세션에 대한 처리는 아직 안함
    },
  });

  if (!data) throw new UnexpectedApiResultError(null);
  if (data.resultCode != 1) throw new UnexpectedApiResultError(data.resultCode);

  return data.resultData;
};

export const getFormatDate = (date, style = "-", end) => {
  //end : 날짜 어디까지 표기할건지
  let year = date.getFullYear(); //yyyy
  let month = 1 + date.getMonth(); //M
  month = month >= 10 ? month : "0" + month; //month 두자리로 저장
  let day = date.getDate(); //d
  day = day >= 10 ? day : "0" + day; //day 두자리로 저장
  let hours = date.getHours();
  let ampm = "오전";
  if (hours > 12) {
    ampm = "오후";
    hours = hours - 12;
  }
  let minutes = date.getMinutes();
  minutes = minutes >= 10 ? minutes : "0" + minutes; //month 두자리로 저장
  if (end == "minutes")
    return (
      year +
      style +
      month +
      style +
      day +
      " " +
      ampm +
      " " +
      hours +
      ":" +
      minutes
    );
  else if (end == "header") month + "월" + day + "일"; //캘린더에 쓰는거
  else if (end == "header02") return year + style + month; //캘린더에 쓰는거
  else if (style == "월일")
    return year + "년 " + month + "월 " + day + "일"; //캘린더에 쓰는거
  else return year + style + month + style + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
};
