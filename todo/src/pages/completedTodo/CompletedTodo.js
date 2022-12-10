import React from "react";

import TodoList from "../../components/TodoList";

const CompletedTodo = ({ list, setList }) => {
  const newList = list.filter((todo) => todo.done);

  return (
    <>
      <TodoList list={newList} setList={setList} />
    </>
  );
};

export default CompletedTodo;
