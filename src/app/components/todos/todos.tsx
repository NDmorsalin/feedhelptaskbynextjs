'use client'
// import useFetchTodos from "@/hooks/useFetchTodos";
// import { useQuery } from "@tanstack/react-query";
import TodoCard from "../todoCard/todoCard";
import { FC } from "react";

interface Todo {
    _id:number;
    title:string;
}

const Todos:FC =async () => {
    const req = await fetch('http://localhost:3000/api/todo/incomplete',{
        cache:'no-cache',
    });
    const data = await req.json();
    // console.log(data)
   
    // console.log('todos',data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
            {
               data?.map((todo:Todo)=>
                <TodoCard key={todo?._id} todo={todo}/>
                )
            }
        </div>
    );
};

export default Todos;