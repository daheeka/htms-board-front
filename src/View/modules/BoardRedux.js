import React from "react";
export const UPDATE_BOARD_DATA = "UPDATE_BOARD_DATA";

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

const BoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOARD_DATA:
      return {
        ...state,
        boardData: action.payload,
      };
    default:
      return state;
  }
};

export default BoardReducer;
