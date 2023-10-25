import React from "react";
export const BOARD_DETAIL_RELOAD = "BOARD_DETAIL_RELOAD";
export const UPDATE_BOARD_DATA = "UPDATE_BOARD_DATA";

export const boardDataReload = () => {
  return {
    type: BOARD_DETAIL_RELOAD,
  };
};

export const updateBoardData = (data) => {
  return {
    type: UPDATE_BOARD_DATA,
    payload: data,
  };
};

const initialState = {
  boardData: {
    boardSeq: "",
    title: "",
    workType: "",
    readCount: "",
    reply: "",
    writeId: "",
    writeNm: "",
    target: "",
    status: "1", // 0 : 미처리, 1 : 처리중, 2 : 처리완료
    file: { fileArray: [] },
    regdate: "",
    pos: "0", // 깊이
    child: "0", // 순서
    timeout: "",
    finishDate: "",
    content: [{ contents: "" }],
    smsFlag: false,
  },
};

const BoardRedux = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_DETAIL_RELOAD:
      return {
        ...state,
      };
    case UPDATE_BOARD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default BoardRedux;
