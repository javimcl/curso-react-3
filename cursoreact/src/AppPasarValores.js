import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';//instalar proptypes
import RelojFuncion from './Reloj/RelojFuncion';

function AppPasarValores({ name = "React" }) {

  const [nombre, setNombre] = useState(name);

  const handleClick = (e) => {
    console.log("click");
    setNombre("JAVASCRIPT");
  }

  const handleChange = e => {
    setNombre(e.target.value);
  }

  

    return (
    <div className="App">
      <input type="text" value={nombre} onChange={handleChange}></input>
      <p onClick={handleClick}>Hola {nombre}</p>
      {/* <RelojFuncion/> */}
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number
}


export default AppPasarValores;
