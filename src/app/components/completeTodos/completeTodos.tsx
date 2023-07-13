'use client'
// import useFetchCompleteTodos from "@/hooks/useFetchCoTodos";
import { FC } from "react";
import TodoCard from "../todoCard/todoCard";
import useTodos from "@/app/hooks/useTodo";
import TodoType from "@/types/types";



const CompleteTodos:FC = async () => {
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
          
             
                <TodoCard /* refetchComplete={refetchComplete} key={todo?._id} todo={todo}*/ />
               
        
        </div>
    );
};

export default CompleteTodos;