'use client'
// import useFetchCompleteTodos from "@/hooks/useFetchCoTodos";
import { FC } from "react";
import TodoCard from "../todoCard/todoCard";
import useTodos from "@/app/hooks/useTodo";

interface Todo {
    _id:string;
    title:string;
    isCompleted:boolean;
}


const CompleteTodos:FC = async () => {
    const {completeTodos} = useTodos()
    console.log(completeTodos)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
            {
                completeTodos?.map((todo:Todo)=>
                <TodoCard /* refetchComplete={refetchComplete} */ key={todo?._id} todo={todo}/>
                )
            }
        </div>
    );
};

export default CompleteTodos;