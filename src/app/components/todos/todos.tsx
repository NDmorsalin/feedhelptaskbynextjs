'use client'

import { useQuery } from "@tanstack/react-query";
// import useFetchTodos from "@/hooks/useFetchTodos";
import TodoCard from "../todoCard/todoCard";
import { FC } from "react";

interface Todo {
    _id:number;
    title:string;
}

const Todos:FC =async () => {
    
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
            {
                []?.map((todo:Todo)=>
                <TodoCard key={todo?._id} todo={todo}/>
                )
            }
        </div>
    );
};

export default Todos;