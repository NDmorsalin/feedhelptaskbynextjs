import Footer from '@/Shared/Footer/Footer';
import SectionTitle from './components/sectionTitle/sectionTitle';
import InputField from './components/inputField/inputField';
import Todos from './components/todos/todos';
import CompleteTodos from './components/completeTodos/completeTodos';

const HomePage  =async () => {
  

  return (
    <> 
   
      <div className='container  mx-auto px-4 md:px-8 my-4'>
      <div className="max-w-4xl mx-auto">
        
        <SectionTitle title='Add Todo'/>
        <InputField/>
      </div>
      
      <SectionTitle title='Todo List'/>
      <Todos/>
      <SectionTitle title='Completed Todos'/>
      <CompleteTodos/>
     
    </div>
   </> 
  );
};

export default HomePage ;