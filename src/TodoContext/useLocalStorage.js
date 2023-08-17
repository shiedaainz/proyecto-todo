import React from "react";


function useLocalStorage(itemName,inicialValue){
  
    const [item,setItem]=React.useState   (inicialValue);
    const [loading,setLoading]=React.useState   (true);
    const [error,setError]=React.useState   (false);
     

    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem= localStorage.getItem
          (itemName);
  
          let parsedItem;
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(inicialValue))
            parsedItem=inicialValue;
          }else{
            parsedItem= JSON.parse(localStorageItem)
            setItem(parsedItem);
          }
  
          setLoading(false);
          }catch(error){
            setLoading(false);
            setError(true);
        }
      },2000)
    },[]);
    
    
  
    const savedItem = (newItem)=>{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    };
  
    return {
      item, 
      savedItem,
      loading,
      error
    
    };
  
  }

  export{useLocalStorage};

//const defaultTodos = [
//  { text: 'Cortar cebolla', completed: true },
//  { text: 'Tomar el Curso de Intro a React.js', completed: false },
//  { text: 'Llorar con la Llorona', completed: false },
//  { text: 'LALALALALA', completed: false },
//  { text: 'Usar estados derivados', completed: true },
//];

//localStorage.setItem('CHECKLIST_V1', defaultTodos);
//localStorage.removeItem('CHECKLIST_V1');

