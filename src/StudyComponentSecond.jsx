import { useCallback, useEffect, useState } from "react";

const StudyComponentSecond = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use Effect called");
  }, []);
  const incrementBtnHandler = (e) => {
    console.log("inc called");
    setCount(count + 1);
  };
  const dcrementBtnHandler = useCallback((e) => {
    console.log("dcre called");
    setCount(count - 1);
  });
  return (
    <div>
      <button onClick={incrementBtnHandler}>increment</button>
      {count}
      <button onClick={dcrementBtnHandler}>dcrement</button>
    </div>
  );
};

export default StudyComponentSecond;
