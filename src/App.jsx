import React, { useEffect, useState } from "react";
import { AppContextProvider } from "./AppContext";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-toastify/dist/ReactToastify.css";

import "./Css/reset.css";
import "./Css/designSystem.css";
import "rsuite/dist/rsuite.css";

import MainRoute from "./View/MainRoute";
import rootReducer from "./View/modules";
import { BackDropProvider } from "./BackDropContext";
import { AlertProvider } from "./AlertContext";

/* 리듀서 스토어 생성 */
const store = createStore(rootReducer);

/* 개발모드 일때만 콘솔 로그 보이도록 함 */
if (process.env.options.mode !== "development") {
  console.log = () => {};
} else {
  console.log("development mode");
}

const App = (props) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {});
  return (
    <AppContextProvider login={login} setLogin={setLogin}>
      <BackDropProvider>
        <AlertProvider>
          <MainRoute />
        </AlertProvider>
      </BackDropProvider>
    </AppContextProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App location={location} />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
