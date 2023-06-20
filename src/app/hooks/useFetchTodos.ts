/* 'use client'
import useSwr from 'swr';
const fetcher = async (url: string) => {
    console.log('fetcher url',url);
    
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  
const useFetchTodos =async () => {
    const { data:todos=[], error,isLoading } = useSwr(
        '/api/todo/incomplete' ,       
        fetcher
    )
    console.log('useFetchTodos todos',todos);
    
    return { todos, error,isLoading }
    
};

export default useFetchTodos; */