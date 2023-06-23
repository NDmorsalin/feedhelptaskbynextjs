'use client'
import useTodos from "@/app/hooks/useTodo";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

interface Todo {
    _id:string;
     title:string;
    isCompleted:boolean;
}

interface TodoCardProps {
    todo:Todo;
}

const TodoCard: FC<TodoCardProps> = ({todo}) => {
    const router = useRouter();
    const {completeTodos} = useTodos()
    console.log({completeTodos})
const handleCheckboxChange  = async (event: ChangeEvent<HTMLInputElement>)=>{
    const isChecked = event?.target?.checked;
    try {
        const res = await fetch(`http://localhost:3000/api/todo/${todo._id}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({isCompleted: isChecked})
    })
    const data = await res.json();
    router.refresh();
    console.log(data)
    console.log(isChecked)
    
    } catch (error) {
        console.log(error)
    }
}
    

    return (
        <div className="flex items-center justify-between p-4 rounded-md border  shadow-md">
            <div className="flex items-center gap-4">
                <input checked={todo?.isCompleted} onChange={handleCheckboxChange}  type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                <h4 className={`text-xl font-semibold ${todo?.isCompleted && 'line-through'}`}>
                    {
                        todo?.title
                    }
                </h4>
            </div>
            <div className="space-y-4">
            <button className="py-2 px-4 rounded-md bg-gradient-to-tl from-slate-700 to-slate-900  block">Edit</button>
            <button className="py-2 px-4 rounded-md bg-gradient-to-tl from-red-400 to-red-500 block">Delete</button>
            </div>
        </div>
    );
};

export default TodoCard;