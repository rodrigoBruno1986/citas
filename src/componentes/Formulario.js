import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearCita }) => {
  //crear state de Citas

  const [Cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    simtomas: "",
  });

  const [error, actualizarError] = useState(false);

  //funcion que se ejecuta cada ves que el usuario escribe en el input

  const actulizarState = (e) => {
    actualizarCita({
      ...Cita,
      [e.target.name]: e.target.value,
    });
  };

  //extraer valores

  const { mascota, propietario, fecha, hora, sintomas } = Cita;

  //funcion donde se envia formulario

  const submiCita = (e) => {
    e.preventDefault();

    //validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //eliminar el mensaje previo

    actualizarError(false);

    //asignar un ID
    Cita.id = uuidv4();

    //Crear la cita

    crearCita(Cita);

    //reiniciar un form
  };

  return (
    <Fragment>
      <h2>CREAR FICHA</h2>

      {error ? (
        <p className="alerta-error"> todos los campos son obligatorio</p>
      ) : null}

      <form onSubmit={submiCita}>
        <label>Nombre Mascota</label>
        <input
          type="texto"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actulizarState}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="texto"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={actulizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actulizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actulizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actulizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
