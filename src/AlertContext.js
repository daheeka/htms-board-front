import React, { createContext, useState } from "react";
import Alert from "./View/Common/Alert";

const AlertContext = createContext({
  alertState: {
    customAlert: false,
    alertData: "",
    modal: false,
    message: {},
  },
  alertActions: {
    setCustomAlert: () => {},
    setAlertData: () => {},
    alertMessage: () => {},
    setModal: () => {},
    setMessage: () => {},
  },
});

const AlertProvider = ({ children }) => {
  const [customAlert, setCustomAlert] = useState(false);
  const [alertData, setAlertData] = useState({});
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState({
    title: "확인해주세요!",
    contents: (
      <>
        입력한 내용이 저장되지 않았습니다.
        <br />
        저장하지 않고 나가시겠습니까?
      </>
    ),
    flag: "",
  });

  const alertMessage = (value, variant) => {
    setAlertData({
      value: value,
      variant: variant,
    });
    setCustomAlert(true);
  };

  //숫자만 받기
  const numCheck = (value) => {
    let result = true;
    if (value.indexOf(".") != -1) {
      alertMessage("소수점은 입력하실 수 없습니다.", "error");
      result = false;
    }
    if (isNaN(value.replaceAll(",", ""))) {
      alertMessage("숫자만 입력가능합니다.", "error");
      result = false;
    }
    return result;
  };

  const value = {
    alertState: { customAlert, alertData, modal, message },
    alertActions: {
      setCustomAlert,
      setAlertData,
      alertMessage,
      numCheck,
      setModal,
      setMessage,
    },
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
      {customAlert && <Alert />}
    </AlertContext.Provider>
  );
};

export { AlertProvider };

export default AlertContext;
