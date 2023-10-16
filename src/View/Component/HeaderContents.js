import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MenuTab from "../Common/MenuTab";

const HeaderContents = ({ menuList }) => {
  const [tabList, setTabList] = useState([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    setTabList(menuList);
  }, [menuList, active]);

  const handleclick = () => {};
  return (
    <div className="headerContent">
      <p className="titleH4">업무요청게시판</p>
      <div className="headerNav">
        {tabList.map((item, idx) => (
          <MenuTab
            active={item.num === active}
            value={
              <div className="headerNav">
                <button
                  className="headerBtn body2Bold"
                  onClick={() => handleclick()}
                >
                  {item.title}
                </button>
                {idx === 0 || idx === 2 ? (
                  <p className="headerLine"></p>
                ) : (
                  <></>
                )}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderContents;
