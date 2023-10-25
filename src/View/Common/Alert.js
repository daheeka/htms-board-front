import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AlertStyled } from "./Styled/AlertStyled";
import AlertContext from "../../AlertContext";
import successIcon from "../../Image/payday_co_request_common_alert_icon_success.svg";
import closeIcon from "../../Image/payday_co_request_common_alert_icon_close.svg";
const Alert = () => {
  const history = useHistory();
  const { alertState, alertActions } = useContext(AlertContext);
  const { setCustomAlert } = alertActions;
  const { alertData, customAlert } = alertState;
  const handleToggle = () => {
    setCustomAlert(!customAlert);
    history.push("/");
  };
  return (
    <div
      className="modalOverlay"
      style={{ zIndex: "2000" }}
      onClick={() => handleToggle()}
    >
      <AlertStyled>
        <div className="alertBox">
          <img
            src={closeIcon}
            className="closeImg"
            onClick={() => setCustomAlert(false)}
          />
          <img
            className="alertImg"
            src={alertData.variant == "error" ? errorIcon : successIcon}
          />
          <div className="alertText">{alertData.value}</div>
        </div>
      </AlertStyled>
    </div>
  );
};

export default Alert;
