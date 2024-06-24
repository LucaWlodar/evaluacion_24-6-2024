import React from 'react'
import { useState } from 'react'

export default function Ejercicio3() {
  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
      <ul>
      function ComponenteFormulario() {
        const [formData, setFormData] = useState ( {
          Informatica_Aplicada_II: '',
          Programacion_II: '',
          Robotica: '',
          Matematica: '',
          Fisica: ''
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
      </ul>
    </div>
  )
}
