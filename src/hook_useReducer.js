import  { useReducer  } from "react";


//Definir un estado que sera un objeto {contador : 0 }


const initialState = {count: 0};

 //action : siempre sera un objeto que obtendra una propiedad de entrada sera un STRING  y un payload
 //payload: es una propiedad opcional que obtendra lo que sea.
 //action = {type: string, payload : any}


 function reducer(state, action) {
   switch (action.type) {
     case 'increment':
       return {count: state.count + 1};
     case 'decrement':
       return {count: state.count - 1};
     default:
       throw new Error();
   }
 }
 
 function Counter() {
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
     <div>
       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
       Count: {state.count}
       <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
   );
 }

 export default Counter;

