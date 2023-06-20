/* 'use client'

import useSwr from "swr";

// const fetcher = (url) => {
//     return async () => {
//         const res = await fetch(url)
//         const data = await res.json()
//         return data
//     }
// }
const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  
const useFetchCompleteTodos =async () => {
    const { data:completeTodos=[], error,isLoading } = useSwr(
        '/api/todo/complete' ,       
        fetcher
    )
    return { completeTodos, error,isLoading }
    
};

export default useFetchCompleteTodos; */

