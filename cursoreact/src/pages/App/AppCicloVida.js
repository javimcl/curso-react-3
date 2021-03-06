import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';//instalar proptypes
import Reloj from '../Reloj/RelojClase';

//Componente de clase.
class AppCicloVida extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: this.props.name };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  componentDidMount() {
    this.setState(() => ({ name: "react" }));
    console.log("montaje");
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  handleClick = (e) => {
    console.log("click");
    this.setState({ name: "JAvaScript" });
  }

  handleOnChange(e) {
    this.setState(() => ({ name: e.target.value }));
  }

  render() {

    return (
      <>
        <div className="App">
          <input type="text" value={this.state.name} onChange={this.handleOnChange}></input>          
          <p onClick={this.handleClick}>Hola {this.state.name}</p>
          {/* <Reloj/> */}
        </div>
        <p>adios</p>
      </>
    )
  }
}


AppCicloVida.propTypes = { // declaracion de tipo de datos
  name: PropTypes.string,
  edad: PropTypes.number
}

export default AppCicloVida;
