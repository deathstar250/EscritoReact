import React, { Component } from 'react'; 
import './App.css';
import Padre from './componentes/escrito/Padre';
import Hijo from './componentes/escrito/Hijo';

class App extends Component {
  render() {
    return (
      <div>
        <Padre> 
        </Padre>
      </div>
    );
  }
}

export default App;
