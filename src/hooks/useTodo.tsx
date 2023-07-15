import { todoContext } from "@/context/todoContext";
import { useContext } from "react";

const useTodo = () => {
  const todosvalue = useContext(todoContext);
  return todosvalue;
};

export default useTodo;
