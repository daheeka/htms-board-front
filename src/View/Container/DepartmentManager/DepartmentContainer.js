import React, { useState } from "react";
import { DepartmentStyled } from "../Styled/DepartmentStyled";
import DepartmentContents from "../../Component/DepartmentManager/DepartmentContents";
import PopUp from "../../Common/PopUp";

const DepartmentContainer = () => {
  const [popUp, setPopUp] = useState(true);
  const [departmentData, setDepartmentData] = useState([
    { title: "PP", manager: "부서담당자없음", cnt: "0" },
    { title: "Payroll팀", manager: "부서담당자없음", cnt: "0" },
    { title: "경영지원팀", manager: "부서담당자없음", cnt: "0" },
    { title: "급여연구소", manager: "부서담당자없음", cnt: "0" },
    { title: "사업지원팀", manager: "부서담당자없음", cnt: "0" },
  ]);
  const [employeeData, setEmployeeData] = useState([
    {
      name: "강다희", // 이름
      jikcheck: "직책", // 직책명
      htmpersabun: "20220816", // 사번
      departmentNm: "급여연구소", // 부서
      managerDept: "-", // 담당부서
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
    },
    {
      name: "강다희",
      jikcheck: "직책",
      htmpersabun: "20220816",
      departmentNm: "급여연구소",
      managerDept: "-",
    },
  ]);
  const [managerDeptList, setManagerDeptList] = useState([
    { name: "강다희", managerDept: "부서1" },
    { name: "강다희", managerDept: "부서2" },
    { name: "강다희", managerDept: "부서3" },
  ]);

  return (
    <DepartmentStyled>
      {popUp && <PopUp />}
      <DepartmentContents {...{ departmentData, employeeData }} />
    </DepartmentStyled>
  );
};

export default DepartmentContainer;
