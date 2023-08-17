import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}){
    const{
        item: Todos,
        savedItem: saveTodos,
        loading,
        error
      
      } = useLocalStorage('CHECKLIST_V1',[]);
      const [searchValue, setSearchValue]= React.useState('');
      const [openModal,setopenModal]=React.useState(false);
      const completadotodos= Todos.filter(todo => !!todo.completed).length;
      const totalTodos=Todos.length;
    
      const busquedaTodos = Todos.filter((Todo) => {
        const TodoTexto =Todo.text.toLowerCase();
        const buscartexto = searchValue.toLocaleLowerCase();
        return TodoTexto.includes(buscartexto)
      } );
      const addTodo=(text)=>{
        const nuevos =[...Todos];
        nuevos.push({
          text,
          completed: false,
        });
        saveTodos (nuevos);
      };
    
      const Todofinalizadp =(text) => {
        const nuevos =[...Todos];
        const indexTo= nuevos.findIndex(
          (todos) => todos.text ===text
        );
        nuevos[indexTo].completed=true;
        saveTodos (nuevos);
      };
      const Todoeliminado =(text) => {
        const nuevos =[...Todos];
        const indexTo= nuevos.findIndex(
          (todos) => todos.text ===text
        );
        nuevos.splice(indexTo, 1);
        saveTodos (nuevos);
      }; 
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completadotodos,
            totalTodos,
            searchValue,
            setSearchValue,
            busquedaTodos,
            Todofinalizadp,
            Todoeliminado,
            openModal,
            setopenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>

    );
}


export {TodoContext, TodoProvider};