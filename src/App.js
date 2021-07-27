import React, { useState } from 'react'
import Content from "./components/Content";
import Tabs from "./components/Tabs";
import './App.scss';

function App() {


  const infoData = [  
  { heading: "Contenido 1", info: "contenido importante 1" },
  { heading: "Contenido 2", info: "contenido importante 2" },
  { heading: "Contenido 3", info: "contenido importante 3" }
 ];

  const [seleccionado, setSeleccionado] = useState(0);

  
  const tab = infoData.map((info,i)=> <Tabs key={i} index={i} info={info} isSelected={i === seleccionado} setSeleccionado={setSeleccionado}/>)
  const content = infoData.map((info,i)=> <Content key={i} info={info} isSelected={i === seleccionado} setSeleccionado={setSeleccionado}/>)


  return (
    <>
    <div className="contentTabs">
      {tab}
    </div>
      {content}
    </>
  );
}

export default App;
