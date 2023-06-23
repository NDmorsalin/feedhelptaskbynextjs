'use client'
import useSWR, { mutate } from 'swr';

interface Todo {
    _id:string;
     title:string;
    isCompleted:boolean;
}

interface ToggleComplete {
  isCompleted:boolean;
}

const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  

const useTodos = () => {
  const { data: completeTodos, error:completeError } = useSWR<Todo[]>('/api/todo/complete', fetcher);
  const { data: incompleteTodos, error:incompleteError } = useSWR<Todo[]>('/api/todo/incomplete', fetcher);

  const updateToggleTodo = async (id: string, updatedTodo:ToggleComplete) => {
    await fetch(`/api/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
    mutate('/api/todo/complete');
    mutate('/api/todo/incomplete');
  };

  const deleteTodo = async (id: number) => {
    await fetch(`/api/todo/${id}`, {
      method: 'DELETE',
    });
    mutate('/api/todos');
  };

  return {
    completeTodos,
    incompleteTodos,
    completeError,
    updateToggleTodo,
    incompleteError,
    deleteTodo,
  };
};

export default useTodos;
