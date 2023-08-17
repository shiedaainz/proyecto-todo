import { TodoContador } from '../TodoContador';
import { TodoBuscar } from '../TodoBuscar';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import { TodoLista } from '../TodoLista';
import { TodoItem } from '../TodoItem';
import {CreacionTodoBoton} from '../CreacionTodoboton'
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';

function Appui(){
    const{
        loading,
        error,
        busquedaTodos,
        Todofinalizadp,
        Todoeliminado,
        openModal,
        setopenModal
    }= React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoContador/>
        <TodoBuscar/>
        <TodoLista>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && busquedaTodos.length === 0)&& <EmptyTodos/>}

            {busquedaTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompletado = {()=>Todofinalizadp(todo.text)}
                oneliminar = {()=>Todoeliminado(todo.text)}
            />
            ))}
        </TodoLista>
        <CreacionTodoBoton
            setopenModal={setopenModal}/>   
            {openModal&&(
                <Modal>
                    <TodoForm/>
                </Modal>
            )}


        </React.Fragment>
  );
}

export {Appui};