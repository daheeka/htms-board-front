import React from "react";

const HeaderContents = () => {
  return (
    <div className="headerContent">
      <p className="titleH4">업무요청게시판</p>
      <div className="headerNav02">
        <div className="headerNav">
          <button className="headerBtn body2Bold">전체요청</button>
          <p className="headerLine"></p>
          <button className="headerBtn body2Bold">미처리</button>
        </div>
        <div className="headerNav">
          <button className="headerBtn body2Bold">처리중</button>
          <p className="headerLine"></p>
          <button className="headerBtn body2Bold">처리완료</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderContents;
