import React, { useState } from "react";
import { SearchStyled } from "./Styled/SearchStyled";
import { CustomCalendar } from "./Calendar";
import { getFormatDate } from "./Common";
import TextField from "./TextField";
import Button from "./Button";
import SelectBox from "./SelectBox";

const SearchBox = ({
  date,
  setDate,
  onSearch,
  btnName,
  iconSrc,
  placeholder,
  inputWidth,
  variant,
}) => {
  const monthArry = Array.from({ length: 12 }, (_, index) =>
    String(index + 1).padStart(2, "0")
  );
  const selectArry = [
    { value: "", name: "전체" },
    { value: "1", name: "월별인사변동자료" },
    { value: "2", name: "월별급여변동자료" },
    { value: "3", name: "원천신고자료관련" },
    { value: "4", name: "4대보험관련" },
    { value: "5", name: "급여확인작업" },
    { value: "6", name: "제증명관련" },
    { value: "7", name: "퇴직금관련" },
    { value: "8", name: "경조발생관련" },
    { value: "9", name: "연말정산관련" },
    { value: "10", name: "전표처리관련" },
    { value: "11", name: "퇴직금 중간신청" },
    { value: "12", name: "퇴직금 계산 완료" },
    { value: "99999999", name: "기타" },
  ];
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [option, setOption] = useState("");
  const [classNames, setClassNames] = useState(
    Array(monthArry.length).fill("monthBtn body2Bold")
  );
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = (key, value) => {
    setDate({
      ...date,
      [key]: value,
    });
    key == "startDate" ? setStartOpen(false) : setEndOpen(false);
  };
  const handleCheck = (month, i) => {
    let out = parseInt(month, 10).toString();
    let stDate = new Date();
    stDate.setMonth(out - 1);
    stDate.setDate(1);
    let year = stDate.getFullYear();
    // 다음 달의 첫 날 생성
    let nextMonthFirstDay = new Date(year, out, 1);
    // 다음 달의 첫 날에서 1일을 빼서 현재 월의 마지막 날짜 얻기
    let lastDayOfMonth = new Date(nextMonthFirstDay - 1);
    setDate({
      ...date,
      startDate: getFormatDate(stDate, "-"),
      endDate: getFormatDate(lastDayOfMonth, "-"),
    });
    const newClassNames = [...classNames];
    if (i + 1 == month) {
      const existingMonthBtn02Index = newClassNames.indexOf(
        "monthBtn02 body2Bold"
      );
      if (existingMonthBtn02Index !== -1) {
        newClassNames[existingMonthBtn02Index] = "monthBtn body2Bold";
      }
      newClassNames[i] = "monthBtn02 body2Bold";
    } else {
      newClassNames[i] = "monthBtn body2Bold";
    }

    setClassNames(newClassNames);
  };
  const handleChange = (e) => {};
  return (
    <SearchStyled>
      <div className="searchRow">
        <div className="monthRow">
          {monthArry.map((month, i) => (
            <button
              className={classNames[i]}
              key={i}
              onClick={() => handleCheck(month, i)}
            >
              {month}월
            </button>
          ))}
        </div>
        <div className="calendarRow">
          <CustomCalendar
            open={startOpen}
            setCalendarOpen={setStartOpen}
            value={date.startDate}
            onSelect={(date) => onSelect("startDate", getFormatDate(date, "-"))}
          />
          <div>~</div>
          <CustomCalendar
            open={endOpen}
            setCalendarOpen={setEndOpen}
            value={date.endDate}
            onSelect={(date) => onSelect("endDate", getFormatDate(date, "-"))}
          />
        </div>
      </div>
      <div className="searchRow02">
        <SelectBox value={option} onChange={(e) => setOption(e.target.value)}>
          {selectArry.map((v, i) => (
            <option value={v.value} key={i}>
              {v.name}
            </option>
          ))}
        </SelectBox>
        <TextField
          onChange={(e) => handleChange(e.target.value)}
          // value={inputValue}
          width={inputWidth}
          variant={variant}
          placeholder={placeholder}
          // onKeyUp={onClick}
        />
        <Button
          children={btnName}
          // onClick={onClick}
          // color={btnColor}
          iconSrc={iconSrc}
        />
      </div>
    </SearchStyled>
  );
};

export default SearchBox;
