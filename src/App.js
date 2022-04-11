 const LI = (props) =>{ 
    
    return(
        <li>{props.children}</li>
    )
           
 }

const App = () => {

    return (
        <div>
        <h1>HOLA MUNDO - REACT</h1>
        <ul>
            <LI>Este archivo renombralo como quieras pero no como App.js</LI>
            <LI>Porfavor renombra cada archivo que quieras probar ejemplo: useState.js por App.js </LI>
            <LI>Abre la consola del navegador, para poder observar ciertos valores</LI>        
        </ul>
        </div>
    )
}

export default App;