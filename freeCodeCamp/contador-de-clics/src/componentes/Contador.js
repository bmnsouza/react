import '../hojas-de-estilo/Contador.css';

import React from 'react';

class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        {this.props.numClics}
      </div>
    );   
  }
}

export default Contador;