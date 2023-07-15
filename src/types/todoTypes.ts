export interface TodoType  {
    _id: string;
    completed: boolean;
    task: string;
}

export interface TodoContextType {
    todos: TodoType[];
    getTodos: () => Promise<void>;
    addTodo: (task: string) => Promise<void>;
    deleteTodo: (id: string) => Promise<void>;
    updateTodo: (id: string) => Promise<void>;
}