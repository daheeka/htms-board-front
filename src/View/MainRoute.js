import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { AppContext } from "../AppContext";
import { Route } from "react-router";

import ReqMainContainer from "./Container/BoardReq/reqMainContainer";
import HeaderContainer from "./Container/HeaderContainer";
import WriteMainContainer from "./Container/BoardWrite/WriteMainContainer";
import ReadMainContainer from "./Container/BoardRead/ReadMainContainer";
import ConfirmMainContainer from "./Container/BoardConfirm/ConfirmMainContainer";
import DepartmentContainer from "./Container/DepartmentManager/DepartmentContainer";
import DepartmentHeaderContainer from "./Container/DepartmentHeaderContainer";

const MainRoute = () => {
  const { login, setLogin } = useContext(AppContext);
  const loc = useLocation();
  useEffect(() => {
    let bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.scrollTop = 0;
  }, [loc.pathname]);

  return loc.pathname.indexOf("Department") != -1 ? (
    <div id="bodyContainer">
      <DepartmentHeaderContainer />
      <Route path={"/boardDepartment"} component={DepartmentContainer} />
    </div>
  ) : (
    <div id="bodyContainer">
      <HeaderContainer />
      <Route path={["/", "/Main"]} component={ReqMainContainer} exact={true} />
      <Route path={"/boardWrite"} component={WriteMainContainer} />
      <Route path={"/boardDetail"} component={ReadMainContainer} />
      <Route path={"/boardConfirm"} component={ConfirmMainContainer} />
    </div>
  );
};
export default MainRoute;
