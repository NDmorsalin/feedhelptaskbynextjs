import React from 'react';

const InputField = () => {
    return (
        <div className='flex gap-4 items-center my-4 md:max-w-md mx-auto'>
            <input type="text" name="todoField" id="todoField" className=" flex-1 py-2 px-4 rounded-md dark:border-slate-200 dark:bg-slate-950 border" />
            <button className="py-2 px-4 rounded-md bg-gradient-to-tl from-slate-700 to-slate-900 ">Add</button>
        </div>
    );
};

export default InputField;