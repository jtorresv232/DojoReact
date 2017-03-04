import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultado from "./resultado.js";

class App extends Component {

    constructor(props){
      super(props);
      this.buscar("audifonos");
      this.state = {
        resultados: []
      }
    }

    buscar(busqueda){
      fetch("https://api.mercadolibre.com/sites/MCO/search?q=" + busqueda)
      .then(function (resultado){
      return resultado.json()
    })
    // .then(function(resultado){
    //   this.setState({resultados: resultado.results})
    //   // console.log(json);
    //   // this.setState({
    //   //   resultados: json.results
    //   // })
    // });
    .then((resultado) => {
      console.log(resultado);
      this.setState({resultados: resultado.results})
    })
  }

  cambioInput(elemento){
    console.log("valor: ", elemento.target.value);
    this.buscar(elemento.target.value);
  }

  render() {
    return (

    <div>
      <h1>Jonathan Torres Velez</h1>
      <input type="text" placeholder="Busqueda" onChange={this.cambioInput.bind(this)}></input>
      {this.state.resultados.map(function(resultado){
        return <Resultado resultado={resultado}></Resultado>
      })}
    </div>
    );
  }
}

export default App;
