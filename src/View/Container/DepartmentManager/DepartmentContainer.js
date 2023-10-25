import React, { useState } from "react";
import { DepartmentStyled } from "../Styled/DepartmentStyled";
import DepartmentContents from "../../Component/DepartmentManager/DepartmentContents";
import PopUp from "../../Common/PopUp";

const DepartmentContainer = () => {
  const [popUp, setPopUp] = useState(false);
  const [departmentData, setDepartmentData] = useState([
    { title: "PP", manager: "부서담당자없음", cnt: "0", active: false },
    { title: "Payroll팀", manager: "부서담당자없음", cnt: "0", active: false },
    { title: "경영지원팀", manager: "부서담당자없음", cnt: "0", active: false },
    { title: "급여연구소", manager: "부서담당자없음", cnt: "0", active: false },
    { title: "사업지원팀", manager: "부서담당자없음", cnt: "0", active: false },
  ]);
  const [employeeData, setEmployeeData] = useState([
    {
      name: "강다희", // 이름
      jikcheck: "직책", // 직책명
      htmpersabun: "20220816", // 사번
      departmentNm: "급여연구소", // 부서
      managerDept: "-", // 담당부서
      active: false,
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
      active: false,
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
      active: false,
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
      active: false,
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
      active: false,
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
      active: false,
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
      active: false,
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
      active: false,
    },
  ]);
  const [managerDeptList, setManagerDeptList] = useState([
    { name: "강다희", managerDept: "부서1" },
    { name: "강다희", managerDept: "부서2" },
    { name: "강다희", managerDept: "부서3" },
    { name: "강다희", managerDept: "부서4" },
    { name: "강다희", managerDept: "부서5" },
    { name: "강다희", managerDept: "부서6" },
  ]);
  const handleOpen = () => {
    setPopUp(true);
  };

  return (
    <DepartmentStyled>
      {popUp && (
        <PopUp
          clickCancleBtn={() => setPopUp(false)}
          managerDeptList={managerDeptList}
        />
      )}
      <DepartmentContents
        setDepartmentData={setDepartmentData}
        setEmployeeData={setEmployeeData}
        {...{ departmentData, employeeData, handleOpen }}
      />
    </DepartmentStyled>
  );
};

export default DepartmentContainer;
