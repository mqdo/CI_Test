import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { AllTodo, ActiveTodo, CompletedTodo } from "./pages";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("todoList");
    if (JSON.parse(list).length > 0) {
      setTodoList(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    const list = JSON.stringify(todoList);
    localStorage.setItem("todoList", list);
  }, [todoList]);

  return (
    <Router>
      <div className="w-[500px] mx-auto">
        <h1 className="text-gray-900 text-3xl text-center m-4 font-bold">
          #todo
        </h1>
        <ul className="h-10 flex justify-around items-center list-none border-b-2 border-gray-200 text-gray-500 font-medium">
          <li className="h-full w-24 text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-block w-full h-full ${
                  isActive ? "border-b-4 border-blue-600" : ""
                }`
              }
            >
              All
            </NavLink>
          </li>
          <li className="h-full w-24 text-center">
            <NavLink
              to="/active"
              className={({ isActive }) =>
                `inline-block w-full h-full ${
                  isActive ? "border-b-4 border-blue-600" : ""
                }`
              }
            >
              Active
            </NavLink>
          </li>
          <li className="h-full w-24 text-center">
            <NavLink
              to="/completed"
              className={({ isActive }) =>
                `inline-block w-full h-full ${
                  isActive ? "border-b-4 border-blue-600" : ""
                }`
              }
            >
              Completed
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={<AllTodo list={todoList} setList={setTodoList} />}
          />
          <Route
            path="/active"
            element={<ActiveTodo list={todoList} setList={setTodoList} />}
          />
          <Route
            path="/completed"
            element={<CompletedTodo list={todoList} setList={setTodoList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
