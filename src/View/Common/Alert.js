import React from "react";
import { AlertStyled } from "./Styled/AlertStyled";
import successIcon from "../../Image/payday_co_request_common_alert_icon_success.svg";
import closeIcon from "../../Image/payday_co_request_common_alert_icon_close.svg";
const Alert = ({ clickCancleBtn, variant, contents }) => {
  return (
    <div
      className="modalOverlay"
      style={{ zIndex: "2000" }}
      onClick={() => clickCancleBtn()}
    >
      <AlertStyled>
        <div className="alertBox">
          <img
            src={closeIcon}
            className="closeImg"
            onClick={() => clickCancleBtn()}
          />
          <img
            className="alertImg"
            src={variant == "error" ? errorIcon : successIcon}
          />
          <div className="alertText">{contents}</div>
        </div>
      </AlertStyled>
    </div>
  );
};

export default Alert;
