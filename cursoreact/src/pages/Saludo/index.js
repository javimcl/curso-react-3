import React, { useState } from 'react';
import Campo from '../../common/Campo';

import Contenedor from "../../common/Contenedor";

const Saludo = ({name}) => {


    const [nombre, setNombre] = useState(name);


    const handleChange = e => {
        setNombre(e.target.value);
    }

    return (
        <Contenedor titulo="formula">
            <Campo nombre={nombre} handleChange={handleChange} />
            {
                nombre.length > 0 ? <p>Hola {nombre}</p> : <></>
            }          
        </Contenedor>
    )
}

export default Saludo;