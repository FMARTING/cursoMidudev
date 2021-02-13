import './App.css';
import Mensajes from './Mensajes.js';


const Description = () => {
  return <p>Esta es la primera version del sistema</p>
}

function App() {
  return (
    <div className="App">
      <Mensajes color = 'red' msg='Estamos trabajando en mi nuevo negocio' />
      <Description />
    </div>
  );
}

export default App;