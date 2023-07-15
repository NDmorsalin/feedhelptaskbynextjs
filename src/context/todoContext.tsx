"use client";
import { TodoType, TodoContextType } from "@/types/todoTypes";
import { ReactNode, createContext, useState } from "react";

export const todoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    try {
      const localTodos = localStorage.getItem("todos");
      return localTodos ? JSON.parse(localTodos) : [];
    } catch (error) {
      return [];
    }
  });

  const getTodos = async () => {};
  const addTodo = async (task: string = "") => {
    const newTodo: TodoType = {
      _id: Math.random().toString(36).substr(2, 9),
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };
  const deleteTodo = async (id: string = "") => {};
  const updateTodo = async (id: string = "", task?: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        return { ...todo, completed: !todo.completed, task: task || todo.task };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <todoContext.Provider
      value={{ todos, getTodos, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
