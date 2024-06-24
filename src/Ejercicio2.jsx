import { useState } from "react"
export default function Ejercicio2() {
  
  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      function ComponenteFormulario() {
        const [formData, setFormData] = useState ( {
          Nombre: '',
          Edad: ''
        } ) ;
        
      } ;

      return (
        <form onSumbit= {ComponenteFormulario}>
          <label>Nombre</label>
          <input
            {}
            onChangue={handleChange}
          />
          <label>Edad</label>
          <input
            {}
            onChangue = {handleChangue}
          />
          {}
          </form>
      );
    }
    </div>
  )
}
