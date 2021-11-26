import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';//instalar proptypes

//function App({name, edad}) { sin propiedad por defecto
  function AppTipoDato({name="React", edad}) {  
  if(!name) throw Error("error");
  return (
    <div className="App">
      <p>Hola {name} edad: {edad}</p>
    </div>
  );
}

/*class App extends React.Component {

  render() {
    const { name } = this.props
    return (//sin parenctesis en salgo de linea lo ve como que fuera punto y coma
      //<div> Por sugerencia se utilza  el vacion
      <>
        <div className="App">
          <p>Hola {name}</p>
        </div>
        <p>adios</p>
      </>
    )
  }
}*/


AppTipoDato.propTypes = { // declaracion de tipo de datos
  name : PropTypes.string,
  edad : PropTypes.number
}


export default AppTipoDato;
