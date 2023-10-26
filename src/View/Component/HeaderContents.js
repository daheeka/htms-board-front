import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import MenuTab from "../Common/MenuTab";

const HeaderContents = ({ menuList }) => {
  const history = useHistory();
  const loc = useLocation();
  const [tabList, setTabList] = useState([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    setTabList(menuList);
    if (loc.pathname === "/boardConfirm") {
      setActive("2");
    }
  }, [menuList, loc]);

  const handleclick = (num) => {
    setActive(num);
    if (num === "2") {
      history.push("/boardConfirm");
    } else if (num === "0") {
      history.push("/boardDepartment");
    } else {
      history.push("/");
    }
  };
  const handleMain = () => {
    history.push("/");
  };
  return (
    <div className="headerContent">
      <p className="titleH4" onClick={handleMain} style={{ cursor: "pointer" }}>
        업무요청게시판
      </p>
      <div className="headerNav">
        {tabList.map((item, idx) => (
          <MenuTab
            active={item.num === active}
            value={
              <div className="headerNav">
                <button
                  className="headerBtn body2Bold"
                  onClick={() => handleclick(item.num)}
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
