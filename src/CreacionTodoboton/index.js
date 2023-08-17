import './CreateTodoboton.css';

function CreacionTodoBoton ({setopenModal}){
    return (
        <button className='CreateTodoButton' onClick={()=> {
          setopenModal(state=> !state);    
        }}>
          +
        </button>
    );
  
  }

export{CreacionTodoBoton}