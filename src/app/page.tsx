import AddTodo from "@/components/addTodo/addTodo";
import Todos from "@/components/todos/todos";

export default function Home() {
  console.log("i am from server home page");
  return (
    <main className=" container mx-auto my-8">
      Hello next
      <AddTodo />
      <Todos/>
    </main>
  );
}
