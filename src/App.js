import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './components/Inicio';
import Bienvenido from './components/Bienvenido';
import Aprendiendo from './components/Aprendiendo';
import Objetivo from './components/Objetivo';
import Vision from './components/Vision';
import ImagenWeb from './components/ImagenWeb';
import ImagenLocal from './components/ImagenLocal';
import AnotherComponent from './components/AnotherComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

          <Inicio/>
          <Bienvenido/>
          <Aprendiendo/>
          <Objetivo/>
          <Vision/>
          <ImagenWeb/>
          <ImagenLocal/>
          <AnotherComponent/>
          <div>
            <p>Hola</p>
          </div>
        <footer>By MiGlez, GNU License</footer>
      </div>
    );
  }
}

export default App;
