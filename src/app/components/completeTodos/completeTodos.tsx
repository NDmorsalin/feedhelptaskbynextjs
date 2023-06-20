'use client'


// import useFetchCompleteTodos from "@/hooks/useFetchCoTodos";
import { FC } from "react";
import TodoCard from "../todoCard/todoCard";

interface Todo {
    _id:number;
    title:string;
}




const CompleteTodos:FC = async () => {
    const res = await fetch('http://localhost:3000/api/todo/complete');
    const data = await res.json();
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
            {
                data?.map((todo:Todo)=>
                <TodoCard /* refetchComplete={refetchComplete} */ key={todo?._id} todo={todo}/>
                )
            }
        </div>
    );
};

export default CompleteTodos;