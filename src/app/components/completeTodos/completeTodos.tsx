'use client'


// import useFetchCompleteTodos from "@/hooks/useFetchCoTodos";
import { FC } from "react";
import TodoCard from "../todoCard/todoCard";

interface Todo {
    _id:number;
    title:string;
}




const CompleteTodos:FC = async () => {
    // const {refetchComplete,isError,isLoading,completeTodo} =await useFetchCompleteTodos();
    // if(isLoading) return <div>Loading...</div>
    // if(isError) return <div>There is an Error</div>
    
    // const res =await fetch('https://jsonplaceholder.typicode.com/todos?completed=true');
    // const completeTodo = await res.json();


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
            {
                []?.map((todo:Todo)=>
                <TodoCard /* refetchComplete={refetchComplete} */ key={todo?._id} todo={todo}/>
                )
            }
        </div>
    );
};

export default CompleteTodos;