
import getTodos from "@/utility/getTodos";
import TodoCard from "../todoCard/todoCard";

interface Todo {
    
    id:number;
    title:string;
}



const Todos =async () => {
    const todos =await getTodos();
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
            {
                todos?.map((todo:Todo)=>
                <TodoCard key={todo?.id} todo={todo}/>
                )
            }
        </div>
    );
};

export default Todos;