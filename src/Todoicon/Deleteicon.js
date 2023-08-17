import React from "react";
import { Todoicon } from "./index";
function Deleteicon ({oneliminar}){
    return(
        <Todoicon
        type ='delete'
        color='gray'
        onClick={oneliminar}
        />
    )
}

export {Deleteicon};