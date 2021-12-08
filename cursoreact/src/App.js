import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';//instalar proptypes
import RelojFuncion from './RelojFuncion';
import Contenedor from './Contenedor';
import Campo from './Campo';
import Lista from './Lista';

function App({ name = "React" }) {

  const [nombre, setNombre] = useState(name);
  const [cargando, setCargando] = useState(true);


  const handleClick = (e) => {
    console.log("click");
    setNombre("JAVASCRIPT");
  }

  const handleChange = e => {
    setNombre(e.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  }, [])



  return (
    !cargando ?
      <div className="App">
        <Contenedor titulo="formula">
        <Campo nombre={nombre} handleChange={handleChange}/>
        {
          nombre.length > 0 ? <p onClick={handleClick}>Hola {nombre}</p> : <></>
        }

        {/* <RelojFuncion/> */}
        </Contenedor>
        <Lista/>
      </div>
      : <p>Cargando...</p>
  );
}

App.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number
}


export default App;
