'use client'
import { useRouter } from 'next/navigation';
import {useRef} from 'react';

const addTodo = async (title:string)=>{
    const res = await fetch('http://localhost:3000/api/todo', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,isCompleted: false})
    })
    const data = await res.json();
console.log(data)
    if(res.ok){
        console.log('Todo added');
    }


}

const InputField = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter();
    const handleAddTodo = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const title = inputRef.current?.value;
        if(title){
            await addTodo (title);
            inputRef.current!.value = '';
            router.refresh();
        }

    }

    return (
        <form onSubmit={handleAddTodo} className='flex gap-4 items-center my-4 md:max-w-md mx-auto flex-wrap justify-center'>
            <input ref={inputRef} type="text" name="todoField" id="todoField" className=" flex-1 py-2 px-4 rounded-md dark:border-slate-200 dark:bg-slate-950 border text-slate-700" />
            <button className="py-2 px-4 rounded-md bg-gradient-to-tl from-slate-700 to-slate-900 ">Add</button>
        </form>
    );
};

export default InputField;