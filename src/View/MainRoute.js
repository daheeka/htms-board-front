import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { AppContext } from "../AppContext";
import { Route } from "react-router";

import Main from "./Main";
import ReqMainContainer from "./Container/BoardReq/reqMainContainer";
import HeaderContainer from "./Container/HeaderContainer";

const MainRoute = () => {
  const { login, setLogin } = useContext(AppContext);
  const loc = useLocation();
  useEffect(() => {
    let bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.scrollTop = 0;
  }, [loc.pathname]);

  return (
    <div id="bodyContainer">
      <HeaderContainer />
      <Route path={["/", "/Main"]} component={ReqMainContainer} exact={true} />
    </div>
  );
};
export default MainRoute;
