import { useState } from "react"
export default function Ejercicio1() {

  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      function ComponenteFormulario() {
        const [formData, setFormData] = useState ( {
          Manzana: '',
          Pera: '',
          Naranja: '',
          Mandarina: '',
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
