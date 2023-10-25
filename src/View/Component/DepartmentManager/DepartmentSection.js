import React, { useEffect, useState } from "react";
import TextField from "../../Common/TextField";
import Button from "../../Common/Button";
import icon from "../../../Image/payday_common_icon16_search_gray0.svg";
import deleteIcon from "../../../Image/payday_common_icon16_delete_primary500.svg";

const DepartmentSection = ({
  title,
  placeholder,
  departmentData,
  employeeData,
  managerData,
  setManagerData,
  handleOpen,
  setDepartmentData,
  setEmployeeData,
}) => {
  const [department, setDepartment] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [managerList, setManagerList] = useState([
    {
      name: "강다희", // 이름
      jikcheck: "직책", // 직책명
      htmpersabun: "20220816", // 사번
      departmentNm: "급여연구소", // 부서
      managerDept: "-", // 담당부서
    },
    {
      name: "강다희", // 이름
      jikcheck: "직책", // 직책명
      htmpersabun: "20220816", // 사번
      departmentNm: "급여연구소", // 부서
      managerDept: "-", // 담당부서
    },
  ]);
  const handleManager = (value, idx) => {
    setManagerData(value);
    const deptList = [...department];
    const updatedItems = deptList.map((item, index) => {
      if (item.hasOwnProperty("active")) {
        if (index !== idx) {
          return { ...item, active: false };
        } else {
          if (item.active === true) {
            setManagerData("");
            return { ...item, active: false };
          } else {
            return { ...item, active: true };
          }
        }
      }
      return item;
    });
    setDepartmentData(updatedItems);
  };
  const handleManagerAdd = (idx) => {
    const emplList = [...employee];
    const updatedItems = emplList.map((item, index) => {
      if (item.hasOwnProperty("active")) {
        if (index !== idx) {
          return { ...item, active: false };
        }
        return { ...item, active: true };
      }
      return item;
    });
    setEmployeeData(updatedItems);
  };
  useEffect(() => {
    setDepartment(departmentData);
    setEmployee(employeeData);
  }, [departmentData, employeeData, managerData, managerList]);
  return (
    <div className="departmentLayout">
      <p className="body1Bold">{title}</p>
      {title != "부서별 담당자" ? (
        <>
          <div className="displayFlex" style={{ gap: "10px" }}>
            <TextField
              width={"260px"}
              placeholder={placeholder}
              variant="basic"
            />
            <Button children={"검색"} iconSrc={icon} />
          </div>
          {title === "부서 종류" ? (
            <div className="scrollBox">
              {department.map((item, idx) =>
                department.length === 0 ? (
                  <></>
                ) : (
                  department.length !== 0 && (
                    <>
                      <div
                        className={
                          item.active === true
                            ? "departmentCard_Active"
                            : "departmentCard"
                        }
                        onClick={() => handleManager(item.title, idx)}
                      >
                        <div
                          className="displayFlexBetween"
                          style={{ width: "100%" }}
                        >
                          <div className="displayFlexColumn">
                            <p className="body1Regular">{item.title}</p>
                            <p
                              className="body2Regular"
                              style={{ marginTop: "0px" }}
                            >
                              {item.manager}
                            </p>
                          </div>
                          <div className="chipText">{item.cnt}</div>
                        </div>
                      </div>
                    </>
                  )
                )
              )}
            </div>
          ) : (
            <div className="scrollBox">
              {employee.map((item, idx) =>
                employee.length === 0 ? (
                  <></>
                ) : (
                  employee.length !== 0 && (
                    <>
                      <div
                        className={
                          item.active === true
                            ? "departmentCard_Active"
                            : "departmentCard"
                        }
                        onClick={() => handleManagerAdd(idx)}
                      >
                        <div
                          className="displayFlexBetween"
                          style={{ width: "100%" }}
                        >
                          <div className="displayFlex" style={{ gap: "10px" }}>
                            <div className="displayFlexColum">
                              <p className="body1Regular">{item.name}</p>
                              <p
                                className="body2Regular"
                                style={{ marginTop: "0px" }}
                              >
                                {item.htmpersabun}
                              </p>
                            </div>
                            <div className="displayFlexColum">
                              <p className="body1Regular">{item.jikcheck}</p>
                              <p
                                className="body2Regular"
                                style={{ marginTop: "0px" }}
                              >
                                {item.departmentNm}
                              </p>
                            </div>
                          </div>
                          <p className="chipText02" onClick={handleOpen}>
                            {item.managerDept}
                          </p>
                        </div>
                      </div>
                    </>
                  )
                )
              )}
            </div>
          )}
        </>
      ) : (
        <>
          {managerData === "" ? (
            <>
              <div className="managerBox">
                <p className="body1Regular">선택된 부서가 없습니다.</p>
              </div>
            </>
          ) : (
            <>
              <div className="managerBox">
                <p className="body1Regular">{managerData} 담당자 목록</p>
              </div>
              {managerList.length === 0 && (
                <div className="managerNone">
                  <p className="body1Regular textGrayScale600">
                    등록된 담당자가 없습니다.
                  </p>
                </div>
              )}
              {managerList.map((item, idx) => (
                <div className="departmentCard">
                  <div className="displayFlexBetween" style={{ width: "100%" }}>
                    <div
                      className="displayFlex"
                      style={{ gap: "10px", alignItems: "flex-end" }}
                    >
                      <div className="displayFlexColum">
                        <p className="body1Regular">{item.name}</p>
                        <p
                          className="body2Regular"
                          style={{ marginTop: "0px" }}
                        >
                          {item.htmpersabun}
                        </p>
                      </div>
                      <div className="displayFlexColum">
                        <p className="body1Regular">{item.jikcheck}</p>
                        <p
                          className="body2Regular"
                          style={{ marginTop: "0px" }}
                        >
                          {item.departmentNm}
                        </p>
                      </div>
                      <p className="chipText">{item.managerDept}</p>
                    </div>
                    <img src={deleteIcon} className="deleteIcon" />
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DepartmentSection;
