import React from "react";
import {Todoicon} from './index';

function Completeicon ({completed,onCompletado}){
    return(
        <Todoicon
            type ='check'
            color ={completed ? 'green' :'gray'}
            onClick={onCompletado}
        />
    ); 
}

export{Completeicon};