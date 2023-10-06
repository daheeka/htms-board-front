import React, { useState } from "react";
import { ReqMainStyled } from "../Styled/ReqMainStyled";
import { getFormatDate } from "../../Common/Common";
import ReqMainContents from "../../Component/BoardReq/ReqMainContents";

const ReqMainContainer = () => {
  let prevDate = new Date();
  prevDate.setMonth(prevDate.getMonth() - 3);
  const [date, setDate] = useState({
    startDate: getFormatDate(prevDate, "-"),
    endDate: getFormatDate(new Date(), "-"),
  });
  return (
    <ReqMainStyled>
      <ReqMainContents {...{ date, setDate }} />
    </ReqMainStyled>
  );
};

export default ReqMainContainer;
