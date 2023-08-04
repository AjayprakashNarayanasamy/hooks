import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function List() {
  const localStorageData = "LOCAL_STORAGE";
  const local = JSON.parse(localStorage.getItem(localStorageData))
  const [listValue, setListValue] = useState("");
  console.log(local?.list ?? [])
  const [list, setList] = useState(local?.list ?? []);
  const [completed, setCompleted] = useState(local?.completed ?? []);

  useEffect(() => {
    localStorage.setItem(localStorageData, JSON.stringify({ list, completed }));
  });

  const changeListValue = (e) => {
    setListValue(e.target.value);
  };
  const submitListValue = () => {
    setList([...list, { id: uuidv4(), list: listValue }]);
    // localStorage.setItem(localStorageData, JSON.stringify({ list, completed }));
  };
  const completedList = (val) => {
    setList(list.filter((data) => data.id !== val.id));
    setCompleted([...completed, val]);
    // localStorage.setItem(localStorageData, JSON.stringify({ list, completed }));
  };
  const removeList = (val) => {
    setCompleted(list.filter((data) => data.id !== val.id));
  };

  return (
    <div>
      <h3>Task List</h3>
      <div className="form">
        <input value={listValue} onChange={changeListValue}></input>
        <button onClick={submitListValue}>Add</button>
      </div>
      <div className="task-list">
        {list.map((val, i) => {
          const { id, list } = val;
          return (
            <div onClick={() => completedList(val)} key={i}>
              {" "}
              {list}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completed.map((val, i) => {
          const { id, list } = val;
          return (
            <React.Fragment key={i}>
              <div className="completed-list">
                {list}{" "}
                <span onClick={() => removeList(val)} className="delete-task">
                  x
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
export default List;
