"use client";
import useTodo from "@/hooks/useTodo";
import { TodoType } from "@/types/todoTypes";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
// roll = 2103277 reg= 19319812440

// const TodoCard = () => {
const TodoCard = ({ todo }: { todo: TodoType }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState(todo?.task || "");
  const [checked,setChecked] = useState(todo?.completed || false);
  const todoValue = useTodo();

  const handleSave = async () => {
    setIsEdit(false);
    await todoValue?.updateTodo?.(todo._id,checked, task);
  };

  const handleComplete = async (e:ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    await todoValue?.updateTodo?.(todo._id,e.target.checked);
  };

  return (
    <div className=" p-4 rounded-md border  shadow-md">
      <div className="flex items-center gap-4">
        <input
          onChange={handleComplete}
          checked={todo?.completed}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600"
          id={`todoItem-${todo?._id}`}
        />
        {isEdit ? (
          <input
            type="text"
            className="border border-gray-300 rounded-md px-2 py-1 text-slate-900"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        ) : (
          <h4 className={`text-xl font-semibold py-[2px] `}>
            <label htmlFor={`todoItem-${todo?._id}`}>
              {" "}
              <h4
                className={`text-xl font-semibold ${
                  todo?.completed && "line-through"
                } `}
              >
                {todo?.task}
              </h4>
            </label>
          </h4>
        )}
      </div>
      <div className="flex items-center justify-between mt-6">
        {isEdit ? (
          <button
            onClick={handleSave}
            className="py-2 px-4 rounded-md bg-gradient-to-tl from-green-400 to-green-500 block"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
            className="py-2 px-4 rounded-md bg-gradient-to-tl from-slate-700 to-slate-900  block"
          >
            Edit
          </button>
        )}
        <button className="py-2 px-4 rounded-md bg-gradient-to-tl from-red-400 to-red-500 block">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
