import React, { useState } from "react";

import TodoList from "../../components/TodoList";

const AllTodo = ({ list, setList }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo === "") return;
    setList((prev) => [...prev, { text: todo, done: false }]);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <div className="flex justify-between h-10 my-4">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-[80%] px-2 border-2 border-gray-200 rounded-lg"
          />
          <button
            type="submit"
            className="px-6 bg-blue-500 text-white rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
      <TodoList list={list} setList={setList} />
    </div>
  );
};

export default AllTodo;
