import React from "react";

import TodoList from "../../components/TodoList";

const ActiveTodo = ({ list, setList }) => {
  const newList = list.filter((todo) => !todo.done);

  return <TodoList list={newList} setList={setList} />;
};

export default ActiveTodo;
