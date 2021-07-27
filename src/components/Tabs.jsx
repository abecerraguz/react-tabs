import React from 'react';

const Createsquare = ({index,info,isSelected,setSeleccionado}) => {

    const activar = ()=>{
        setSeleccionado(index);
    }

    return (
        <>
        <button 
        onClick={activar}
        className={"contentTabs__tabs" + (isSelected ? " selected" : "")}
        >
            <h4>{info.heading}</h4>
        </button>
        </>
  
    );
}

export default Createsquare;