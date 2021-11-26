import logo from './logo.svg';
import './App.css';
import React from 'react';

/*function App(props) {
  return (
    <div className="App">
      <p>Hola {props.name}</p>
    </div>
  );
}*/

class AppComponente extends React.Component {

  render() {
    const {name} = this.props
    return (
      <div className="App">
        <p>Hola {name}</p>
      </div>
    )
  }
}


export default AppComponente;
