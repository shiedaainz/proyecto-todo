import React from "react";
import './TodoForm.css'
import {TodoContext} from '../TodoContext'
function TodoForm(){
    const {
        addTodo,
        setopenModal,
    }= React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setopenModal(false);
    }
    const oncancel =()=>{
        setopenModal(false);
    }
    const onChange =(event)=>{
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>
                Escribe tu nueva tarea
            </label>
            <textarea placeholder="conseguir trabajo"
            value={newTodoValue}
            onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={oncancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};