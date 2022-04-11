import {useState} from 'react'
const App = () =>{
    const [value, setValue] = useState({nombre:'',apellido:'', select : '0'})
    const handleChange = (e) => {
        console.log(e.target.name)
        setValue((satate)=>({
            ...satate,
            [e.target.name]: e.target.value  
        }))
    }
    console.log(value)
    return (
        <div>
        { value.nombre.length < 5 ? <span>Longitud minima de 5</span> : null}
            <input  type="text" name="nombre" value={value.nombre} onChange={handleChange} />
            <input type= "text" name="apellido" value={value.apellido} onChange={handleChange}/>
        

          
        <select value={value.select} name='select' onChange={handleChange}>
                <option value='0'>-- Seleccione un rol --</option>
                <option value='1'>admin</option>
                <option value='2'>cliente</option>
                <option value='3'>vendedor</option>
        </select>


        </div>
       

        
    )
}

export default App