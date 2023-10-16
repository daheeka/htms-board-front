import React from "react";
import { HeaderStyled } from "./Styled/HeaderStyled";
import HeaderContents from "../Component/HeaderContents";

const HeaderContainer = () => {
  const menuList = [
    { title: "전체요청", active: true, num: "" },
    { title: "미처리", active: false, num: "0" },
    { title: "처리중", active: false, num: "1" },
    { title: "처리완료", active: false, num: "2" },
  ];
  const handleclick = () => {};
  return (
    <HeaderStyled>
      <HeaderContents menuList={menuList} />
    </HeaderStyled>
  );
};

export default HeaderContainer;
