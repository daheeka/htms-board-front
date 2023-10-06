import React, { useState } from "react";
import { DatePicker } from "rsuite";
import { SearchStyled } from "./Styled/SearchStyled";
import { CustomCalendar } from "./Calendar";
import { getFormatDate } from "./Common";
import TextField from "./TextField";
import Button from "./Button";

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
    "월별인사변동자료",
    "월별급여변동자료",
    "원천신고자료관련",
    "4대보험관련",
    "급여확인작업",
    "제증명관련",
    "퇴직금관련",
    "경조발생관련",
    "연말정산관련",
    "전표처리관련",
    "퇴직금 중간신청",
    "퇴직금 계산 완료",
    "기타",
  ];
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
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
    newClassNames[selectedItem] = "monthBtn body2Bold";
    setClassNames(newClassNames);
    if (i + 1 == month) {
      // 일단 나중에
      const newClassNames = [...classNames];
      newClassNames[i] = "monthBtn02 body2Bold";
      setClassNames(newClassNames);
    }
  };
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
        <div className="selectDiv">
          <select className="select">
            <option value="1" defaultValue={true}>
              전체
            </option>
            {selectArry.map((v, i) => (
              <option value={i + 2} key={i}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <TextField
          // onChange={onChange}
          // value={inputValue}
          width={inputWidth}
          variant={variant}
          // variant={inputVariant}
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
