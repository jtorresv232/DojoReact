import React, {Component} from "react";

class Resultado extends Component {

  resultado = {};
  constructor(props){
    super(props);
   this.resultado=props.resultado;
  }

  render() {
    return(
      <div>
        <div className="titulo">{this.resultado.title}</div>
        <div className="imagen"><img role="presentation"src={this.resultado.thumbnail}></img></div>
        <div className="precio">{this.resultado.price}</div>
        <div className="link"><a href={this.resultado.permalink}>Mas información</a></div>
      </div>
    );

  }


}

export default Resultado;
