import React from "react";

const WriteMainContents = () => {
  const writeArry = [
    "요청자",
    "요청 형태",
    "요청 받는 사람",
    "요청 제목",
    "요청 내용",
  ];
  return (
    <div>
      {writeArry.map((v, i) => (
        <p key={v + i}>{v}</p>
      ))}
    </div>
  );
};

export default WriteMainContents;
