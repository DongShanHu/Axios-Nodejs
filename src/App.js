import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./component/Loading";
import TodoList from "./component/TodoList";
import axios from "axios";
import * as XLSX from "xlsx";

function App() {
  // const [todos, setTodos] = useState(null);
  const [items, setItems] = useState([]);

  // const onUpdateTodo = (todo) => {
  //   const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
  //   const newTodos = [...todos];
  //   const newTodo = newTodos[todoItemIndex];
  //   newTodo.completed = !newTodo.completed;
  //   newTodos[todoItemIndex] = newTodo;
  //   setTodos(newTodos);
  // };

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
  //     setTodos(result.data);
  //   });
  // }, []); //[] only fires one time when the compent loads
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      console.log(d);
      setItems(d);
    });
  };

  //https://www.youtube.com/watch?v=h33eakwu7oo&ab_channel=SamLama
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <table class="table container">
          <thead>
            <tr>
              <th scope="col">Eid</th>
              <th scope="col">Name</th>
              <th scope="col">Add group</th>
            </tr>
          </thead>
          <tbody>
            {items.map((d) => (
              <tr key={d.item}>
                <th>{d.Eid}</th>
                <td>{d.Name}</td>
                <th>
                  {" "}
                  <input type="checkbox" checked={d.completed} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {todos ? (
        <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
      ) : (
        <Loading />
      )} */}
    </div>
  );
}

export default App;
