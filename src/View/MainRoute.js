import React, { useContext, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { AppContext } from "../AppContext";
import { Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ReqMainContainer from "./Container/BoardReq/reqMainContainer";
import HeaderContainer from "./Container/HeaderContainer";
import WriteMainContainer from "./Container/BoardWrite/WriteMainContainer";
import ReadMainContainer from "./Container/BoardRead/ReadMainContainer";
import ConfirmMainContainer from "./Container/BoardConfirm/ConfirmMainContainer";
import DepartmentContainer from "./Container/DepartmentManager/DepartmentContainer";
import DepartmentHeaderContainer from "./Container/DepartmentHeaderContainer";
import EditContainer from "./Container/BoardWrite/EditContainer";
import { updateBoardData } from "./modules/BoardRedux";

const MainRoute = () => {
  const { login, setLogin } = useContext(AppContext);
  const loc = useLocation();
  const dispatch = useDispatch();
  const [writeData, setWriteData] = useState({
    writeId: "",
    writeNm: "",
    workType: "4",
    target: "1",
    title: "수정화면",
    content: "",
    file: [],
    smsFlag: true,
  });
  const boardData = useSelector((state) => state.BoardRedux);
  useEffect(() => {
    let bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.scrollTop = 0;
  }, [loc.pathname]);

  const getData = useCallback(() => {
    dispatch(updateBoardData(writeData));
  }, []);

  useEffect(() => {
    getData();
  }, [getData, loc]);

  return loc.pathname.indexOf("Department") != -1 ? (
    <div id="bodyContainer">
      <DepartmentHeaderContainer />
      <Route path={"/boardDepartment"} component={DepartmentContainer} />
    </div>
  ) : (
    <div id="bodyContainer">
      <HeaderContainer />
      <Route
        path={["/", "/htms-board-front/"]}
        component={ReqMainContainer}
        exact={true}
      />
      <Route path={"/boardWrite"} component={WriteMainContainer} />
      <Route path={"/boardDetail"} component={ReadMainContainer} />
      <Route path={"/boardConfirm"} component={ConfirmMainContainer} />
      <Route path={"/boardEdit"} component={EditContainer} />
    </div>
  );
};
export default MainRoute;
