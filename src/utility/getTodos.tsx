
const getTodos = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res.json();
    } catch (error) {
      console.log(error)
    }
    return [];
  }
  
    export default getTodos;