import './TodoItem.css'
import  {Completeicon} from '../Todoicon/Completeicon'
import {Deleteicon} from '../Todoicon/Deleteicon'

function TodoItem (props){
    return (
      <li className='TodoItem'>
        <Completeicon
          completed={props.completed}
          onCompletado={props.onCompletado}
        />
        
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <Deleteicon
        oneliminar={props.oneliminar}
      />
      </li>
    );
  
  }

export{TodoItem}