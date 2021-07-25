import React, { useState } from 'react'
import Formgenerator from "./components/Formgenerator";
import Createsquare from "./components/Createsquare";
import './App.scss';

function App() {

  /*
    Definimos el state  const [bg, setBg] = useState([]);
    con una matriz vacia. 
  */
  const [bg, setBg] = useState([]);

  /*
    Creamos una funcion que procesa el color enviado por el input
    Esta funcion recibe el color ingresado en el input y a su ves lo
    guarda en una Matriz en el state original setBg()
  */

  const sendBg = (bg) =>{
    setBg((c)=>[...c,{bg}])
  }

  const deleteSendBg = () =>{

    console.log('Lo estoy borrando-->',bg)
    // const borrar = bg.splice(0,1)
    bg.pop()
    setBg((c)=>[...c])
    // sendBg(borrar)
    // const borrar = bg.pop()
    // // setBg((c)=>[...c,{borrar}])
    // console.log('borrado-->',borrar)
    
  }

  /*

    Creamos una constante donde recorremos la variable bg
    que contiene la data guardada y la pasamos a nuestro 
    componente <Createsquare/>.

    console.log('Valor de c-->',c, 'Valor de i-->',i)
  
  */
  const box = bg.map((bg,i)=> <Createsquare key={i} inboxSendBg={bg} deleteSendBg={deleteSendBg}/>)

  console.log('Llego color', bg)

  return (
    <>
    <Formgenerator
      /*
      Esta props 'newSendBg' contiene la data 
      de la función 'sendBg', que es a su ves 
      la data que esta retornando desde el componente
      Formgenerator.jsx
      */
      newSendBg={sendBg}
    />

    <div className="contentSquare">
      {box}
    </div>
   </>
  );
}

export default App;
