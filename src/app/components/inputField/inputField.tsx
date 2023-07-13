'use client'
import { useRouter } from 'next/navigation';
import {FormEvent, useRef} from 'react';

const InputField = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onSubmit = async (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmit} className='flex gap-4 items-center my-4 md:max-w-md mx-auto flex-wrap justify-center'>
            <input ref={inputRef} type="text" name="todoField" id="todoField" className=" flex-1 py-2 px-4 rounded-md dark:border-slate-200 dark:bg-slate-950 border text-slate-700" />
            <button className="py-2 px-4 rounded-md bg-gradient-to-tl from-slate-700 to-slate-900 ">Add</button>
        </form>
    );
};

export default InputField;