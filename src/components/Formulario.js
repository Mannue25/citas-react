import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    // Crear el State de citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // State para validar el formulario

    const [error, actualizarError] = useState(false);

    // Función que se ejecuta cada el usuario escribe en un input

    const actualizarState = (e)  => {

        // Extraer la info con el segudno valor que se pasa al useState
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // extraer los valores 

    const {mascota, propietario, fecha, hora, sintomas} = cita

    // Cuando el usuario envia el formulario

    const submitCita = (e) => {
        e.preventDefault();

        // validar el formulario

        if(mascota.trim() === '' || 
        propietario.trim() === ''||
        fecha.trim() === ''||
         hora.trim() === '' || 
        sintomas.trim() === '') {
            actualizarError(true)
            return;
        }

        //Eliminar mensaje previo
        actualizarError(false);

        // Asignar un ID
        cita.id = Date.now()
      

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        actualizarCita({
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: ''
        })
    }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className="alerta-error">Todos los Campos Son Obligatorios</p>   : null}

      <form  
      onSubmit={submitCita}
      
      >
        <label>Nombre Máscota</label>

        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Máscota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>

        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>

        <input type="date" 
        name="fecha" 
        className="u-full-width"
        onChange={actualizarState}
        value={fecha}
         />

        <label>Hora</label>

        <input type="time" 
        name="hora" 
        className="u-full-width"
        onChange={actualizarState}
        value={hora}
         />
        <label>Síntomas</label>
        <textarea 
        className="u-full-width" 
        name="sintomas"
        onChange={actualizarState}
        value={sintomas}
        
        >
            

        </textarea>

        <button 
        type="submit"
        className="u-full-width button-primary"
        >Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

// Documentar los componentes

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;
