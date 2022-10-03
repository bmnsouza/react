import './App.css';

import { Component } from 'react';

import InfoTestimonio from './componentes/Info-testimonio';
import Testimonio from './componentes/Testimonio';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          {
            InfoTestimonio().map(item => (
              <Testimonio
              key={item.key}
              nombre={item.nombre} 
              pais={item.pais}
              imagen={item.imagen}
              cargo={item.cargo}
              empresa={item.empresa}
              testimonio={item.testimonio} />  
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;