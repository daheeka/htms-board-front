import React, { useState, useEffect } from "react";
import { PopUpStyled } from "./Styled/PopUpStyled";
import closeIcon from "../../Image/payday_co_request_common_alert_icon_close.svg";
import deleteIcon from "../../Image/payday_common_icon16_delete_primary500.svg";

const PopUp = ({ clickCancleBtn, managerDeptList, onClick }) => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    setDataList(managerDeptList);
  });
  return (
    <PopUpStyled>
      <img
        src={closeIcon}
        className="closeImg"
        onClick={() => clickCancleBtn()}
      />
      <p className="subtitleRegular">
        {managerDeptList[0].name}님의 담당 부서 목록
      </p>
      <div className="popUpBox">
        {dataList.map((item, idx) =>
          dataList.length === 0 ? (
            <></>
          ) : (
            dataList.length !== 0 && (
              <>
                <div className="popUpContent">
                  <p>{item.managerDept}</p>
                  <img src={deleteIcon} className="deleteImg" />
                </div>
              </>
            )
          )
        )}
      </div>
    </PopUpStyled>
  );
};

export default PopUp;
