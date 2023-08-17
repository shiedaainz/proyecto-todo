import './TodoList.css'

function TodoLista({children}){
    return(
      <ul className='TodoList'>
        {children}
      </ul>
    );
  }

  export { TodoLista}