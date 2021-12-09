import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';//instalar proptypes
import Lista from '../Lista';
import Saludo from '../Saludo';

function App({ name = "React" }) {


  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  }, [])



  return (
    !cargando ?
      <div className="App">
        <Saludo name={name} />
        <Lista />
        {/* <RelojFuncion/> */}
      </div>
      : <p>Cargando...</p>
  );
}

App.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number
}

export default App;
