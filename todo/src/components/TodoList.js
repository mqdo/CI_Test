import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

const TodoList = ({ list, setList }) => {
  const handleCheckTodo = (i, isChecked) => {
    const newList = list.map((item, index) => {
      if (index === i) {
        return {
          text: item.text,
          done: isChecked,
        };
      }
      return item;
    });
    setList(newList);
  };

  const handleDeleteTodo = (index) => {
    setList((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
    ]);
  };

  const handleDeleteList = () => {
    setList((prev) =>
      prev.filter((item) => {
        return !list.includes(item);
      })
    );
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="flex justify-between text-lg my-4">
            <label className="flex h-10">
              <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => handleCheckTodo(index, e.target.checked)}
                className="hidden"
              />
              <div className="flex items-center">
                {item.done ? (
                  <FaCheckSquare color="gray" />
                ) : (
                  <FaSquare color="gray" />
                )}
                <p
                  className={`font-semibold pl-4 ${
                    item.done ? "text-gray-500 line-through" : "text-gray-900"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </label>
            <button onClick={() => handleDeleteTodo(index)} className="px-2">
              <FaRegTrashAlt color="gray" />
            </button>
          </li>
        ))}
      </ul>
      {list.length > 0 ? (
        <div className="flex justify-end">
          <button
            onClick={handleDeleteList}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Delete All
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TodoList;
