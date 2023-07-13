"use client";
import TodoType from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
// roll = 2103277 reg= 19319812440

interface TodoCardProps {
  todo: TodoType;
}

const TodoCard = () => {
  // const TodoCard: FC<TodoCardProps> = ({todo}) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const handleSave = async() => {
    setIsEdit(false);
    };
  return (
    <div className=" p-4 rounded-md border  shadow-md">
      <div className="flex items-center gap-4">
        <input
          /*  checked={todo?.isCompleted} onChange={handleCheckboxChange}  */ type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600"
        />
        {isEdit ? (
          <input
            type="text"
            className="border border-gray-300 rounded-md px-2 py-1 text-slate-900"
          />
        ) : (
          <h4 className={`text-xl font-semibold py-[2px] `}>
            {/* <h4 className={`text-xl font-semibold ${todo?.isCompleted && 'line-through'} `}> */}
            {"todo?.title"}
          </h4>
        )}
      </div>
      <div className="flex items-center justify-between mt-6">
        {isEdit ? (
          <button onClick={handleSave} className="py-2 px-4 rounded-md bg-gradient-to-tl from-green-400 to-green-500 block">
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
            className="py-2 px-4 rounded-md bg-gradient-to-tl from-slate-700 to-slate-900  block"
          >
            Edit
          </button>
        )}
        <button className="py-2 px-4 rounded-md bg-gradient-to-tl from-red-400 to-red-500 block">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
