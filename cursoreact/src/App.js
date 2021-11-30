import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';//instalar proptypes
import RelojFuncion from './RelojFuncion';

function App({ name = "React" }) {

  const [nombre, setNombre] = useState(name);

  const handleClick = (e) => {
    console.log("click");
    setNombre("JAVASCRIPT");
  }

    return (
    <div className="App">
      <p onClick={handleClick}>Hola {nombre}</p>
      {/* <RelojFuncion/> */}
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  edad: PropTypes.number
}


export default App;
