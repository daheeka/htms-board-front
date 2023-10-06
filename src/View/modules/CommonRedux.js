import React from "react";

const REFRESH_VALUE = "refresh/value";

export const refreshContents = (refreshValue) => ({
  type: REFRESH_VALUE,
  refreshValue,
});

const initialState = {
  refreshValue: 0,
};

const CommonRedux = (state = initialState, action) => {
  // console.log("state redux", action, state);
  switch (action.type) {
    case REFRESH_VALUE:
      return {
        ...state,
        refreshValue: action.refreshValue,
      };
    default:
      return state;
  }
};
export default CommonRedux;
