import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const DepartmentHeaderContent = () => {
  const history = useHistory();
  const handleMain = () => {
    history.push("/boardDepartment");
  };
  return (
    <div className="headerContent">
      <p className="titleH4" onClick={handleMain} style={{ cursor: "pointer" }}>
        부서별 담당자 화면
      </p>
    </div>
  );
};

export default DepartmentHeaderContent;
