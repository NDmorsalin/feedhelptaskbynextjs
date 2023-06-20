'use client'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
// Create a client
const queryClient = new QueryClient()

type QueryProviderProps = {
    children: ReactNode;
  };

const QueryProvider:FC<QueryProviderProps> = ({children}) => {

    return (
         <QueryClientProvider client={queryClient}>
            {
                children
            }
        </QueryClientProvider>
    );
};

export default QueryProvider;