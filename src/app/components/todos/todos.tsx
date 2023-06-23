import getIncompleteTodos from "@/app/services/getIncompleteTodos";
// import useFetchTodos from "@/hooks/useFetchTodos";
// import { useQuery } from "@tanstack/react-query";
import TodoCard from "../todoCard/todoCard";
import { FC } from "react";

interface Todo {
    _id:string;
     title:string;
    isCompleted:boolean;
}

const Todos:FC =async () => {
   const todos = await getIncompleteTodos()
    // const data = await req.json();
    // console.log('todo',todos);
   
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
            {
               todos?.map((todo:Todo)=>
                <TodoCard key={todo._id} todo={todo}/>
                )
            }
        </div>
    );
};

export default Todos;