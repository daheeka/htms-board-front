import React from "react";
import { PopUpStyled } from "./Styled/PopUpStyled";
import closeIcon from "../../Image/payday_co_request_common_alert_icon_close.svg";

const PopUp = ({ clickCancleBtn, name, content, onClick }) => {
  return (
    <PopUpStyled>
      <img
        src={closeIcon}
        className="closeImg"
        onClick={() => clickCancleBtn()}
      />
      <div className="popUpBox"></div>
    </PopUpStyled>
  );
};

export default PopUp;
