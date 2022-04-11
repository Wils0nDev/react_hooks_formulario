import React, { useState } from "react";

//USANDO CUSTOM HOOK


const useContador = (inicial) =>{


  const [contador, setContador] = useState(inicial);



 const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador , incrementar]
}



/////// RENDERIZANDO UN BOTON PARA UN CONTADOR USANDO HOOK DE useState

function App() {
  
  const [contador , incrementar] = useContador(0)
   



  return (
    <div>
      <p>Contador: {contador} </p>
       <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
/////////////////
export default App;
