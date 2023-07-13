import Todo from "@/Model/todoModal/todoModel";
import TodoType from "@/types/types";

const getIncompleteTodos =async() => {
    // await connectDb()
   
    try {
        const incompleteTodos  = await Todo.find({ isCompleted: false})
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