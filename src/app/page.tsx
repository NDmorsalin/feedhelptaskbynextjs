import Footer from '@/Shared/Footer/Footer';
import InputField from '@/components/inputField/inputField';
import SectionTitle from '@/components/sectionTitle/sectionTitle';
import Todos from '@/components/todos/todos';

const HomePage  =async () => {
  

  return (
    <div className='container  mx-auto px-4 md:px-8 my-4'>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center  text-2xl md:text-3xl lg:text-5xl font-bold">Todo List</h1>

        <SectionTitle title='Add Todo'/>
        <InputField/>
      </div>
      
      <SectionTitle title='Todo List'/>
      <Todos/>
      <SectionTitle title='Completed Todos'/>
      <Footer/>
    </div>
  );
};

export default HomePage ;