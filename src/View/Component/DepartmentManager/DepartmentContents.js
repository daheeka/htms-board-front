import React, { useState } from "react";
import DepartmentSection from "./DepartmentSection";

const DepartmentContents = ({ departmentData, employeeData }) => {
  const [manager, setManager] = useState("");
  return (
    <div className="departmentBox">
      <DepartmentSection
        title={"부서 종류"}
        placeholder={"부서명을 입력하세요"}
        departmentData={departmentData}
        managerData={manager}
        setManagerData={setManager}
      />
      <DepartmentSection
        title={"근로자"}
        placeholder={"이름, 사번을 입력하세요"}
        employeeData={employeeData}
      />
      <DepartmentSection
        title={"부서별 담당자"}
        managerData={manager}
        setManagerData={setManager}
      />
    </div>
  );
};

export default DepartmentContents;
