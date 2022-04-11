import React, { useState, useEffect } from "react";

//USANDO CUSTOM HOOK


const useContador = (inicial) =>{


  const [contador, setContador] = useState(inicial);



 const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador , incrementar]
}

//con esta custom hook probamos como nos desuscribimos de un
//useEfect, esto lo podemos usar por ejemplo en el uso de sockets
const Intervalo = ({contador})=>{

  useEffect(() => {
     const i = setInterval(()=>console.log(contador),1000)

    return () => clearInterval(i)
  },[contador] );

  return (
    <p>Intervalo</p>
  )
}

/////// RENDERIZANDO UN BOTON PARA UN CONTADOR USANDO HOOK DE useState

function App() {
  
  const [contador , incrementar] = useContador(0)
   
  
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API    document.title = `You clicked ${count} times`;  });
    document.title = `You clicked ${contador} times`;
  },[contador]);



  return (
    <div>
      <p>Contador: {contador} </p>
       <button onClick={incrementar}>Incrementar</button>
       <Intervalo contador={contador} />
    </div>
  );
}
/////////////////
export default App;
