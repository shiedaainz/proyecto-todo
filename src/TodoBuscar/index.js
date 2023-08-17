import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoBuscar.css'

function TodoBuscar (){
  const {searchValue,
    setSearchValue,}= React.useContext(TodoContext)
    return (
        <input className='TodoSearch' placeholder="ejemplo:pray the sun" value={searchValue} 
        onChange={(event)=> {
          setSearchValue(event.target.value);
        }}/>
    );
  
  }
export{TodoBuscar}