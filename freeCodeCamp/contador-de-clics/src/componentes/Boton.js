import '../hojas-de-estilo/Boton.css';

import React from 'react';

class Boton extends React.Component {
  render() {
    return (
    <button
      className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={this.props.manejarClic}>
      {this.props.texto}
    </button>
    );   
  }
}

export default Boton;