import Todo from "@/Model/todoModal/todoModel";

const getIncompleteTodos =async() => {
    // await connectDb()
    interface TodoType {
        _id:string;
         title:string;
        isCompleted:boolean;
    }
    try {
        const incompleteTodos  = await Todo.find({ isCompleted: false}).toArray()
        // console.log(incompleteTodos)
        const transformedTodos: TodoType[] = incompleteTodos.map(todo => {
            return {
              _id: todo._id.toString(),
              title: todo.title,
              isCompleted: todo.isCompleted
            };
          });
        return transformedTodos
    } catch (error) {
        console.log(error);
        
    }
}
export default getIncompleteTodos