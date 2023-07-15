"use client";
import useTodo from "@/hooks/useTodo";
import TodoCard from "../todoCard/todoCard";
import SectionTitle from "../sectionTitle/sectionTitle";

const Todos = () => {
  const todovalue = useTodo();
  const todos = todovalue?.todos;

  const completeTodos = todos?.filter((todo) => todo.completed);
  const inCompleteTodos = todos?.filter((todo) => !todo.completed);


  return (
    <>
      <SectionTitle title='Todo List'/>
     
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      
      {inCompleteTodos?.map((todo) => (
        <TodoCard key={todo._id} todo={todo} />
      ))}
      
     
    </div>
    <SectionTitle title='Completed Todos'/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      
      {completeTodos?.map((todo) => (
        <TodoCard key={todo._id} todo={todo} />
      ))}
      
     
    </div>
    </>
  );
};

export default Todos;
