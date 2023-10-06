import React, { useEffect } from "react";
import { refreshContents } from "../modules/CommonRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI } from "../Common/Common";
import { useState } from "react";
import SelectInput from "@mui/material/Select/SelectInput";

const Test1 = ({ initialValue }) => {
  return <div>{initialValue.first}</div>;
};

const Test2 = ({ inputValue, children, ...other }) => {
  console.log(other);
  const { style, onChange } = other;
  return (
    <div>
      <div {...other} style={{ ...style, color: "red" }}>
        {children}
      </div>
      <input defaultValue={inputValue} {...{ onChange }} />
    </div>
  );
};

const MainContents = () => {
  const dispatch = useDispatch();
  const v = useSelector((state) => state.CommonRedux.refreshValue);
  useEffect(async () => {
    try {
      let resultData = await asyncAPI("", {});
      console.log("resultData1 ", resultData);

      resultData = await asyncAPI("", {});
      console.log("resultData2 ", resultData);
    } catch (e) {
      console.log("asyncAPI Log", e);
    }
    dispatch(refreshContents("Block Chain"));
  }, []);

  const def = "default";
  const initialValue = {
    def,
    first: "1",
    second: "2",
  };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const arr = ["1", "2", "3", "4", "5"];
  const [test, setTest] = useState("3");
  const testFunc = (arr, idx) => {
    //setTest(item);
    console.log(arr[idx]);
    idx = idx + 1;
    if (arr.length > idx) {
      sleep(1000).then(() => {
        testFunc(arr, idx);
      });
    }
  };
  const arrIdx = arr.length;
  let idx = 0;
  useEffect(() => {
    testFunc(arr, 0);
  }, []);
  return (
    <div>
      {test}
      <Test1 {...{ initialValue }} />
      <Test2
        inputValue={"Test2"}
        style={{ fontSize: 20 }}
        onClick={() => {
          console.log("onClick");
        }}
        onChange={(e) => {
          console.log("onChange", e.target.value);
        }}
      >
        {v}
      </Test2>
    </div>
  );
};

export default MainContents;
