import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { addTodo, removeTodo } from "./features/todo/todoSlice";
import StudyComponent from "./StudyComponent";
import StudyComponentSecond from "./StudyComponentSecond";

function App() {
  const todolistdata = useSelector((state) => state.todolist);
  const dispactch = useDispatch();
  const [title, setNewTitle] = useState("");

  const onAddButtonClickhandler = () => {
    // bracket Mactching Code
    // for (const key in title) {
    //   if (title[key] == "(") {
    //     openStack.push(title[key]);
    //   } else if (title[key] == ")") {
    //     if (openStack.length == 0) {
    //       console.log("No matching Brackets");
    //       return 0;
    //     } else openStack.pop();
    //   }
    // }
    // openStack.length === 0
    //   ? console.log("Brackets are matching")
    //   : console.log("No matching Brackets");

    // const factorail = (num) => {
    //   if (num == 0 || num == 1) return 1;
    //   else {
    //     return num * factorail(num - 1);
    //   }
    // };
    // console.log(factorail(4));

    /*
    string = aabccd
    output  = 2a1b2c1d
     create 2 loops
     temparr
     1 for i index 
     check if arr[i] is already present in temp return 0;
     2 for j index

    */

    // const sortedString = title.split("").sort();
    // let count = 1;
    // let resultString = "";
    // for (let i = 0; i < sortedString.length; i++) {
    //   if (sortedString[i] === sortedString[i + 1]) {
    //     count = count + 1;
    //   } else {
    //     resultString = resultString + " " + count + ":" + sortedString[i];
    //     count = 1;
    //   }
    // }
    // console.log("count", resultString);

    // const arr = [-1, 3, 5, 6, 7, 25];

    // const sortedArr = arr.sort((a, b) => a - b);

    // console.log(sortedArr[sortedArr.length - 1]);

    // let sumTotal = 0;
    // sortedArr.map((item, index) => {
    //   if (index < sortedArr.length - 1) {
    //     sumTotal = sumTotal + item;
    //   }
    // });
    // console.log(sumTotal);

    console.log("add btn called");
    if (title !== "") {
      dispactch(addTodo(title));
      setNewTitle("");
    }
  };
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <input value={title} onChange={(e) => setNewTitle(e.target.value)} />
      <button onClick={onAddButtonClickhandler} style={{ margin: "10px" }}>
        Add
      </button>
      {todolistdata.map((todo, index) => {
        return (
          <li
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={todo.id}
          >
            {todo.name}
            <button
              style={{ margin: "4px" }}
              onClick={(e) => {
                dispactch(removeTodo(todo.id));
              }}
            >
              X
            </button>
          </li>
        );
      })}
      <StudyComponent />
      <StudyComponentSecond />
    </div>
  );
}

export default App;
