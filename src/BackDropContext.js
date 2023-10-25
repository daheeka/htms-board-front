import React, { createContext, useState } from "react";
import BackDrop from "./View/Common/BackDrop";

const BackDropContext = createContext({
  backDropState: {
    backDrop: false,
  },
  backDropActions: {
    setBackDrop: () => {},
  },
});

const BackDropProvider = ({ children }) => {
  const [backDrop, setBackDrop] = useState(false);
  const value = {
    backDropState: { backDrop },
    backDropActions: { setBackDrop },
  };

  return (
    <BackDropContext.Provider value={value}>
      {children}
      {backDrop && <BackDrop open={backDrop} />}
    </BackDropContext.Provider>
  );
};

export { BackDropProvider };

export default BackDropContext;
