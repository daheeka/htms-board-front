import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const HeaderContents = ({ menuList }) => {
  const [tabList, setTabList] = useState([]);
  useEffect(() => {
    setTabList(menuList);
  }, [menuList]);
  return (
    <div className="headerContent">
      <p className="titleH4">업무요청게시판</p>
      <div className="headerNav02">
        {tabList.map((item, idx) => (
          <div className="headerNav">
            <button className="headerBtn body2Bold">{item.title}</button>
            {idx === 0 || idx === 2 ? <p className="headerLine"></p> : <></>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderContents;
