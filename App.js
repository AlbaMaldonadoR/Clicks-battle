import clics from './img/clics.png';
import './App.css';
import Contador from './components/contador'
import Boton from './components/boton';
import {useState} from 'react';

function App() {
  const[numClics, setNumClics]= useState(0);

  const manejarClic = () => {
   setNumClics (numClics +1 );
  }
  const reiniciarContador =() => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logocontenedor'>
    <img
    className='logo'
    src={clics}
    alt='logo' />
      </div>
      <div className='contenedor-principal'>
      <Contador numClics ={numClics} />
        <Boton
        texto ='Clic'
        esBotonDeClic={true}
        manejarClic= {manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
    
       </div>
    </div>
  );
}

export default App;
