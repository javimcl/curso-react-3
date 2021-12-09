import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
// useState es un Hook
function AppHook({name="React", edad}) {  

  const [nombre, setNombre] = useState(name);
  //this.state={nombre: this.props.name};  para componente de clase
  setNombre('React');
  //this.setState(() => ({nombre: "ReaCT"})); para componente de clase

  return (
    <div className="App">
      <p>Hola {nombre}</p>
    </div>
  );
}

export default AppHook;
