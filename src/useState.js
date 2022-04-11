import React, { useState } from "react";

///// RENDERIZANDO UN BOTON PARA UN CONTADOR USANDO HOOK DE useState

const Button = ({inicial,children}) => {
  //  return [contador, incrementar]

  return <button onClick={inicial}>{children}</button>;
};


function App() {
  // Declara una nueva variable de estado, la cual llamaremos “count”  const [count, setCount] = useState(0);
   const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador} </p>
      
      <Button inicial={()=> setContador(contador + 1)} >Incrementar</Button>
    </div>
  );
}
export default App;


///////
