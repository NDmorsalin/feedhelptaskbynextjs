"use client";

import useTodo from "@/hooks/useTodo";
import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const todoValue = useTodo()

    

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
    todoValue?.addTodo(todo)
    setTodo("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-4"
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border-solid border-2 h-full p-2 rounded-lg bg-transparent border-cyan-900"
          placeholder="Add Todo"
        />
        <button type="submit" className="py-2 px-4 rounded-lg bg-slate-900">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
