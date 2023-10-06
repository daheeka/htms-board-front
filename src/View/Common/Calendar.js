import React, { useEffect, useState } from "react";
import { DatePicker, DateRangePicker } from "rsuite";
import calendarIcon from "../../Image/payday_common_icon24_calendar_gray600.svg";

const CustomRangeCalendar = ({
  style,
  placeholder = "기간 검색",
  className,
  open,
  setCalendarOpen,
  onOk,
  value = ["", ""],
  placement = "bottom",
}) => {
  useEffect(() => {
    handleScroll(open);
  }, [open]);

  const prevDate = new Date();
  const prevDate01 = new Date();
  const prevDate02 = new Date();
  prevDate.setMonth(prevDate.getMonth() - 1);
  prevDate01.setMonth(prevDate.getMonth() - 2);
  prevDate02.setFullYear(prevDate.getFullYear() - 1);

  return (
    <>
      {!open ? (
        <div className="calendarInput" onClick={() => setCalendarOpen(true)}>
          <img src={calendarIcon} />
          <div>{value[0] == "" ? "기간검색" : `${value[0]} ~ ${value[1]}`}</div>
        </div>
      ) : (
        <DateRangePicker
          style={style}
          open={open}
          placeholder={placeholder}
          className={className}
          // renderValue={(value) => ""} //위에 날짜나오는 거 안보이게하는거
          editable={false} //키보드 사용가능
          renderTitle={(date) =>
            `${date.getFullYear()}년 ${date.getMonth() + 1}월 `
          }
          onClick={() => setCalendarOpen(false)}
          ranges={[
            {
              label: "오늘",
              value: [new Date(), new Date()],
            },
            {
              label: "최근 1달",
              value: [prevDate, new Date()],
            },
            {
              label: "최근 3달",
              value: [prevDate01, new Date()],
            },
            {
              label: "최근 1년",
              value: [prevDate02, new Date()],
            },
          ]}
          onOk={onOk}
          placement={placement}
          locale={{
            sunday: "일",
            monday: "월",
            tuesday: "화",
            wednesday: "수",
            thursday: "목",
            friday: "금",
            saturday: "토",
            ok: "확인",
          }}
        />
      )}
    </>
  );
};

export default CustomRangeCalendar;

export const CustomCalendar = ({
  style,
  placeholder = "YYYY-MM-DD",
  className,
  open,
  setCalendarOpen,
  onOk,
  value = "YYYY-MM-DD",
  placement = "bottom",
  hDate = false,
  onSelect,
}) => {
  //   useEffect(() => {
  //     handleScroll(open);
  //   }, [open]);
  return (
    <>
      {!open ? (
        <div className="calendarInput" onClick={() => setCalendarOpen(true)}>
          <div className={value == "" ? "placeholder" : ""}>
            {value == "" ? "YYYY-MM-DD" : value}
          </div>
          <img src={calendarIcon} />
        </div>
      ) : (
        <>
          {hDate && (
            <div
              className="htmHdateBox body2Regular displayFlex"
              onClick={() => setCalendarOpen(false)}
            >
              {/* <img src={calendarBkIcon} /> */}
              재설정
            </div>
          )}
          <DatePicker
            style={style}
            open={open}
            placeholder={placeholder}
            className={className}
            editable={false}
            onOk={onOk}
            // renderTitle={(date) =>
            //   `${date.getFullYear()}년 ${date.getMonth() + 1}월 `
            // }
            onSelect={onSelect}
            onClick={() => setCalendarOpen(false)}
            placement={placement}
            locale={{
              sunday: "일",
              monday: "월",
              tuesday: "화",
              wednesday: "수",
              thursday: "목",
              friday: "금",
              saturday: "토",
              ok: "확인",
            }}
          />
        </>
      )}
    </>
  );
};
