import React from "react";
import loadingImg from "../../Image/loading_01.gif";

const BackDrop = ({ open, setOpen, ...rest }) => {
  return (
    <div className="modalOverlay01">
      <img
        src={loadingImg}
        className="loadingImg"
        width="150px"
        height="150px"
      />
    </div>
  );
};

export default BackDrop;
