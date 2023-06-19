import { FC } from "react";

interface Todo {
    id:number;
    title:string;
}

interface TodoCardProps {
    todo:Todo;
}

const TodoCard: FC<TodoCardProps> = ({todo}) => {
    return (
        <div className="flex items-center justify-between p-4 rounded-md border  shadow-md">
            <div className="flex items-center gap-4">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                <h4 className="text-xl font-semibold">
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