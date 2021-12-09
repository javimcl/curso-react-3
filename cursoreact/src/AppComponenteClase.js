import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';//instalar proptypes

//Componente de clase.
class AppComponenteClase extends React.Component {
  constructor(props){
    super(props);

    this.state = { name: this.props.name};

  }

  componentDidMount(){
    this.setState(() => ({name:"react"}));
  }

  render() {
   
    return (
      <>
        <div className="App">
          <p>Hola {this.state.name}</p>
        </div>
        <p>adios</p>
      </>
    )
  }
}


App.propTypes = { // declaracion de tipo de datos
  name : PropTypes.string,
  edad : PropTypes.number
}

export default AppComponenteClase;
