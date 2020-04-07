 import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //crear state de Citas

    const [Cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        simtomas:''
    });

    //funcion que se ejecuta cada ves que el usuario escribe en el input

    const actulizarState = e => {
        actualizarCita({
            [e.target.name]:e.target.value
        });
    }


    return ( 
        <Fragment>
            <h2>CREAR FICHA</h2>

            <from>
                <label>Nombre Mascota</label>
                <input 
                    type="texto"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actulizarState}
                />

                <label>Nombre Dueño</label>
                <input 
                    type="texto"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actulizarState}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actulizarState}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actulizarState}
                />

                <label>Sintomas</label>
                <textarea 
                    className ="u-full-width"
                    name="sintomas"
                    onChange={actulizarState}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actulizarState}
                >Agregar Cita
                </button>
                
            </from>    
        </Fragment>
        
     );
}
 
export default Formulario;