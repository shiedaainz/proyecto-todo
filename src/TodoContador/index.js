import React from 'react';
import './TodoContador.css'
import { TodoContext } from '../TodoContext';

function TodoContador(){
  const {completadotodos,
    totalTodos,}= React.useContext(TodoContext)
    return(
      <h1 className='TodoCounter'>
        Haz completado <span>{completadotodos}</span> de <span>{totalTodos}</span >TODOS
      </h1>
    );
  }

  export { TodoContador}