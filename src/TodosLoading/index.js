import React from "react";
import './TodosLoading.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'reactstrap';
function TodosLoading(){
    return(
        <div className="container-loading">
            <div className="loading">
            <Spinner color= "primary" />
            </div>
        </div>
    );
}

export {TodosLoading};