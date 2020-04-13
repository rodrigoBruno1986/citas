import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import Cita from "./componentes/Cita";

function App() {
  //CItas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  //arregle de citas  va a tener un arreglo [] vacio
  const [citas, guardarCitas] = useState(citasIniciales);

  // se ejecuta cuando el componente esta listo o algo en el componenete cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  //necesitamos leer las citas actuales y la nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //funcion que elimina la cita

  const eliminarCita = (id) => {
    const nuevaCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevaCitas);
  };

  //mensaje condicional

  const titulo = citas.length === 0 ? "no hay citas" : "administra citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
