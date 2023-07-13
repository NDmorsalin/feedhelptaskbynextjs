'use client'
import TodoType from '@/types/types';
import useSWR, { mutate } from 'swr';

 

interface ToggleComplete {
  isCompleted:boolean;
}

const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  

const useTodos = () => {
  const { data: completeTodos, error:completeError } = useSWR<TodoType[]>('/api/todo/complete', fetcher);
  const { data: incompleteTodos, error:incompleteError } = useSWR<TodoType[]>('/api/todo/incomplete', fetcher);

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
