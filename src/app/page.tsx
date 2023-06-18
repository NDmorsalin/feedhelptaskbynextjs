import InputField from '@/components/inputField/inputField';
import SectionTitle from '@/components/sectionTitle/sectionTitle';
import TodoCard from '@/components/todoCard/todoCard';

const HomePage  = () => {
  return (
    <div className='container max-w-4xl mx-auto px-4 md:px-8 my-4'>
      <h1 className="text-center  text-2xl md:text-3xl lg:text-5xl font-bold">Todo List</h1>

      <SectionTitle title='Add Todo'/>
      <InputField/>
      <SectionTitle title='Todo List'/>
      <TodoCard/>
      <SectionTitle title='Completed Todos'/>
    </div>
  );
};

export default HomePage ;